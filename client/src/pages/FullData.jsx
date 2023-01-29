import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function FullData() {
  const email = localStorage.getItem("email");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = "";

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "http://localhost:5100/myacademic/api/v1/academic/getData",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setData(result.data))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <header aria-label="Page Header">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="text-center sm:text-left">
              <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                Welcome back! {email}
              </h1>

              <p class="mt-1.5 text-sm text-gray-500">
                Let me show u a minimalist data table! Enjoy! 🍿
              </p>
            </div>

            <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
              <button
                class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
                onClick={() => navigate("/")}
              >
                Log out
              </button>
              <button
                className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
                onClick={() => navigate("/home")}
              >
                Home
              </button>
            </div>
          </div>
        </div>
      </header>
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Student
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Subject
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Teacher
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Score
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap py-4 p-4 font-medium text-gray-900 text-justify">
                  {item.student}
                </td>
                <td className="whitespace-nowrap py-4 p-4 font-medium text-gray-900 text-justify">
                  {item.subject}
                </td>
                <td className="whitespace-nowrap py-4 p-4 font-medium text-gray-900 text-justify">
                  {item.teacher}
                </td>
                <td className="whitespace-nowrap py-4 p-4 font-medium text-gray-900 text-justify">
                  {item.score}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default FullData;
