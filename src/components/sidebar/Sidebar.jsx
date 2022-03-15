import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.scss";

const SidebarNavItems = [
  {
    display: "หน้าหลัก",
    icon: <i className="bx bx-home"></i>,
    to: "/",
    section: "home",
  },

  {
    display: "ตั้งค่าเวลา",
    to: "/settime",
    section: "settime",
  },
  {
    display: "ตั้งค่าอุณหภูมิ",
    to: "/temperature",
    section: "temperature",
  },
  {
    display: "ตั้งค่าความชื้น",
    to: "/humidity",
    section: "humidity",
  },
  {
    display: "ตั้งค่าความชื้นดิน",
    to: "/soilhumidity",
    section: "soilhumidity",
  },
  {
    display: "กราฟและตารางข้อมูล",
    to: "/graph",
    section: "graph",
  },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [stepHeight, setStepHeight] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const sidebarItem = sidebarRef.current.querySelector(
        ".sidebar__menu__item"
      );
      indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
      setStepHeight(sidebarItem.clientHeight);
    }, 50);
  }, []);

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = SidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeIndex);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">KKU SMART FARM</div>
      <div ref={sidebarRef} className="sidebar__menu">
        <div
          ref={indicatorRef}
          className="sidebar__menu__indicator"
          style={{
            transform: ` translateX(-50%) translateY(${
              activeIndex * stepHeight
            }px)
                    `,
          }}
        ></div>
        {SidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }
`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
