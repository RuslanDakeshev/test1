

// class EventsApi {
//   static BASE_URL = 'https://pixabay.com/api/';
//   static API = '30624593-67a024fcb44d725cda2d85f07';
//   page = 1;
//   q;
//   constructor() {
//     this.q = '';
//     this.page = 1;
//     this.loadedHits = 0;
//   }

//   async fetchEvent() {
//     const params = new URLSearchParams({
//       key: EventsApi.API,
//       page: this.page,
//       q: this.q,
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: true,
//       per_page: 5,
//     });

//     const result = await fetch(`${EventsApi.BASE_URL}?${params}`);
//     return result.ok ? result.json() : Promise.reject(result.statusText);
//   }

//   resetPage() {
//     this.page = 1; //??(0)
//   }

//   get page() {
//     return this.page;
//   }

//   set page(value) {
//     this.page = value;
//   }

//   get q() {
//     return this.q;
//   }

//   set q(value) {
//     this.q = value;
//   }

//   incrementLoadedHits(hits) {
//     this.loadedHits += hits.length;
//   }
//   resetLoadedHits() {
//     this.loadedHits = 0;
//   }

//   incrementPage() {
//     this.page += 1;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }

// export { EventsApi };

import axios from 'axios';

const API_KEY = '29796536-5ed99ce8effe96d6d69c656a8';
const BASE_URL = 'https://pixabay.com/api/';

export default class EventsApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.loadedHits = 0;
  }

  async fetchEvent() {
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: this.searchQuery,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: this.page,
      per_page: 40,
    });

    const url = `${BASE_URL}?${searchParams}`;

    try {
      const response = await axios.get(url);
      this.incrementPage();

      return response.data;
    } catch (error) {
      console.warn(`${error}`);
    }
  }

  incrementLoadedHits(hits) {
    this.loadedHits += hits.length;
  }

  resetLoadedHits() {
    this.loadedHits = 0;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
