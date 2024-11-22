import { jest } from "@jest/globals";
import messages from "../src/js/_modules/messages.js";

describe("Test the messages module", () => {
  let logger;

  beforeEach(() => {
    logger = jest.fn();
  });

  test("It should log the default message", () => {
    console.log = logger;
    messages.hello();
    expect(console.log).toHaveBeenCalledWith("Hello from messages.js");
  });

  test("It should log the provided message", () => {
    console.log = logger;
    const testMessage = "Test message";
    messages.hello(testMessage);
    expect(console.log).toHaveBeenCalledWith(testMessage);
  });
});
