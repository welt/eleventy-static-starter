import messages from "./_modules/messages.js";
import GitHubReporter from "./_components/gitHubReporter.js";
import LoadingSpinner from "./_components/loadingSpinner.js";

messages.hello();

customElements.define("github-reporter", GitHubReporter);
customElements.define("loading-spinner", LoadingSpinner);
