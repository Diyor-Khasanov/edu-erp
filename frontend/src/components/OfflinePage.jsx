import React from "react";
import { WifiOff } from "lucide-react";

const OfflinePage = () => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "var(--bg-primary)",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <WifiOff size={64} color="var(--color-slate)" />
    <h2 style={{ color: "var(--text-primary)" }}>No Internet Connection</h2>
    <p style={{ color: "var(--text-secondary)" }}>
      Please check your network settings.
    </p>
    <button
      onClick={() => window.location.reload()}
      style={{
        padding: "10px 20px",
        backgroundColor: "var(--color-slate)",
        color: "white",
        border: "none",
        cursor: "pointer",
      }}
    >
      Retry
    </button>
  </div>
);

export default OfflinePage;
