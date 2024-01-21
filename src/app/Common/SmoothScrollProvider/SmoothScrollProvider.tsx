import ReactLenis from "@studio-freight/react-lenis";
import React from "react";

const SmoothScrollProvider: React.FC<any> = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScrollProvider;
