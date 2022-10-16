const form = document.querySelector('form');
const list = document.querySelector('.list');
const button = document.querySelector('.more');

// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
// const API = '9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK';

const BASE_URL = 'https://pixabay.com/api/';
const API = '30624593-67a024fcb44d725cda2d85f07';

function fetchEvent() {
  const params = new URLSearchParams({
    key: API,
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => console.log(error));
}

function getEvents() {
  fetchEvent().then(data => {
    const events = data.hits;
    renderEvents(events);
  });
}
getEvents();

function renderEvents(images) {
  const markup = images.map(
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
  ).join('')
  list.innerHTML = markup
}
