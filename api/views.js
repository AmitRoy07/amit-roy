import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const views = await redis.incr("website:total-views");

    response.setHeader("Cache-Control", "no-store");
    return response.status(200).json({ views });
  } catch (error) {
    console.error("View counter error:", error);
    return response.status(500).json({ error: "Unable to update views" });
  }
}
