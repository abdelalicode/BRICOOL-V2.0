import React from "react";

export default function Banner() {
  return (
    <div>
      <h1 className="mt-96 md:mt-24 text-center text-4xl font-semibold">
        YOUR PLATFORM TO FIND LOCAL WORKERS
      </h1>

      <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white">
        <div className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Find an Electrician Near You
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Connect with certified electricians for repairs, installations, and
            maintenance right in your neighborhood.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Need a Carpenter for Custom Work?
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Whether it's furniture or home improvement, hire skilled carpenters
            with top-rated expertise.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Hire a Skilled Builder for Your Project
          </p>
          <p className="mt-2 text-sm text-slate-500">
            From home renovation to new construction, find the best builders
            for your needs.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Plumbing Services On Demand
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Need urgent plumbing repairs or installations? Hire a reliable
            plumber near you today.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Find a Painter for Your Home or Office
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Freshen up your space with professional painting services. Get a
            quote from local painters today.
          </p>
        </div>

        <div className="p-10 flex flex-col items-center text-center group hover:bg-slate-50 cursor-pointer">
          <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </span>
          <p className="text-xl font-medium text-slate-700 mt-3">
            Genuine Contractor Reviews
          </p>
          <p className="mt-2 text-sm text-slate-500">
            Check reviews, ratings, and portfolios to hire trusted local workers
            for any job.
          </p>
        </div>
      </div>

      <div className="w-full bg-[#26303D] bg-opacity-95 py-24 px-20 flex justify-between items-center">
        <p className="text-white">
          <span className="text-4xl font-medium">Need a Hand?</span> <br />
          <span className="text-lg">
            Book your service or consultation today!
          </span>
        </p>
        <button className="px-5 py-3 font-medium text-slate-700 shadow-xl hover:bg-white duration-150 bg-yellow-400">
          BOOK A WORKER NOW
        </button>
      </div>
    </div>
  );
}
