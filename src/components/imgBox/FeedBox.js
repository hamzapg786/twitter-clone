import React from "react";
import "./FeedBox.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { IoIosMore } from "react-icons/io";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { BiHeart } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
const FeedBox = () => {
  const boxData = [
    { name: "Husnain", username: "@husnain" },
    { name: "Hamza", username: "@hamza12" },
    { name: "Hunny", username: "@hunny129" },
  ];
  return (
    <>
      <div className="nav_header">
        <BsArrowLeftShort size={25} />
        <h3>Tweet</h3>
      </div>
      {boxData.map((e, i) => (
        <>
          <Box name={e.name} username={e.username} key={i} />
          <hr />
        </>
      ))}
    </>
  );
};

const Box = ({ name, username }) => {
  return (
    <div className="feedBox">
      <div className="box_header">
        <div className="box_header_left">
          <div className="avatar"></div>
          <div className="avatar_disc">
            <p style={{ fontWeight: "600" }}>{name}</p>
            <p>{username}</p>
          </div>
        </div>
        <div className="icon_right">
          <IoIosMore />
        </div>
      </div>
      <div className="img_box">
        <h3>
          Please follow and especially retweet if you think there should be a
          worldwide ban on trophy hunting.
        </h3>
        <div className="img">img</div>
        <p>8:00 PM · Jan 25, 2022·Buffer</p>
        <hr />
        <p>1,997 Retweets 130 Quote Tweets 2,532 Likes</p>
        <hr />
      </div>
      <div className="img_box_icons">
        <BiMessageRounded />
        <AiOutlineRetweet />
        <BiHeart />
        <FiShare />
      </div>
    </div>
  );
};

export default FeedBox;
