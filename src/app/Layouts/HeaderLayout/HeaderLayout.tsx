import React from "react";
import "./HeaderLayout.css";
import navItems from "@/app/Constants/navItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/ReduxStore/store";
import { updateStartRouteChange } from "@/app/ReduxStore/AppSlice";
import { useRouter } from "next/navigation";

const HeaderLayout: React.FC<any> = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <div className="header-layout">
      <div className="content global-container">
        <div className="right-col">
          {navItems.map((item, index) => {
            return (
              <h3
                key={index}
                className="header-nav-item"
                onClick={() => {
                  dispatch(updateStartRouteChange(true));
                  setTimeout(() => {
                    router.push(item.route);
                  }, 1350);
                }}
              >
                {item.title}
              </h3>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeaderLayout;
