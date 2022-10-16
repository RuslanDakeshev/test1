const form = document.querySelector('form');
const list = document.querySelector('.list');
const button = document.querySelector('.more');

// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
// const API = '9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK';

const BASE_URL = 'https://pixabay.com/api/';
const API = '30624593-67a024fcb44d725cda2d85f07';

let pageToFetch = 1;
let keyword = '';
// функция запроса на сервер//
function fetchEvent(page, q) {
  const params = new URLSearchParams({
    key: API,
    page,
    q,
    per_page: 40,
  });
  //возвращаем результат работы fetch//
  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      //ответ с бекенда и проверка на 400//
      if (!response.ok) {
        throw new Error(response.status);
      }
      //парсим json//
      return response.json();
    })
    .catch(error => console.log(error));
}
//возвращает распарсеный json, data-значение переменной,hits-массив с бека//
function getEvents(page, q) {
  fetchEvent(page, q).then(data => {
    const events = data.hits;
    // if (events) {
    //   renderEvents(events);
    // }
    // if (data.page.totalElements === 0) {
    //   button.classList.add('invisible');
    //   alert(`There are no events by keyword ${q}`)
    // }
    renderEvents(events);

    //если последняя страница-скрываем кнопку
    //  if (pageToFetch === totalPages) {
    //    button.classList.add('invisible');
    //    alert('Finish');
    //    return;
    //  }

    pageToFetch += 1;
    // if (data.page.totalPages > 1) {
    button.classList.remove('invisible');
    // }
  });
}
// getEvents();
//рендер разметки//
function renderEvents(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-card">
    <a href="${webformatURL}">
      <img class="photo-card__img" src="${largeImageURL}" alt="${tags}" loading="lazy" width="320" height="212" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes</b>
          <span>${likes}</span>
        </p>
        <p class="info-item">
          <b>Views</b>
          <span>${views}</span>
        </p>
        <p class="info-item"> 
          <b>Comments</b>
          <span>${comments}</span>
        </p>
        <p class="info-item">
          <b>Downloads</b>
          <span>${downloads}</span>
        </p>
      </div>
    </div>`;
      }
    )
    .join('');
  list.insertAdjacentHTML('beforeend', markup);
}
//при сабмите формы-поиск событий
form.addEventListener('submit', event => {
  event.preventDefault();
  const query = event.target.elements.query.value;
  keyword = query;
  pageToFetch = 1;
  list.innerHTML = '';
  if (!query) {
    return;
  }
  getEvents(pageToFetch, query);
});
//подгружать собыития при нажатии на кнопку
button.addEventListener('click', () => {
  getEvents(pageToFetch, keyword);
});
