// ═══════════════════════════════════════════════════════════════
//  แก้ข้อมูล resume ของคุณที่ไฟล์นี้ไฟล์เดียว — ทุกอย่างจะอัปเดตให้อัตโนมัติ
// ═══════════════════════════════════════════════════════════════

export const resume = {
  // --- ส่วนหัว / Hero ---
  name: "Preawpan Siriphalangkanont",
  role: "Mobile Developer",
  // ใส่รูปโปรไฟล์: วางไฟล์ไว้ที่ public/ แล้วใส่ path เช่น "/profile.jpg"
  // ถ้าเว้นว่างไว้ จะแสดงเป็นตัวย่อชื่อในวงกลม gradient แทน
  photo: "",
  tagline:
    "นักพัฒนาโมบายที่หลงใหลในการสร้างแอปที่ใช้งานจริง เชี่ยวชาญ Flutter " +
    "พร้อมพื้นฐานด้านวิศวกรรมอิเล็กทรอนิกส์ IoT และงานวิจัยด้าน AI เพื่อผู้พิการทางสายตา",
  location: "Bangkok, Thailand",
  email: "siri.preawpan@gmail.com",

  // --- ลิงก์โซเชียล (เอาออกได้ถ้าไม่มี) ---
  links: [
    { label: "Email", href: "mailto:siri.preawpan@gmail.com" },
    { label: "Tel", href: "tel:+66809537819" },
  ],

  // --- About ---
  about:
    "Mobile Developer ที่ Freewill FX เชี่ยวชาญ Flutter สร้างแอประดับองค์กรมาแล้วหลากหลาย " +
    "ตั้งแต่ CRM, fleet management, logistics tracking ไปจนถึงระบบ workforce " +
    "มีพื้นฐานทั้งฝั่ง frontend, backend และ embedded systems จากประสบการณ์เป็น " +
    "Software Engineer และ Electronics Engineer กำลังศึกษาปริญญาโท IT (GPA 4.00) " +
    "ทำวิทยานิพนธ์แอปนำทางในอาคารสำหรับผู้พิการทางสายตา",

  // --- ตัวเลขที่อยากอวด (metrics) ---
  stats: [
    { value: "4+", label: "ปีประสบการณ์" },
    { value: "14+", label: "โปรเจกต์ที่ส่งมอบ" },
    { value: "4.00", label: "GPA ปริญญาโท" },
  ],

  // --- ทักษะ ---
  skills: [
    {
      group: "Mobile & Languages",
      items: ["Flutter", "Dart", "JavaScript", "Python", "Golang", "Assembly"],
    },
    {
      group: "Frontend & Backend",
      items: ["React", "React Native", "Node.js", "Express", "HTML", "CSS"],
    },
    {
      group: "Data",
      items: ["MySQL", "MongoDB", "SQLite", "Hive"],
    },
    {
      group: "Tools & Platforms",
      items: ["Firebase", "GCP", "AWS", "Figma", "Git", "Postman", "ROS"],
    },
    {
      group: "Fields of Interest",
      items: ["UX/UI Design", "IoT", "AI / Machine Learning", "Blockchain"],
    },
    {
      group: "Languages",
      items: ["Thai", "English", "Chinese (HSK 1-2)"],
    },
  ],

  // --- ประสบการณ์ทำงาน ---
  experience: [
    {
      company: "Freewill FX",
      role: "Mobile Developer",
      period: "ส.ค. 2022 — ปัจจุบัน",
      description:
        "พัฒนาแอปพลิเคชันระดับองค์กรด้วย Flutter ครอบคลุมทั้ง CRM, fleet management, logistics และ workforce",
      highlights: [
        "SiteInsight by SCG (Flutter & Golang) — แอป CRM จัดการงานขายโปรเจกต์ ไซต์ลูกค้า และกิจกรรมการขาย",
        "Terminus (Flutter) — ระบบ fleet management ติดตามยานพาหนะ งานส่งของ แจ้งเตือน และเล่นวิดีโอย้อนหลัง",
        "Linktrack (Flutter) — ระบบ logistics tracking เชื่อม Google Maps ติดตามรถและตำแหน่งแบบเรียลไทม์",
        "Smart QC, Cloudtime (Passenger / Patrol / Attendance), True Delivery Tracker, Terminus Technician",
      ],
    },
    {
      company: "mµ Space Corp",
      role: "Software Engineer",
      period: "มิ.ย. 2021 — ก.ค. 2022",
      description:
        "พัฒนาระบบภายในและแอปควบคุมฮาร์ดแวร์แบบเรียลไทม์ ทั้งฝั่งเว็บและโมบาย",
      highlights: [
        "Internal Portal Website (React) — ระบบพนักงาน จัดการลงเวลา จองรถตู้ และแบบฟอร์มจัดซื้อ",
        "Battery Management System (Flutter) — มอนิเตอร์และตั้งค่าแบตเตอรี่แบบเรียลไทม์",
        "Autonomous Robot Application (Flutter) — แสดงข้อมูลเรียลไทม์และควบคุมหุ่นยนต์ระยะไกล",
      ],
    },
    {
      company: "mµ Space Corp",
      role: "Electronics Engineer",
      period: "ก.พ. 2021 — มิ.ย. 2021",
      description:
        "งานพัฒนาระบบ embedded และ IoT ตั้งแต่เซนเซอร์ ไปจนถึงการควบคุมมอเตอร์",
      highlights: [
        "Inventory Management System (Python) — ระบบติดตามและจัดการสต็อก",
        "Environmental Monitoring System — แดชบอร์ดเรียลไทม์สำหรับเซนเซอร์ก๊าซ อุณหภูมิ และความชื้น",
        "Embedded (Assembly) & BLDC Motor Control (Arduino) — เขียนโปรแกรมระดับล่างควบคุมฮาร์ดแวร์และมอเตอร์",
      ],
    },
  ],

  // --- โปรเจกต์เด่น ---
  projects: [
    {
      name: "Seeable (Thesis)",
      description:
        "แอปนำทางในอาคารและระบบแจ้งเตือนสิ่งกีดขวางสำหรับผู้พิการทางสายตา ที่ TNI — มีผลงานตีพิมพ์ด้าน context-aware obstacle detection",
      tags: ["Flutter", "AI", "Indoor Navigation"],
      href: "",
    },
    {
      name: "SiteInsight by SCG",
      description:
        "แอป CRM สำหรับจัดการงานขายโปรเจกต์ ไซต์ลูกค้า และกิจกรรมการขาย",
      tags: ["Flutter", "Golang", "CRM"],
      href: "",
    },
    {
      name: "Terminus",
      description:
        "ระบบ fleet management ติดตามยานพาหนะ งานส่งของ แจ้งเตือน และเล่นวิดีโอย้อนหลัง",
      tags: ["Flutter", "Fleet", "Realtime"],
      href: "",
    },
    {
      name: "PM 2.5 Monitoring",
      description:
        "ระบบมอนิเตอร์เซนเซอร์ฝุ่น PM 2.5 พร้อมแจ้งเตือนอัตโนมัติผ่าน LINE (ปริญญาตรี)",
      tags: ["IoT", "Sensors", "LINE Notify"],
      href: "",
    },
  ],

  // --- การศึกษา ---
  education: [
    {
      school: "Thai-Nichi Institute of Technology",
      degree: "M.Sc. Information Technology · GPA 4.00",
      period: "2024 — 2026",
    },
    {
      school: "Civil Aviation Training Center",
      degree: "B.Eng. Aviation Electronics · GPA 2.85",
      period: "2017 — 2021",
    },
  ],

  // --- ใบรับรอง / Achievement ---
  achievements: [
    "Foundations of User Experience (UX) Design — Google",
    "Project Management & Agile Project Management — Google",
    "Cybersecurity Foundation & Professional — Thailand National Cyber Academy (THNCA)",
    "Chinese for HSK 1-2 — Peking University",
  ],
};

export type Resume = typeof resume;
