import { FireOutlined, SettingOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md z-50">
      <div className="flex justify-around items-center py-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-orange-500" : "text-gray-400"
            }`
          }
        >
          <FireOutlined style={{ fontSize: "20px" }} />
          <span className="mt-1">Trending</span>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex flex-col items-center text-xs ${
              isActive ? "text-orange-500" : "text-gray-400"
            }`
          }
        >
          <SettingOutlined style={{ fontSize: "20px" }} />
          <span className="mt-1">Settings</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
