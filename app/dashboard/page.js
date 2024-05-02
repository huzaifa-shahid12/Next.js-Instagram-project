"use client";
import Image from "next/image";
import Link from "next/link";
import PostCard from "../postAds/page";
import "./dashboard.css";
import Profile from "../suggestion/page";
import Card from "../Cards/page";
import { getingAds } from "../../lib/firebase";
import React, { useState, useEffect } from "react";

function Dashboard() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const getPost = await getingAds();
    setPosts(getPost);
    console.log(getPost);
  };
  return (
    <>
      <div className="flex">
        <aside className="sidebar flex flex-col items-start  max-w-[250px] h-[100%] p-[30px]">
          <header className="sidebar-header">
            <div className="avatar">
              <img
                className="w-[120px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWXzDNIYwYf1w6MffsLQzqFVv6wOz7ndg1CMmNzhAlRA&s"
              />
            </div>
            <div className="home-main flex items-center  pt-[35px] mb-[10px]">
              <svg
                aria-label="Home"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"
                  class=""
                ></path>
              </svg>
              <h3 className="ps-[20px] font-bold text-[16px] cursor-pointer">
                Home
              </h3>
            </div>

            <div className="search-main flex items-center m-auto pt-[25px] mb-[10px]">
              <svg
                aria-label="Search"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Search</title>
                <path
                  d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class=""
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="16.511"
                  x2="22"
                  y1="16.511"
                  y2="22"
                ></line>
              </svg>
              <h3 className="ps-[10px] text-[16px] cursor-pointer">Search</h3>
            </div>

            <div className="explore-main flex items-center m-auto pt-[25px] mb-[10px]">
              <svg
                aria-label="Explore"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Explore</title>
                <polygon
                  fill="none"
                  points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
                <polygon
                  fill-rule="evenodd"
                  points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"
                ></polygon>
                <circle
                  cx="12.001"
                  cy="12.005"
                  fill="none"
                  r="10.5"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></circle>
              </svg>
              <h3 className="ps-[10px] text-[16px] cursor-pointer">Explore</h3>
            </div>
            <div className="home-main flex items-center m-auto pt-[25px] mb-[10px]">
              <svg
                aria-label="Reels"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Reels</title>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="2.049"
                  x2="21.95"
                  y1="7.002"
                  y2="7.002"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="13.504"
                  x2="16.362"
                  y1="2.001"
                  y2="7.002"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="7.207"
                  x2="10.002"
                  y1="2.11"
                  y2="7.002"
                ></line>
                <path
                  d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <path
                  d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <h3 className="ps-[10px] text-[16px] cursor-pointer">Reels</h3>
            </div>
            <div className="home-main flex items-center m-auto pt-[25px] mb-[10px]">
              <svg
                aria-label="Messenger"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Messenger</title>
                <path
                  d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="1.739"
                ></path>
                <path
                  d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
              <h3 className="ps-[10px]  text-[16px] cursor-pointer">
                <Link href={"/"}> Messages</Link>
              </h3>
            </div>

            <div className="home-main flex items-center m-auto pt-[25px] mb-[10px]">
              <svg
                aria-label="Notifications"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Notifications</title>
                <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
              </svg>
              <h3 className="ps-[10px] text-[16px] cursor-pointer">
                Notifications
              </h3>
            </div>

            <div className="create-main flex items-center m-auto pt-[25px] mb-[10px]">
              <svg
                aria-label="New post"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>New post</title>
                <path
                  d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="6.545"
                  x2="17.455"
                  y1="12.001"
                  y2="12.001"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="12.003"
                  x2="12.003"
                  y1="6.545"
                  y2="17.455"
                ></line>
              </svg>
              <h3 className="ps-[10px] text-[16px] cursor-pointer">
                <Link href={"./postAds"}>Create</Link>
                {/* <Link to="/postAds">Create</Link> */}
              </h3>
            </div>

            <div className="profile-main flex items-center m-auto pt-[25px] mb-[13px]">
              <img
                className="w-[25px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1tp4q1VhgJ69MDeSjmtqfQOjcXI0_9OAKnarbIO3KOD31OJAp-MsLJcPcbKJN3CmPt8&usqp=CAU"
              />
              <h3 className="ps-[10px]  text-[16px] cursor-pointer">Profile</h3>
            </div>

            <div className="more-main flex items-center m-auto pt-[25px] mb-[10px]">
              <svg
                aria-label="Settings"
                class="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>Settings</title>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="3"
                  x2="21"
                  y1="4"
                  y2="4"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="3"
                  x2="21"
                  y1="12"
                  y2="12"
                ></line>
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="3"
                  x2="21"
                  y1="20"
                  y2="20"
                ></line>
              </svg>
              <h3 className="ps-[10px]  text-[16px] cursor-pointer">More</h3>
            </div>
          </header>
        </aside>
        <header className="story-header">
          <div className="flex gap-[25px] ms-[300px] sm:flex-wrap max-w-[800px] ">
            <div className="">
              <img
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <p className="text-sm pt-1 text-center font-semibold">User 1</p>
            </div>
            <div>
              <img
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <p className="text-sm pt-1 text-center font-semibold">User 2</p>
            </div>

            <div>
              <img
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <p className="text-sm pt-1 text-center font-semibold">User 3</p>
            </div>

            <div>
              <img
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW4AdHQ5lVM_cFZYu4TogVtmEfYH4iHSGwYQ&usqp=CAU"
                alt=""
              />
              <p className="text-sm pt-1 text-center font-semibold">User 4</p>
            </div>

            <div>
              <img
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL6vieIfIc6t6g_G4xlEUeWNyFC-_sTLmhvYutWBi_NJUKEepBrV4rovxH16NUfU4VU8s&usqp=CAU"
                alt=""
              />
              <p className="text-sm pt-1 text-center font-semibold">User 5</p>
            </div>

            <div>
              <img
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt_4M3i4WkXG3tgeuMMA4G5C8F9iuPwz6ezg&usqp=CAU"
                alt=""
              />
              <p className="text-sm pt-1 text-center font-semibold">User 6</p>
            </div>

            <div>
              <img
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTSKbCFe_QYSVH-4FpaszXvakr2Eti9eAJpQ&usqp=CAU"
                alt=""
              />
              <p className="text-sm pt-1 text-center font-semibold">User 7</p>
            </div>

            <div>
              <img
                className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2
        cursor-pointer object-contain hover:scale-110 
        transition-transform
        duration-200 ease-out"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKMgeLJPfDoA1X1CWNtsL7s9F47GSREE-_xg&usqp=CAU"
                alt=""
              />
              <p className="text-sm pt-1 text-center font-semibold">User 8</p>
            </div>
          </div>

          <div className="">
            {/* <PostCard /> */}
            {posts.map((item) => {
              return <Card  item={item} />;
            })}
          </div>
        </header>
        <div className="flex-col">
          <div className="flex mt-[100px] max-w-[400px]">
            <img
              className="w-16 h-16 rounded-full border p-[5px]  "
              src="https://firebasestorage.googleapis.com/v0/b/social-media-app-3d097.appspot.com/o/images%2F360_F_642021343_nTvIdUexLNw447Ne6po0TQWC3FPbydEi.jpg?alt=media&token=4f1d47af-08c8-4489-8b7f-0ee3f798e9a0"
            />

            <div className="flex-1 mx-4">
              <h2 className="font-bold">Huzaifa Shahid</h2>
              <h2 className="text-sm text-gray-400">Welcome To Instagram</h2>
            </div>
            <button className="text-blue-400 pt-[10px] text-sm font-semibold">
              Sign out
            </button>
          </div>

          <Profile />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
