import React, { useContext } from "react";
import { AuthContext } from '../context/contexts';
import { ThemeContext } from '../context/contexts';

const StatCard = ({ title, value }) => (
  <div
    style={{
      backgroundColor: "var(--bg-secondary)",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      flex: 1,
    }}
  >
    <h3 style={{ color: "var(--color-gray)", fontSize: "14px", margin: 0 }}>
      {title}
    </h3>
    <p style={{ fontSize: "24px", fontWeight: "bold", margin: "10px 0 0 0" }}>
      {value}
    </p>
  </div>
);

const StudentDashboard = () => (
  <div>
    <h1>Student Dashboard</h1>
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      <StatCard title="Attendance" value="95%" />
      <StatCard title="Coins" value="120" />
      <StatCard title="Completed Lessons" value="14" />
    </div>
  </div>
);

const TeacherDashboard = () => (
  <div>
    <h1>Teacher Dashboard</h1>
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      <StatCard title="Active Groups" value="4" />
      <StatCard title="Ungraded Homework" value="12" />
    </div>
  </div>
);

const AdminDashboard = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
      <StatCard title="Total Students" value="450" />
      <StatCard title="Monthly Revenue" value="$12,500" />
      <StatCard title="Total Teachers" value="25" />
    </div>
  </div>
);

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (user.role === "admin") return <AdminDashboard />;
  if (user.role === "teacher") return <TeacherDashboard />;
  return <StudentDashboard />;
};

export default Dashboard;
