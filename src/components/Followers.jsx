import React from "react";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";
import youtube from "../assets/images/icon-youtube.svg";
import up from "../assets/images/icon-up.svg";
import down from "../assets/images/icon-down.svg";

function Followers() {
  return (
    <>
      <section className="relative mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl z-10">
        <article className="light-card-bg dark:bg-slate-700 p-7 rounded-md shadow-slate-50 border-t-6 border-blue-500 hover:brightness-125">
          <ul className="flex items-center justify-center text-center gap-2">
            <li>
              <img src={facebook} alt="Facebook icon" />
            </li>
            <li className="font-bold gray-blue-text dark:text-slate-400">
              @nathanf
            </li>
          </ul>
          <h2 className="blue-dark-text dark:text-white font-bold text-6xl text-center my-5">
            1987{" "}
            <span className="tracking-widest gray-blue-text  text-sm block font-normal dark:text-slate-400">
              FOLLOWERS
            </span>
          </h2>

          <p className="lime-text font-bold text-md text-center flex items-center justify-center">
            <img className="mr-2 w-3" src={up} alt="Icon up" />
            12 today
          </p>
        </article>
        <article className="light-card-bg dark:bg-slate-700 p-7 rounded-md shadow-slate-50 border-t-6 border-blue-400 hover:brightness-125">
          <ul className="flex items-center justify-center text-center gap-2">
            <li>
              <img src={twitter} alt="Facebook icon" />
            </li>
            <li className="font-bold gray-blue-text dark:text-slate-400">
              @nathanf
            </li>
          </ul>
          <h2 className="blue-dark-text dark:text-white font-bold text-6xl text-center my-5">
            1044{" "}
            <span className="tracking-widest gray-blue-text text-sm block font-normal dark:text-slate-400">
              FOLLOWERS
            </span>
          </h2>

          <p className="lime-text font-bold text-sm text-center flex items-center justify-center">
            <img className="mr-2 w-3" src={up} alt="Icon up" />
            99 today
          </p>
        </article>
        <article className="light-card-bg dark:bg-slate-700 py-9 rounded-md shadow-slate-50 relative hover:brightness-125">
          <div className="instagram w-full rounded-tl-md rounded-tr-md absolute top-0 left-0"></div>
          <ul className="flex items-center justify-center text-center gap-2">
            <li>
              <img src={instagram} alt="Instagram icon" />
            </li>
            <li className="font-bold gray-blue-text dark:text-slate-400">
              @realnathanf
            </li>
          </ul>
          <h2 className="blue-dark-text dark:text-white font-bold text-6xl text-center my-5">
            11K{" "}
            <span className="tracking-widest gray-blue-text dark:text-slate-400 text-sm block font-normal ">
              FOLLOWERS
            </span>
          </h2>

          <p className="lime-text font-bold text-sm text-center flex items-center justify-center">
            <img className="mr-2 w-3" src={up} alt="Icon up" />
            1099 today
          </p>
        </article>
        <article className="light-card-bg dark:bg-slate-700 p-7 rounded-md shadow-slate-50 border-t-6 border-red-500 hover:brightness-125">
          <ul className="flex items-center justify-center text-center gap-2">
            <li>
              <img src={youtube} alt="Youtube icon" />
            </li>
            <li className="font-bold gray-blue-text dark:text-slate-400">
              Nathan F.
            </li>
          </ul>
          <h2 className="blue-dark-text dark:text-white font-bold text-6xl text-center my-5">
            8239{" "}
            <span className="tracking-widest gray-blue-text text-sm block font-normal dark:text-slate-400">
              SUBSCRIBERS
            </span>
          </h2>

          <p className="red-text font-bold text-sm text-center flex items-center justify-center">
            <img className="mr-2 w-3" src={down} alt="Icon up" />
            144 today
          </p>
        </article>
      </section>
    </>
  );
}

export default Followers;
