import React from "react";
import MoboNav from "./MoboNav";

function MainLayout({ children }) {
  return (
    <div className="px-6 overflow-y-auto bg-primary absolute bottom-0 top-0 left-0 right-0">
      <MoboNav />
      {children}
    </div>
  );
}

export default MainLayout;
