import React from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate()
  return (
    <section class="px-4 py-32 mx-auto max-w-7xl">
      <div class="w-full mx-auto lg:w-1/3">
        <p class="mt-5 mb-3 text-xl font-bold text-black md:text-2xl">
          Page not found (404)
        </p>
        <p class="mb-3 text-base font-medium text-gray-700">
          The page you're looking for may have moved or no longer exists. Head
          back to our{" "}
          <a href="/" class="underline">
            homepage
          </a>
          , or take a look at one of the sections below.
        </p>
      </div>
    </section>
  );
}
