import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import { AuthContext } from '../context/contexts';
import { ThemeContext } from '../context/contexts';
import { Moon, Sun, LogOut } from "lucide-react";

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { logout, user } = useContext(AuthContext);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "250px", width: "100%" }}>
        {/* HEADER */}
        <header
          style={{
            height: "60px",
            backgroundColor: "var(--bg-secondary)",
            borderBottom: "1px solid var(--border-color)",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "0 20px",
            gap: "20px",
          }}
        >
          <span style={{ color: "var(--text-secondary)" }}>
            Hello, {user.name}
          </span>
          <button
            onClick={toggleTheme}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-primary)",
            }}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={logout}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--color-slate)",
            }}
          >
            <LogOut size={20} />
          </button>
        </header>

        {/* CONTENT */}
        <main style={{ padding: "20px", minHeight: "calc(100vh - 60px)" }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
