import postprocessing from "./postprocessing.html";
import page2 from "./5929.html";

export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/postprocessing") {
      return new Response(postprocessing, {
        headers: { "Content-Type": "text/html" },
      });
    } else if (url.pathname === "/page2") {
      return new Response(page2, {
        headers: { "Content-Type": "text/html" },
      });
    } else {
      return new Response("<h1>404 - Page Not Found</h1>", { status: 404 });
    }
  },
}
