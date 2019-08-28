export default class DataApp {
  _apiBase = "http://www.json-generator.com/api/json/get/cfSynsxYfC?indent=2";

  async getResource() {
    // Ждём, пока результат промиса не будет доступен. Когда он станет доступен, мы запишем его в res.
    const res = await fetch(this._apiBase);

    // Обработка ошибок
    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}` + `, received ${res.status}`
      );
    }
    // Возвращаем массив.
    return await res.json();
  }

  async getProduct() {
    const res = await this.getResource();
    return res.map(this._transformJson);
  }

  _transformJson(product) {
    return {
      index: product.index,
      id: product._id,
      about: product.about,
      name: product.name,
      picture: product.picture,
      company: product.company,
      sizes: {
        small: product.sizes.small, 
        medium: product.sizes.medium,
        big: product.sizes.big
      }, 
      price: product.price,
      isActive: product.isActive
    };
  }
}

// const swapi = new DataApp();

// swapi.getProduct().then(console.log);

