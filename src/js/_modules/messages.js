const hello = (msg) => {
  const message = msg || "Hello from messages.js";
  const body = document.body;
  const elem = document.createElement("code");
  elem.textContent = message;
  body.insertBefore(elem, body.nextSibling);
  console.log(message);
};

export { hello };
