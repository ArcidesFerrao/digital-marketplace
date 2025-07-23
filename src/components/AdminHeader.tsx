"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const AdminHeader = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    }

    if (menu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menu]);

  return (
    <section className="dash-header flex items-center justify-between">
      <Link href="/admin">
        <h2>Dashboard</h2>
      </Link>
      <div className="dash-menu-admin flex gap-5">
        <Link href="/admin/request">Requests</Link>
        <Link href="/admin/report">Report</Link>
        <Link href="/admin/message">Messages</Link>
      </div>
      <div className="dash-nav-admin" ref={menuRef}>
        {!menu ? (
          <button className="flex " onClick={() => setMenu((prev) => !prev)}>
            <span className="ion--menu-outline"></span>
          </button>
        ) : (
          <div className="flex gap-5">
            <Link href="/admin/request">Requests</Link>
            <Link href="/admin/report">Report</Link>
            <Link href="/admin/message">Messages</Link>
          </div>
        )}
      </div>
    </section>
  );
};
