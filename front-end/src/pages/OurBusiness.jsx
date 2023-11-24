"use client";
import { Button, Card, Carousel } from "flowbite-react";

function OurBusiness() {
  return (
    <>
      <div className="flex mx-auto flex-col w-full justify-center text-center items-center gap-4">
        <div className="text-bold font-bold mt-4 pt-4 mb-1 mx-8 ">
          Buka bisnis furniture anda dengan sekali klik!
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 mb-6 mt-3">
          <Card className="max-w-sm mt-3 ">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Mikro plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">49</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="my-7 space-y-5">
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  20GB Cloud storage
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  Sketch Files
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  API Access
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  Complete documentation
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  24 x 7 phone & email support
                </span>
              </li>
            </ul>
            <Button
              type="button"
              className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
            >
              Choose plan
            </Button>
          </Card>
          <Card className="max-w-sm mt-3">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Standard plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">49</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="my-7 space-y-5">
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  20GB Cloud storage
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  Sketch Files
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  API Access
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  Complete documentation
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  24 x 7 phone & email support
                </span>
              </li>
            </ul>
            <Button
              type="button"
              className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
            >
              Choose plan
            </Button>
          </Card>
          <Card className="max-w-sm mt-3">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              Master plan
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">49</span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="my-7 space-y-5">
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  2 team members
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  20GB Cloud storage
                </span>
              </li>
              <li className="flex space-x-3">
                <svg
                  className="h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  Integration help
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  Sketch Files
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  API Access
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  Complete documentation
                </span>
              </li>
              <li className="flex space-x-3 line-through decoration-gray-500">
                <svg
                  className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-normal leading-tight text-gray-500">
                  24 x 7 phone & email support
                </span>
              </li>
            </ul>
            <Button
              type="button"
              className="inline-flex w-full justify-center rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
            >
              Choose plan
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
}
export default OurBusiness;
