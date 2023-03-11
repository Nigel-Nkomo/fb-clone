import React from "react";
import "./Header.css";
import FacebookLogo from "./Icons/FacebookLogo";
import SearchIcon from "./Icons/SearchIcon";
import HomeIcon from "./Icons/HomeIcon";
import WatchIcon from "./Icons/WatchIcon";
import MarketIcon from "./Icons/MarketIcon";
import GroupsIcon from "./Icons/GroupsIcon";
import GamingIcon from "./Icons/GamingIcon";
import AvatarIcon from "./Icons/AvatarIcon";
import MenuIcon from "./Icons/MenuIcon";
import MessengerIcon from "./Icons/MessengerIcon";
import BellIcon from "./Icons/BellIcon";

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <FacebookLogo />
        <div className="header__input">
          <SearchIcon />
          <input type="text" className="" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__option">
          <HomeIcon />
        </div>
        <div className="header__option">
          <WatchIcon />
        </div>
        <div className="header__option">
          <MarketIcon />
        </div>
        <div className="header__option">
          <GroupsIcon />
        </div>
        <div className="header__option">
          <GamingIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <MenuIcon />
        </div>
        <div className="header__info">
          <MessengerIcon />
        </div>
        <div className="header__info">
          <BellIcon />
        </div>
        <div className="header__info">
          <AvatarIcon />
        </div>
      </div>
    </div>
  );
}
