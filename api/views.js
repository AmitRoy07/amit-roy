import { Redis } from "@upstash/redis";

function getRedisClient() {
  const environment = globalThis.process?.env;
  const url = environment?.UPSTASH_REDIS_REST_URL?.replace(
    /^["']|["']$/g,
    ""
  );
  const token = environment?.UPSTASH_REDIS_REST_TOKEN?.replace(
    /^["']|["']$/g,
    ""
  );

  if (!url || !token) {
    throw new Error("Upstash Redis environment variables are not configured");
  }

  return new Redis({ url, token });
}

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const views = await getRedisClient().incr("website:total-views");

    response.setHeader("Cache-Control", "no-store");
    return response.status(200).json({ views });
  } catch (error) {
    console.error("View counter error:", error);
    return response.status(500).json({ error: "Unable to update views" });
  }
}
