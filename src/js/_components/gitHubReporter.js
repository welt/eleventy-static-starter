import Api from "./api.js";
import Reporter from "./reporter.js";

const api = new Api({ uri: "https://api.github.com/repos/11ty/eleventy" });

/**
 * Web component which fetches the Stargazers count for Eleventy project on GitHub.
 */
export default class GithubReporter extends Reporter {
  /**
   * @param {Object} data - GitHub API response data.
   */
  render(data) {
    const name = this.getAttribute("name") || data.name || "Eleventy";
    this.classList.add("reporter", "reporter--github");
    this.innerHTML = `
      <h2>Project = ${name}</h2>
      <h3>Star Gazers = ${data.stargazers_count}</h3>
    `;
  }

  async connectedCallback() {
    try {
      const data = await api.getData();
      this.render(data);
    } catch (error) {
      console.error(`Error in ${this.constructor.name} class:`, error);
      throw error;
    }
  }
}
