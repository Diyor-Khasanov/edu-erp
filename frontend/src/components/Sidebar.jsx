import React, { useContext } from "react";
import { AuthContext } from '../context/contexts';
import { ThemeContext } from '../context/contexts';
import { Link } from "react-router-dom";
import { Book, Users, DollarSign, Settings, Home, Grid } from "lucide-react";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  const menus = {
    student: [
      { name: "Dashboard", path: "/", icon: <Home size={20} /> },
      { name: "My Schedule", path: "/schedule", icon: <Grid size={20} /> },
      { name: "Payments", path: "/payments", icon: <DollarSign size={20} /> },
    ],
    teacher: [
      { name: "Dashboard", path: "/", icon: <Home size={20} /> },
      { name: "My Groups", path: "/groups", icon: <Users size={20} /> },
      { name: "Grading", path: "/grading", icon: <Book size={20} /> },
    ],
    admin: [
      { name: "Admin Panel", path: "/", icon: <Home size={20} /> },
      { name: "Manage Users", path: "/users", icon: <Users size={20} /> },
      { name: "Finance", path: "/finance", icon: <DollarSign size={20} /> },
      { name: "Settings", path: "/settings", icon: <Settings size={20} /> },
    ],
  };

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",  
        backgroundColor: "var(--bg-secondary)",
        borderRight: "1px solid var(--border-color)",
        padding: "20px",
        position: "fixed",
      }}
    >
      <h2 style={{ color: "var(--color-slate)", marginBottom: "40px" }}>
        EduERP
      </h2>
      <nav style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        {menus[user.role].map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              color: "var(--text-secondary)",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
