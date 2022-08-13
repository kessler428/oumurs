import { FaCalculator, FaTh, FaMoneyBillWave, FaUsers, FaShoppingCart, FaTools } from 'react-icons/fa'

import "../../../index.css";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  return (
    <div className="fixed mt-[63px] hidden sm:flex top-0 left-0 h-screen w-16 m-0 flex-col bg-dark-blue text-black border-r">
      <NavLink
        to="/generate_report"
        className={({ isActive }) =>
          isActive
            ? "bg-orange mt-6 mb-4 p-3 text-white rounded mx-2"
            : "mt-4 mb-4 p-4 text-white hover:bg-hover-orange"
        }
      >
        <SideBarIcon icon={<FaCalculator size="20" />} text="Reportes" />
      </NavLink>
      <NavLink
        to="/inventory"
        className={({ isActive }) =>
          isActive
            ? "bg-orange mt-6 mb-4 p-3 text-white rounded mx-2"
            : "mt-4 mb-4 p-4 text-white hover:bg-hover-orange"
        }
      >
        <SideBarIcon icon={<FaTh size="20" />} text="Inventario" />
      </NavLink>
      <NavLink
        to="/asistentes"
        className={({ isActive }) =>
          isActive
            ? "bg-orange mt-6 mb-4 p-3 text-white rounded mx-2"
            : "mt-4 mb-4 p-4 text-white hover:bg-hover-orange"
        }
      >
        <SideBarIcon icon={<FaMoneyBillWave size="20" />} text="Creditos" />
      </NavLink>
      <NavLink
        to="/scanner"
        className={({ isActive }) =>
          isActive
            ? "bg-orange mt-6 mb-4 p-3 text-white rounded mx-2"
            : "mt-4 mb-4 p-4 text-white hover:bg-hover-orange"
        }
      >
        <SideBarIcon icon={<FaUsers size="20" />} text="Clientes" />
      </NavLink>
      <NavLink
        to="/scanner"
        className={({ isActive }) =>
          isActive
            ? "bg-orange mt-6 mb-4 p-3 text-white rounded mx-2"
            : "mt-4 mb-4 p-4 text-white hover:bg-hover-orange"
        }
      >
        <SideBarIcon icon={<FaShoppingCart size="20" />} text="Tiendas" />
      </NavLink>
      <NavLink
        to="/scanner"
        className={({ isActive }) =>
          isActive
            ? "bg-orange mt-6 mb-4 p-3 text-white rounded mx-2"
            : "mt-4 mb-4 p-4 text-white hover:bg-hover-orange"
        }
      >
        <SideBarIcon icon={<FaTools size="20" />} text="Usuarios" />
      </NavLink>
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sideBarIcon group">
    {icon}
    <span className="sideBar-Tooltip group-hover:scale-100">{text}</span>
  </div>
);