"use client";
import React, { useState } from "react";
import "./postAds.css";
import { PostAds } from "../../lib/firebase";

function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    e.preventDefault(); // Corrected typo
    const imgfile = e.target.files[0];
    setImage(imgfile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await PostAds({ description, image });
      // Reset form fields after successful submission if needed
      setTitle("");
      setDescription("");
      setImage(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="main">
      <div className="wrapper">
        <h2>Create Posts</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter title "
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <div className="input-box">
            <input
              type="file"
              placeholder="Choose Image"
              onChange={handleImageChange}
            />
          </div>
          <div className="policy">
            <input type="checkbox" />
            <h3>I accept all terms & conditions</h3>
          </div>
          <div className="input-box button">
            <input type="submit" value="Submit Now" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
