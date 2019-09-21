import "../sass/Navigation.scss";
import React from "react";
import SideNav from "./SideNav";
import DesktopNav from "./DesktopNav";
import TabletNav from "./TabletNav";

const Navigation = () => {
  return (
    <React.Fragment>
      <SideNav />
      <DesktopNav />
      <TabletNav />
    </React.Fragment>
  );
};

export default Navigation;
