"use client";

import React, {useEffect, useState} from 'react';
import {redirect} from "next/navigation";
import {useSession} from "next-auth/react";
import axios from "axios";

function DashboardPage() {
  console.log("Dashboard page");
  const { data: session } = useSession();

  const [message, setMessage] = useState("Loading...");

  console.log(session);

  if (!session?.user) {
    redirect("/");
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await axios.get('/api/v1/test');
        if (response.status === 200) {
          console.log("Dashboard data:", response.data);
          setMessage(response.data);
        }
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setMessage("Failed to load dashboard data.");
      }
    }
    loadData();
  }, []);

  return (
    <div className="main-content">
      <div className="sidebar">
        <ul className="menu">
          <li className="menu-item active">
            <span className="icon">📊</span>
            <span>Service Calls</span>
          </li>
          <li className="menu-item">
            <span className="icon">🏢</span>
            <span>Properties</span>
          </li>
          <li className="menu-item">
            <span className="icon">👥</span>
            <span>Tenants</span>
          </li>
          <li className="menu-item">
            <span className="icon">🔧</span>
            <span>Service Operators</span>
          </li>
          <li className="menu-item">
            <span className="icon">📝</span>
            <span>Contracts</span>
          </li>
          <li className="menu-item">
            <span className="icon">💰</span>
            <span>Financials</span>
          </li>
          <li className="menu-item">
            <span className="icon">📈</span>
            <span>Reports</span>
          </li>
          <li className="menu-item">
            <span className="icon">⚙️</span>
            <span>Settings</span>
          </li>
        </ul>
      </div>
      <div className="content">
        <h1>Dashboard</h1>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default DashboardPage;