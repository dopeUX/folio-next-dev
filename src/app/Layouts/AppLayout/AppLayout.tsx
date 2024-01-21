"use client";
import React, { useEffect, useRef } from "react";
import "./AppLayout.css";

const AppLayout: React.FC<any> = ({ children }) => {
  const appRef: any = useRef();
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <div className="app-layout" ref={appRef} data-scroll-container>
      {children}
    </div>
  );
};

export default AppLayout;
