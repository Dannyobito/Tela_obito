import React, { useState } from "react";
import "./dashboard.css";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import Emaillist from "../../components/Emaillist/emaillist";
import Emailview from "../../components/Emailview/emailview";
import { Route, Routes } from "react-router-dom";
import Info from "../../components/Info/info";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(true);
  const [category, setCategory] = useState(0);

  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Routes>
          <Route index element={<Emaillist category={category} />} />
          <Route path={":emailId"} element={<Emailview />} />
          <Route path="/info" element={<Info />} />
        </Routes>
        <Info />
      </div>
    </>
  );
};

export default Dashboard;
