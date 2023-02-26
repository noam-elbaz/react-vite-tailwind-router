import React from "react";
import logo from "./assets/smartmail-logo.png";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { fetchData } from "./helpers";

export function smartLoader() {
  const userName = fetchData("userName");
  return { userName };
}

const SmartMail = () => {
  const { userName } = useLoaderData();
  return (
    <div className="relative w-full">
      <nav className="fixed flex w-full place-items-center justify-between bg-[#2D1637]">
        <div className="flex flex-row">
          <NavLink
            to="/"
            className="flex flex-row place-items-center space-x-4 p-4">
            <img src={logo} alt="logo" className="h-8" />
            <div className="text-3xl font-bold text-white">SmartMail</div>
          </NavLink>

          <ul className="ml-12 flex h-auto space-x-8 text-sm uppercase text-white">
            {[
              "Services",
              "Strategies",
              "Designs",
              "Results",
              "Klaviyo",
            ].map((link, index) => (
              <NavLink
                to={link.toLowerCase()}
                key={index}
                className={({ isActive }) =>
                  isActive ? "group relative text-yellow-500" : "group relative"
                }>
                <div className="flex h-full place-items-center px-4 transition duration-300 ease-in-out group-hover:text-yellow-500 ">
                  {link}
                </div>
                <div className="absolute bottom-0 h-0.5 w-full transition duration-300 ease-in-out group-hover:bg-yellow-500 "></div>
              </NavLink>
            ))}
          </ul>
        </div>
        <button className="mr-4 rounded bg-yellow-500 px-4 py-2 font-bold uppercase text-[#2D1637] hover:bg-yellow-400">
          Free Email Audit
        </button>
      </nav>
      <main className="flex h-screen w-full place-items-center justify-center bg-[#2D1637] text-center text-7xl font-extrabold text-white ">
        <div>
          <div className="text-7xl">
            You're good at eCommerce.
            <br /> We’re good at Email.
          </div>
          <div className="mt-6 text-4xl font-thin tracking-wide">
            From campaign management to automations and list growth, <br />
            SmartMail is the all-in-one email service your business can count
            on.
          </div>
          <button className="mt-12 rounded-md bg-yellow-500 px-6 py-3 text-2xl font-semibold uppercase tracking-wide text-[#2D1637] hover:bg-yellow-400">
            Get a Free Audit
          </button>
        </div>
      </main>
      <section className="flex h-screen w-full place-items-center justify-center text-center text-7xl font-extrabold">
        <div>
          <div className="text-7xl ">
            What’s Your Email <br /> Marketing Bottleneck?
          </div>
          <div className="mt-6 text-4xl font-light tracking-wide text-gray-600">
            If email isn’t delivering 35% of your total sales, you’re missing
            out.
          </div>
          <div className="mx-auto mt-8 grid w-2/3 grid-cols-2 gap-y-4 text-left text-2xl font-light text-gray-600">
            {[
              "No designer",
              "Not enough time",
              "No clue where to start",
              "Lack of internal expertise",
              "Other priorities",
              "Issues with current agency",
            ].map((item, index) => (
              <div className="flex space-x-2" key={index}>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-8 w-8 text-red-500">
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <button className="mt-12 rounded-md bg-yellow-400 px-6 py-2 text-lg font-semibold uppercase tracking-wide text-[#2D1637] hover:bg-yellow-500">
            Get a Free Audit
          </button>
        </div>
      </section>

      <Outlet />
    </div>
  );
};

export default SmartMail;
