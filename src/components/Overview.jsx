import React from "react";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";
import youtube from "../assets/images/icon-youtube.svg";
import up from "../assets/images/icon-up.svg";
import down from "../assets/images/icon-down.svg";

function Overview() {
  return (
    <>
      <h2 className="font-bold gray-blue-text text-2xl dark:text-white max-w-7xl mx-auto pt-7">
        Overview - Today
      </h2>
      <section className="py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        <article className="light-card-bg dark:bg-slate-700 p-8 rounded-md shadow-slate-50 hover:brightness-125">
          <ul className="flex justify-between mb-10">
            <li className="font-bold gray-blue-text dark:text-slate-400">
              Page Views
            </li>
            <li>
              <img src={facebook} alt="Facebook icon" />
            </li>
          </ul>
          <ul className="flex justify-between">
            <li className="font-bold text-3xl blue-dark-text dark:text-white">
              87
            </li>
            <li className="lime-text font-bold text-sm flex items-center justify-center">
              <img className="mr-2 w-3" src={up} alt="Up icon" />
              3%
            </li>
          </ul>
        </article>
        <article className="light-card-bg p-8 rounded-md shadow-slate-50 dark:bg-slate-700 hover:brightness-125">
          <ul className="flex justify-between mb-10">
            <li className="font-bold gray-blue-text dark:text-slate-400">
              Likes
            </li>
            <li>
              <img src={facebook} alt="Facebook icon" />
            </li>
          </ul>
          <ul className="flex justify-between">
            <li className="font-bold text-3xl blue-dark-text dark:text-white">
              52
            </li>
            <li className="red-text font-bold text-sm flex items-center justify-center">
              <img className="mr-2 w-3" src={down} alt="Down icon" />
              2%
            </li>
          </ul>
        </article>
        <article className="light-card-bg p-8 rounded-md shadow-slate-50 dark:bg-slate-700 hover:brightness-125">
          <ul className="flex justify-between mb-10">
            <li className="font-bold gray-blue-text dark:text-slate-400">
              Likes
            </li>
            <li>
              <img src={instagram} alt="Instagram icon" />
            </li>
          </ul>
          <ul className="flex justify-between">
            <li className="font-bold text-3xl blue-dark-text dark:text-white">
              5462
            </li>
            <li className="lime-text font-bold text-sm flex items-center justify-center">
              <img className="mr-2 w-3" src={up} alt="Up icon" />
              2257%
            </li>
          </ul>
        </article>
        <article className="light-card-bg p-8 rounded-md shadow-slate-50 dark:bg-slate-700 hover:brightness-125">
          <ul className="flex justify-between mb-10">
            <li className="font-bold gray-blue-text dark:text-slate-400">
              Profile Views
            </li>
            <li>
              <img src={instagram} alt="Instagram icon" />
            </li>
          </ul>
          <ul className="flex justify-between">
            <li className="font-bold text-3xl blue-dark-text dark:text-white">
              52K
            </li>
            <li className="lime-text font-bold text-sm flex items-center justify-center">
              <img className="mr-2 w-3" src={up} alt="Up icon" />
              1375%
            </li>
          </ul>
        </article>
        <article className="light-card-bg p-8 rounded-md shadow-slate-50 dark:bg-slate-700 hover:brightness-125">
          <ul className="flex justify-between mb-10">
            <li className="font-bold gray-blue-text dark:text-slate-400">
              Retweets
            </li>
            <li>
              <img src={twitter} alt="Twitter icon" />
            </li>
          </ul>
          <ul className="flex justify-between">
            <li className="font-bold text-3xl blue-dark-text dark:text-white">
              117
            </li>
            <li className="lime-text font-bold text-sm flex items-center justify-center">
              <img className="mr-2 w-3" src={up} alt="Up icon" />
              303%
            </li>
          </ul>
        </article>
        <article className="light-card-bg p-8 rounded-md shadow-slate-50 dark:bg-slate-700 hover:brightness-125">
          <ul className="flex justify-between mb-10">
            <li className="font-bold gray-blue-text dark:text-slate-400">
              Likes
            </li>
            <li>
              <img src={twitter} alt="Twitter icon" />
            </li>
          </ul>
          <ul className="flex justify-between">
            <li className="font-bold text-3xl blue-dark-text dark:text-white">
              507
            </li>
            <li className="lime-text font-bold text-sm flex items-center justify-center">
              <img className="mr-2 w-3" src={up} alt="Up icon" />
              553%
            </li>
          </ul>
        </article>
        <article className="light-card-bg p-8 rounded-md shadow-slate-50 dark:bg-slate-700 hover:brightness-125">
          <ul className="flex justify-between mb-10">
            <li className="font-bold gray-blue-text dark:text-slate-400">
              Likes
            </li>
            <li>
              <img src={youtube} alt="Youtube icon" />
            </li>
          </ul>
          <ul className="flex justify-between">
            <li className="font-bold text-3xl blue-dark-text dark:text-white">
              107
            </li>
            <li className="red-text font-bold text-sm flex items-center justify-center">
              <img className="mr-2 w-3" src={down} alt="Down icon" />
              19%
            </li>
          </ul>
        </article>
        <article className="light-card-bg p-8 rounded-md shadow-slate-50 dark:bg-slate-700 hover:brightness-125">
          <ul className="flex justify-between mb-10">
            <li className="font-bold gray-blue-text dark:text-slate-400">
              Total Views
            </li>
            <li>
              <img src={youtube} alt="Youtube icon" />
            </li>
          </ul>
          <ul className="flex justify-between">
            <li className="font-bold text-3xl blue-dark-text dark:text-white">
              1407
            </li>
            <li className="red-text font-bold text-sm flex items-center justify-center">
              <img className="mr-2 w-3" src={down} alt="Down icon" />
              12%
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}

export default Overview;
