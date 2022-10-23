// const form = document.querySelector('form');
// const list = document.querySelector('.list');
// const button = document.querySelector('.more');

// // const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
// // const API = '9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK';

// const BASE_URL = 'https://pixabay.com/api/';
// const API = '30624593-67a024fcb44d725cda2d85f07';

// let pageToFetch = 0;
// let keyword = '';
// // функция запроса на сервер//
// function fetchEvent(page, q) {
//   const params = new URLSearchParams({
//     key: API,
//     page,
//     q,
//     per_page: 40,
//   });
//   //возвращаем результат работы fetch//
//   return fetch(`${BASE_URL}?${params}`)
//     .then(response => {
//       //ответ с бекенда и проверка на 400//
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       //парсим json//
//       return response.json();
//     })
//     .catch(error => console.log(error));
// }
// //возвращает распарсеный json, data-значение переменной,hits-массив с бека//
// function getEvents(page, q) {
//   fetchEvent(page, q).then(data => {
//     const events = data.hits;
//     // if (events) {
//     //   renderEvents(events);
//     // }
//     // if (data.page.totalElements === 0) {
//     //   button.classList.add('invisible');
//     //   alert(`There are no events by keyword ${q}`)
//     // }
//     renderEvents(events);

//     //если последняя страница-скрываем кнопку
//     //  if (pageToFetch === totalPages) {
//     //    button.classList.add('invisible');
//     //    alert('Finish');
//     //    return;
//     //  }

//     pageToFetch += 1;
//     // if (data.page.totalPages > 1) {
//     button.classList.remove('invisible');
//     // }
//   });
// }
// // getEvents();
// //рендер разметки//
// function renderEvents(images) {
//   const markup = images
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => {
//         return `<div class="photo-card">
//     <a href="${webformatURL}">
//       <img class="photo-card__img" src="${largeImageURL}" alt="${tags}" loading="lazy" width="320" height="212" />
//       </a>
//       <div class="info">
//         <p class="info-item">
//           <b>Likes</b>
//           <span>${likes}</span>
//         </p>
//         <p class="info-item">
//           <b>Views</b>
//           <span>${views}</span>
//         </p>
//         <p class="info-item">
//           <b>Comments</b>
//           <span>${comments}</span>
//         </p>
//         <p class="info-item">
//           <b>Downloads</b>
//           <span>${downloads}</span>
//         </p>
//       </div>
//     </div>`;
//       }
//     )
//     .join('');
//   list.insertAdjacentHTML('beforeend', markup);
// }
// //при сабмите формы-поиск событий

// // //при сабмите формы-поиск событий
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   const query = event.target.elements.searchQuery.value;
//   keyword = query;
//   pageToFetch = 1;
//   list.innerHTML = '';
//   if (!query) {
//     return;
//   }
//   getEvents(pageToFetch, query);
// });
// //подгружать собыития при нажатии на кнопку
// button.addEventListener('click', () => {
//   getEvents(pageToFetch, keyword);
// });





// ///////////////////////////////////////////////////////////////

// // import { EventsApi } from './eventsApi.js';

// // const form = document.querySelector('form');
// // const list = document.querySelector('.list');
// // const button = document.querySelector('.more');

// // // const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json';
// // // const API = '9cTjAjlRB53wyhAFk5VzXcBu5GiPU6fK';

// // const eventsApi = new EventsApi(EventsApi.q);

// // eventsApi.fetchEvent().then(handleSucces).catch(handleError);

// // function handleSucces(data) {
// //   const events = data.hits;
// //   renderEvents(events);
// //    eventsApi.page += 1;
// //    // if (data.page.totalPages > 1) {
// //    button.classList.remove('invisible');
// // }

// // function renderEvents(images) {
// //   const markup = images
// //     .map(
// //       ({
// //         webformatURL,
// //         largeImageURL,
// //         tags,
// //         likes,
// //         views,
// //         comments,
// //         downloads,
// //       }) => {
// //         return `<div class="photo-card">
// //     <a href="${webformatURL}">
// //       <img class="photo-card__img" src="${largeImageURL}" alt="${tags}" loading="lazy" width="320" height="212" />
// //       </a>
// //       <div class="info">
// //         <p class="info-item">
// //           <b>Likes</b>
// //           <span>${likes}</span>
// //         </p>
// //         <p class="info-item">
// //           <b>Views</b>
// //           <span>${views}</span>
// //         </p>
// //         <p class="info-item">
// //           <b>Comments</b>
// //           <span>${comments}</span>
// //         </p>
// //         <p class="info-item">
// //           <b>Downloads</b>
// //           <span>${downloads}</span>
// //         </p>
// //       </div>
// //     </div>`;
// //       }
// //     )
// //     .join('');
// //   list.insertAdjacentHTML('beforeend', markup);
// // }

// // function handleError(error) {
// //   console.log(error);
// // }

// // button.addEventListener('click', () => {
// //   eventsApi.page += 1;
// //   eventsApi.fetchEvent().then(handleSucces).catch(handleError);
// // })
// // // //возвращает распарсеный json, data-значение переменной,hits-массив с бека//
// // // function getEvents(page, q) {
// // //   fetchEvent();
// // //     // if (events) {
// // //     //   renderEvents(events);
// // //     // }
// // //     // if (data.page.totalElements === 0) {
// // //     //   button.classList.add('invisible');
// // //     //   alert(`There are no events by keyword ${q}`)
// // //     // }
// // //     renderEvents(events);

// // //     //если последняя страница-скрываем кнопку
// // //     //  if (pageToFetch === totalPages) {
// // //     //    button.classList.add('invisible');
// // //     //    alert('Finish');
// // //     //    return;
// // //     //  }

// // //     pageToFetch += 1;
// // //     // if (data.page.totalPages > 1) {
// // //     button.classList.remove('invisible');
// // //     // }
// // //   };

// // // // getEvents();
// // // //рендер разметки//

// // // //при сабмите формы-поиск событий
// // // form.addEventListener('submit', event => {
// // //   event.preventDefault();
// // //   const query = event.target.elements.searchQuery.value;
// // //   keyword = query;
// // //   pageToFetch = 1;
// // //   list.innerHTML = '';
// // //   if (!query) {
// // //     return;
// // //   }
// // //   getEvents(pageToFetch, query);
// // // });
// // // //подгружать собыития при нажатии на кнопку
// // // button.addEventListener('click', () => {
// // //   getEvents(pageToFetch, keyword);
// // // });

// // form.addEventListener('submit', event => {
// //   event.preventDefault();
// //   const query = event.target.elements.searchQuery.value;
// //   keyword = query;
// //   pageToFetch = 1;
// //   list.innerHTML = '';
// //   if (!query) {
// //     return;
// //   }
// //   // getEvents(pageToFetch, query);
// // });
// // //подгружать собыития при нажатии на кнопку
// // button.addEventListener('click', () => {
// //   // getEvents(eventsApi.page, keyword);
// // });











// import { EventsApi } from './eventsApi.js';
// // import ImagesApiService from './js/images-service';
// // import LoadMoreBtn from './js/load-more';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const refs = {
//   galleryContainer: document.querySelector('.gallery'),
//   searchForm: document.querySelector('.search-form'),
//   toTopBtn: document.querySelector('.to-top'),
//   wrapper: document.querySelector('.wrapper'),
// };

// const imagesApiService = new EventsApi();
// const gallery = new SimpleLightbox('.gallery a');
// // const loadMoreBtn = new LoadMoreBtn({
// //   selector: '.load-more',
// //   hidden: true,
// // });
// const optionsForObserver = {
//   rootMargin: '250px',
// };
// const observer = new IntersectionObserver(onEntry, optionsForObserver);

// // observer.observe(refs.wrapper);
// refs.searchForm.addEventListener('submit', onSearch);
// refs.toTopBtn.addEventListener('click', onTopScroll);
// // loadMoreBtn.refs.button.addEventListener('click', onLoadMore);
// window.addEventListener('scroll', onScrollToTopBtn);

// function onSearch(e) {
//   e.preventDefault();

//   imagesApiService.query = e.currentTarget.elements.searchQuery.value.trim();

//   // imagesApiService.resetLoadedHits();
//   // imagesApiService.resetPage();
//   // loadMoreBtn.show();
//   // loadMoreBtn.disable();
//   clearGelleryContainer();

//   if (!imagesApiService.query) {
//     return erorrQuery();
//   }

//   imagesApiService.fetchEvent().then(({ hits, totalHits }) => {
//     if (!hits.length) {
//       // setTimeout(() => {
//       //   loadMoreBtn.hide();
//       // }, 1_500);

//       return erorrQuery();
//     }

//     observer.observe(refs.wrapper);
//     // loadMoreBtn.enable();
//     // imagesApiService.incrementLoadedHits(hits);
//     createGalleryMarkup(hits);
//     accessQuery(totalHits);
//     gallery.refresh();

//     if (hits.length === totalHits) {
//       // loadMoreBtn.hide();
//       observer.unobserve(refs.wrapper);
//       endOfSearch();
//     }
//   });

//   observer.unobserve(refs.wrapper);
// }

// function onEntry(entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting && imagesApiService.query) {
//       imagesApiService
//         .fetchEvent()
//         .then(({ hits, totalHits }) => {
//           imagesApiService.incrementLoadedHits(hits);
//           if (totalHits <= imagesApiService.loadedHits) {
//             observer.unobserve(refs.wrapper);
//             endOfSearch();
//           }

//           createGalleryMarkup(hits);
//           smoothScrollGallery();
//           gallery.refresh();
//         })
//         .catch(error => {
//           console.warn(`${error}`);
//         });
//     }
//   });
// }

// // function onLoadMore() {
// //   loadMoreBtn.disable();

// //   imagesApiService.fetchImages().then(({ hits, totalHits }) => {
// //     imagesApiService.incrementLoadedHits(hits);
// //     loadMoreBtn.enable();

// //     if (totalHits <= imagesApiService.loadedHits) {
// //       loadMoreBtn.hide();
// //       endOfSearch();
// //     }

// //     createGalleryMarkup(hits);
// //     gallery.refresh();
// //   });
// // }

// function accessQuery(totalHits) {
//   Notify.success(`Hooray! We found ${totalHits} images.`);
// }

// function endOfSearch() {
//   Notify.info("We're sorry, but you've reached the end of search results.");
// }

// function erorrQuery() {
//   Notify.failure(
//     'Sorry, there are no images matching your search query. Please try again.'
//   );
// }

// function clearGelleryContainer() {
//   refs.galleryContainer.innerHTML = '';
// }

// function createGalleryMarkup(images) {
//   const markup = images
//     .map(
//       ({
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       }) => {
//         return `
//     <div class="photo-card">
//       <a href="${webformatURL}">
//         <img
//           class="photo-card__img"
//           src="${largeImageURL}" 
//           alt="${tags}" 
//           loading="lazy" 
//           width="320"
//           height="212"
//         />
//       </a>
//       <div class="info">
//         <p class="info-item">
//           <b>Likes</b>
//           <span>${likes}</span>
//         </p>
//         <p class="info-item">
//           <b>Views</b>
//           <span>${views}</span>
//         </p>
//         <p class="info-item">
//           <b>Comments</b>
//           <span>${comments}</span>
//         </p>
//         <p class="info-item">
//           <b>Downloads</b>
//           <span>${downloads}</span>
//         </p>
//       </div>
//     </div>
//     `;
//       }
//     )
//     .join('');

//   refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
// }

// function onScrollToTopBtn() {
//   const offsetTrigger = 100;
//   const pageOffset = window.pageYOffset;

//   pageOffset > offsetTrigger
//     ? refs.toTopBtn.classList.remove('is-hidden')
//     : refs.toTopBtn.classList.add('is-hidden');
// }

// function onTopScroll() {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });
// }

// function smoothScrollGallery() {
//   const { height } =
//     refs.galleryContainer.firstElementChild.getBoundingClientRect();

//   window.scrollBy({
//     top: height * 2,
//     behavior: 'smooth',
//   });
// }






////////



import { EventsApi } from './eventsApi.js';
// import LoadMoreBtn from './js/load-more';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  galleryContainer: document.querySelector('.gallery'),
  searchForm: document.querySelector('.search-form'),
  toTopBtn: document.querySelector('.to-top'),
  wrapper: document.querySelector('.wrapper'),
};

const eventsApi = new EventsApi();
const gallery = new SimpleLightbox('.gallery a');
// const loadMoreBtn = new LoadMoreBtn({
//   selector: '.load-more',
//   hidden: true,
// });
const optionsForObserver = {
  rootMargin: '250px',
};
const observer = new IntersectionObserver(onEntry, optionsForObserver);

// observer.observe(refs.wrapper);
refs.searchForm.addEventListener('submit', onSearch);
refs.toTopBtn.addEventListener('click', onTopScroll);
// loadMoreBtn.refs.button.addEventListener('click', onLoadMore);
window.addEventListener('scroll', onScrollToTopBtn);

function onSearch(e) {
  e.preventDefault();

  eventsApi.query = e.currentTarget.elements.searchQuery.value.trim();

  eventsApi.resetLoadedHits();
  eventsApi.resetPage();
  // loadMoreBtn.show();
  // loadMoreBtn.disable();
  clearGelleryContainer();

  if (!eventsApi.query) {
    return erorrQuery();
  }

  eventsApi.fetchEvent().then(({ hits, totalHits }) => {
    if (!hits.length) {
      // setTimeout(() => {
      //   loadMoreBtn.hide();
      // }, 1_500);

      return erorrQuery();
    }

    observer.observe(refs.wrapper);
    // loadMoreBtn.enable();
    eventsApi.incrementLoadedHits(hits);
    createGalleryMarkup(hits);
    accessQuery(totalHits);
    gallery.refresh();

    if (hits.length === totalHits) {
      // loadMoreBtn.hide();
      observer.unobserve(refs.wrapper);
      endOfSearch();
    }
  });

  observer.unobserve(refs.wrapper);
}

function onEntry(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && eventsApi.query) {
      imagesApiService
        .fetchImages()
        .then(({ hits, totalHits }) => {
          eventsApi.incrementLoadedHits(hits);
          if (totalHits <= eventsApi.loadedHits) {
            observer.unobserve(refs.wrapper);
            endOfSearch();
          }

          createGalleryMarkup(hits);
          smoothScrollGallery();
          gallery.refresh();
        })
        .catch(error => {
          console.warn(`${error}`);
        });
    }
  });
}

// function onLoadMore() {
//   loadMoreBtn.disable();

//   imagesApiService.fetchImages().then(({ hits, totalHits }) => {
//     imagesApiService.incrementLoadedHits(hits);
//     loadMoreBtn.enable();

//     if (totalHits <= imagesApiService.loadedHits) {
//       loadMoreBtn.hide();
//       endOfSearch();
//     }

//     createGalleryMarkup(hits);
//     gallery.refresh();
//   });
// }

function accessQuery(totalHits) {
  Notify.success(`Hooray! We found ${totalHits} images.`);
}

function endOfSearch() {
  Notify.info("We're sorry, but you've reached the end of search results.");
}

function erorrQuery() {
  Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function clearGelleryContainer() {
  refs.galleryContainer.innerHTML = '';
}

function createGalleryMarkup(images) {
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
        return `
    <div class="photo-card">
      <a href="${webformatURL}">
        <img
          class="photo-card__img"
          src="${largeImageURL}" 
          alt="${tags}" 
          loading="lazy" 
          width="320"
          height="212"
        />
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
    </div>
    `;
      }
    )
    .join('');

  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

function onScrollToTopBtn() {
  const offsetTrigger = 100;
  const pageOffset = window.pageYOffset;

  pageOffset > offsetTrigger
    ? refs.toTopBtn.classList.remove('is-hidden')
    : refs.toTopBtn.classList.add('is-hidden');
}

function onTopScroll() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function smoothScrollGallery() {
  const { height } =
    refs.galleryContainer.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
