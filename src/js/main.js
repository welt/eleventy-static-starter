import * as messages from "./_modules/messages.js";
import PlanetReporter from "./_components/planetReporter.js";

messages.hello();

customElements.define("planet-reporter", PlanetReporter);
