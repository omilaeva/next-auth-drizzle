export const GET = async (request: Request) => {
  return new Response(`Hello, world! ${request.url}`, { status: 200 });
}