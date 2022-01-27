import React from "react";
import "./SidebarR.css";
import { IoSearchOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { RiMoreFill } from "react-icons/ri";
const SidebarR = () => {
  const TrendingData = [
    {
      title: "Trending in Pakistan",
      hastag: "#ArrestMuftiTariqMasood",
      tweetsNo: "27k",
    },
    {
      title: "Trending in Pakistan",
      hastag: "#goNawazGo",
      tweetsNo: "12k",
    },
    {
      title: "Trending in Pakistan",
      hastag: "#goNawazGo",
      tweetsNo: "12k",
    },
    {
      title: "Trending in Pakistan",
      hastag: "#goNawazGo",
      tweetsNo: "12k",
    },
  ];

  return (
    <div className="SidebarR">
      <div className="search_bar">
        <IoSearchOutline style={{ paddingLeft: "10px", fontSize: "30px" }} />
        <input type="text" placeholder="Search twitter" />
      </div>

      <div className="container">
        <div className="relevant_people">
          <div className="relevant_header">
            <h3>Relevant people</h3>
          </div>
          <div className="relevant_body">
            <div className="body_header">
              <div className="body_header__left">
                <div className="avatar"></div>
                <div>
                  <h3 className="body_header__left__title">Amazing Nature</h3>
                  <p>@AmazingNature00</p>
                </div>
              </div>
              <div className="body_header__right">
                <button>Follow</button>
              </div>
            </div>
            <div className="body">
              <p>
                Sharing the most fascinating and inspiring Nature.We analyse and
                fact check to bring you the best in real genuine nature research
                you can http://trust.DM RemovalCredit
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="trend_box">
        <div className="intro_header">
          <div className="header_title">
            <h2>Trends For You</h2>
          </div>
          <div className="setting_icon">
            <IoSettingsOutline />
          </div>
        </div>
        {TrendingData.map((e, i) => (
          <TweetTrend
            title={e.title}
            hastag={e.hastag}
            no={e.tweetsNo}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

const TweetTrend = ({ title, hastag, no }) => {
  return (
    <div className="tweet_headlines">
      <div className="left_side">
        <p>{title}</p>
        <p style={{ fontWeight: "bold" }}>{hastag}</p>
        <p>{no} Tweets</p>
      </div>
      <div className="more_icon">
        <RiMoreFill />
      </div>
    </div>
  );
};

export default SidebarR;
