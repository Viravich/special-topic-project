import { useEffect, useRef, useState } from "react";


export const SidebarItems = [
    {
        display: "หน้าหลัก",
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
        section: "humiditye",
    },
    {
        display: "ตั้งค่าความชื้นดิน",
        to: "/soil-humidity",
        section: "soilhumiditye",
    },
    {
        display: "กราฟและตารางข้อมูล",
        to: "/graph",
        section: "graph",
    },
]