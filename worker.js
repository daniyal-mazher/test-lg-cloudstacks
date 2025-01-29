import html from "./postprocessing.html";

export default {
  async fetch(request) {
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
