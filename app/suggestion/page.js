"use client";
import React from "react";
import { useState, useEffect } from "react";
// import faker from "faker";

function Profile() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [
      ...Array(5).map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
      })),
    ];
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestion for you</h3>
        <a className="text-gray-600 font-semibold">See all</a>
      </div>

      {suggestions.map((profile) => (
        <div className="flex items-center justify-between mt-3">
          <img
            className="w-10 h-10 rounded-full border p-[2px]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_E9TLVzTnyqVmnVHgN_8t9264bPYuAeNaw&usqp=CAU"
          />
          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">Huzaifa Shahid </h2>
            <h3 className="text-xs text-gray-400">Works at Expertizo Uni</h3>
          </div>
          <button className="text-blue-400 text-sm">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Profile;
