xport default {
    async fetch(request) {
        return new Response(
            `<!DOCTYPE html>
            <html>
            <head><title>Post Processing</title></head>
            <body><h1>Hello from Cloudflare Workers!</h1></body>
            </html>`,
            {
                headers: { "Content-Type": "text/html" },
            }
        );
    }
};
