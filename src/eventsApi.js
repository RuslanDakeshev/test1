class EventsApi {
  static BASE_URL = 'https://pixabay.com/api/';
  static #API = '30624593-67a024fcb44d725cda2d85f07';
  #page = 1;
  #q;
  constructor() {
    this.q = '';
    this.page = 1;
    this.loadedHits = 0;
  }

  async fetchEvent() {
    const params = new URLSearchParams({
      key: EventsApi.#API,
      page: this.#page,
      q: this.q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 5,
    });

    const result = await fetch(`${EventsApi.BASE_URL}?${params}`);
    return result.ok ? result.json() : Promise.reject(result.statusText);
  }

  resetPage() {
    this.#page = 1; //??(0)
  }

  get page() {
    return this.#page;
  }

  set page(value) {
    this.#page = value;
  }

  get q() {
    return this.#q;
  }

  set q(value) {
    this.#q = value;
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
}

export { EventsApi }