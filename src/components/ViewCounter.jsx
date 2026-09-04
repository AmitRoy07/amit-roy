"use client";

import { useEffect, useRef, useState } from "react";

export default function ViewCounter() {
  const [views, setViews] = useState(null);
  const hasRequestedViews = useRef(false);

  useEffect(() => {
    if (hasRequestedViews.current) {
      return;
    }

    hasRequestedViews.current = true;
    const controller = new AbortController();

    async function getViews() {
      try {
        const response = await fetch("/api/views", {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`View counter request failed: ${response.status}`);
        }

        const data = await response.json();

        if (typeof data.views === "number") {
          setViews(data.views);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Unable to load view counter:", error);
        }
      }
    }

    getViews();

    return () => controller.abort();
  }, []);

  if (typeof views !== "number") {
    return null;
  }

  return <div>👁 {views.toLocaleString()} views</div>;
}
