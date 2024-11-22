export default {
  /**
   * Adds a code element with a message to the document body and logs the message to the console.
   * @param {String} msg
   */
  hello: (msg) => {
    const message = msg || "Hello from messages.js";
    const body = document.body;
    const elem = document.createElement("code");
    elem.textContent = message;
    body.insertBefore(elem, body.nextSibling);
    console.log(message);
  },
};
