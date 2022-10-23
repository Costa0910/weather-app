import CurrentLocation from "./weather/CurrentLocation";
import { SidebarStyle } from "./sidebar-style";
import Search from "./search/Search";
import { useState } from "react";
const Sidebar = () => {
  // this state determine witch to display
  const [currentLocationOrSearch, setCurrentLocationOrSearch] = useState(true);
  return (
    <SidebarStyle>
      {currentLocationOrSearch ? (
        <CurrentLocation setNewState={setCurrentLocationOrSearch} />
      ) : (
        <Search setNewState={setCurrentLocationOrSearch} />
      )}
    </SidebarStyle>
  );
};

export default Sidebar;
