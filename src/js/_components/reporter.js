/**
 * Base class for reporters.
 * @extends HTMLElement
 * @abstract
 */
export default class Reporter extends HTMLElement {
  static get observedAttributes() {
    return ["name"];
  }

  constructor() {
    super();
    if (new.target === Reporter) {
      throw new Error("Cannot instantiate abstract class Reporter directly.");
    }
  }

  /**
   * Renders data to the DOM.
   * This method should be overridden in the subclass.
   * @param {Object} data
   */
  /* eslint-disable no-unused-vars */
  async render(data) {
    throw new Error("Method 'render' should be overridden in subclass.");
  }

  /**
   * Called when the element is connected to the DOM.
   * This method should be overridden in the subclass.
   */
  async connectedCallback() {
    throw new Error(
      "Method 'connectedCallback' should be overridden in subclass.",
    );
  }
}
