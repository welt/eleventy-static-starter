import Api from "./api.js";
const api = new Api();

export default class PlanetReporter extends HTMLElement {
  static observedAttributes = ["color"];

  constructor() {
    super();
  }

  async showPlanet() {
    const data = await api.getData();
    const [firstPlanet] = data.results;
    const elem = document.createElement("div");
    elem.style.backgroundColor = this.getAttribute("color") || "gold";
    elem.innerHTML = `
      <h2>Planet = ${firstPlanet.name}</h1>
      <h3>Terrain = ${firstPlanet.terrain}</h2>
    `;
    this.replaceChildren(elem);
  }

  async connectedCallback() {
    try {
      await this.showPlanet();
    } catch (error) {
      console.error("Error finding a planet:", error);
      throw error;
    }
  }
}
