const defaults = {
  uri: "https://swapi.dev/api/planets/",
};

export default class Api {
  constructor(options) {
    this.args = { ...defaults, ...options };
  }

  async getData() {
    const { uri } = this.args;
    try {
      const response = await fetch(uri);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
}
