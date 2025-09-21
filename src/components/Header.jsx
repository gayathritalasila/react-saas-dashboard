import { useEffect, useState } from "react"
import { Search } from "lucide-react";
import ToggleIcon from "../assets/ToggleIcon";
import ThemeIcon from "../assets/ThemeIcon";
import ActivityIcon from "../assets/ActivityIcon";
import NotificationIcon from "../assets/NotificationIcon";
import StarIcon from "../assets/StarIcon";
import SidebarIcon from "../assets/SidebarIcon";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import SearchTextIcon from "../assets/SearchTextIcon";

export default function Header({ setIsSidebarOpen, onShowNotifications,onShowActivities,onShowSidebar, onToggleTheme }) {

  return (
    <header className="sticky top-0 z-20 h-[28px] bg-white border-b flex items-center justify-between px-[28px] py-[20px] shadow-sm text-gray-900
                       dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700"
      style={{ borderColor: "rgba(28,28,28,0.1)" }}>
      {/* Left side */}
      <div className="flex items-center space-x-3">
        {/* Sidebar Toggle */}
        <ToggleIcon
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className="w-[28px] h-[28px] rounded-[8px] p-[4px] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
        />
        {/* Star + Breadcrumbs */}
        <StarIcon className="w-[26px] h-[26px] rounded-[8px] p-[14px] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800" />
        <div className="w-[184px] h-[28px] flex items-center justify-center gap-[18px] rounded-[8px]">
          <Breadcrumbs
            aria-label="breadcrumb"
            separator="/"
            sx={{ color: "text.secondary", fontSize: "1.25rem", "& .MuiTypography-root": { color: "inherit" }, }}
          >
            <Link
              underline="hover"
              color="text.secondary"
              href="#"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Dashboards
            </Link>
            <Typography color="text.primary" fontWeight="500">
              Default
            </Typography>
          </Breadcrumbs>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Search box */}
        <div className="relative text-xs text-[rgba(28,28,28,0.2)]">
          {/* Input with padding on both sides */}
          <Search className="absolute left-[8px] top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-300 pointer-events-none" />
          <input
            type="text"
            placeholder="Search"
            className="text-gray-800 placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
            style={{
              width: "120px",
              height: "28px",
              paddingLeft: "35px",
              paddingRight: "48px",
              paddingTop: "4px",
              paddingBottom: "4px",
              borderRadius: "10px",
              // backgroundColor: "#f3f4f6",
              fontSize: "12px",
              // color: "#374151",
              outline: "none",
              border: "none",
            }}
          />
          <SearchTextIcon className="absolute w-[16px] h-[16px] right-[8px] top-1/2 -translate-y-1/2 text-[10px] rounded px-1 py-0.5 pointer-events-none text-gray-500 dark:text-gray-300" />
        </div>
        {/* Icons */}
        <ThemeIcon onClick={onToggleTheme} className="w-[38px] h-[38px] rounded-[8px] p-[4px] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" />
        <ActivityIcon className="w-[28px] h-[28px] rounded-[8px] p-[4px] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" onClick={onShowActivities} />
        <NotificationIcon className="w-[28px] h-[28px] rounded-[8px] p-[4px] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" onClick={onShowNotifications} />
        <SidebarIcon className="w-[28px] h-[28px] rounded-[8px] p-[4px] flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer" onClick={onShowSidebar} />
      </div>
    </header>
  );
}
