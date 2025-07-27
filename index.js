export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return new Response("✅ Server is healthy!", {
        status: 200,
        headers: { "Content-Type": "text/plain" },
      });
    }

    return new Response("❌ Not Found", { status: 404 });
  },
};
