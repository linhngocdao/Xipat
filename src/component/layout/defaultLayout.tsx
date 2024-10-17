import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { HomeFilledIcon, MenuIcon, XIcon } from "@shopify/polaris-icons";

interface NavItemProps {
  name: string;
  to: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const NavItem: React.FC<NavItemProps> = ({ name, to, icon: Icon }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center px-6 py-2 mt-4 duration-200 border-l-4 ${
        isActive
          ? "border-blue-500 text-blue-500 bg-blue-100"
          : "border-transparent hover:bg-gray-100"
      }`
    }
  >
    <Icon className="w-5 h-5" />
    <span className="mx-4">{name}</span>
  </NavLink>
);

const DefaultLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems: NavItemProps[] = [
    { name: "Dashboard", to: "/", icon: HomeFilledIcon },
    { name: "Products", to: "/product", icon: HomeFilledIcon },
    { name: "Settings", to: "/settings", icon: HomeFilledIcon },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50 lg:hidden ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-white shadow-md lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"
        }`}
      >
        <div className="flex items-center justify-between p-4 lg:hidden">
          <h2 className="text-2xl font-semibold text-gray-800">Menu</h2>
          <button onClick={() => setSidebarOpen(false)}>
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-5">
          {navItems.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </nav>
      </aside>
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-between px-6 py-4 bg-white border-b-2 lg:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <MenuIcon className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        </header>

        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
