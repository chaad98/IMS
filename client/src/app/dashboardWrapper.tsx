import React from "react";
import { WithChildren } from "@/utils/children";
import NavBar from "@/app/(components)/Navbar";
import Sidebar from "@/app/(components)/Sidebar";

const DashboardWrapper = ({ children }: WithChildren) => {
  return (
    <div className={`light flex bg-gray-50 text-gray-900 w-full min-h-screen`}>
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24`}
      >
        <NavBar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
