import React from "react";
import "./SidebarL.css";
import { FaTwitter } from "react-icons/fa";
import { BiHomeCircle } from "react-icons/bi";
import { RiHashtag } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineClipboardList } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { MdOutlineMoreHoriz } from "react-icons/md";

const IconData = [
  { icon: <FaTwitter style={{ color: "1d9bf0", fontSize: "1.8rem" }} /> },
  { icon: <BiHomeCircle size="29" />, title: "Home" },
  { icon: <RiHashtag size="29" />, title: "Explore" },
  { icon: <IoNotificationsOutline size="29" />, title: "Notifications" },
  { icon: <FiMail size="26" />, title: "Messages" },
  { icon: <BsBookmark size="26" />, title: "Bookmarks" },
  { icon: <HiOutlineClipboardList size="29" />, title: "Lists" },
  { icon: <CgProfile size="29" />, title: "Profile" },
  { icon: <CgMoreO size="29" />, title: "More" },
];

const SidebarL = () => {
  return (
    <div className="SidebarL">
      <div className="twitter_icon"></div>
      {IconData.map((e, i) => (
        <SideBarList icon={e.icon} title={e.title} key={i} />
      ))}

      <button className="btn">Tweet</button>

      <div className="bottom">
        <div className="bottom_left">
          <div className="avatar"></div>
          <div className="desc">
            <p className="bottom_title">Muhammad Hamza</p>
            <p>@Muhammad2499...</p>
          </div>
        </div>
        <div className="icon">
          <MdOutlineMoreHoriz />
        </div>
      </div>
    </div>
  );
};

const SideBarList = ({ icon, title }) => {
  return (
    <div className="icon_container">
      {icon}
      <p style={{ fontSize: "15pt" }}>{title}</p>
    </div>
  );
};

export default SidebarL;
