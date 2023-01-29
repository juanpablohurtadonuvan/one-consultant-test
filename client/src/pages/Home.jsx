import React from "react";
import { useNavigate } from "react-router-dom";
import { DataPersonal } from "./DataPersonal";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export function Home() {
  const email = localStorage.getItem('email')
  
  const navigate = useNavigate();
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
                Let's create some personal data, academic data or just show the entire data!
              </p>
            </div>

            <div class="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
          

              <button
                class="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
                type="button"
                onClick={()=> navigate('/')}
              >
                Log out
              </button>
            </div>
          </div>
        </div>
      </header>
      <section class="bg-gray-900 text-white">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        My Academic App!
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/DataPersonal"
        >
          Data Personal Form
        </a>
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/DataAcademic"
        >
          Data Academic Form
        </a>
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/FullData"
        >
          Full Data Table!
        </a>

        
        
      </div>
    </div>
  </div>
</section>

    </>
  );
}
