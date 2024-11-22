const defaults = {
  uri: "https://api.github.com/repos/11ty/eleventy",
};

export default function Api(options) {
  this.args = { ...defaults, ...options };
}

Api.prototype.getData = async function () {
  var uri = this.args.uri;
  try {
    const response = await fetch(uri);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
