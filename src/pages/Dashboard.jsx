import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  // Mock chart data
  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [12000, 19000, 15000, 21000, 26000, 30000],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.3)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const userSignupData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "New Signups",
        data: [30, 45, 40, 60, 70, 80, 75],
        backgroundColor: "rgba(34,197,94,0.7)",
        borderRadius: 8,
      },
    ],
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex md:flex-row flex-col justify-between items-center">
        <h2 className="text-3xl font-bold">Dashboard Overview</h2>
        <p className="text-gray-800 text-sm">
          Updated: {new Date().toLocaleDateString()}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value="1,245"
          growth="+12%"
          color="blue"
        />
        <StatCard title="Revenue" value="$45,600" growth="+18%" color="green" />
        <StatCard
          title="Active Sessions"
          value="320"
          growth="-4%"
          color="orange"
        />
        <StatCard title="New Signups" value="98" growth="+9%" color="purple" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow dark:bg-gray-700">
          <h3 className="text-lg font-semibold mb-4 dark:text-gray-900">Revenue Trends</h3>
          <div className="h-96 w-full">
            <Line
              data={revenueData}
              options={{ responsive: true, maintainAspectRatio: false }}
              height={300}
            />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow dark:bg-gray-700">
          <h3 className="text-lg font-semibold mb-4 dark:text-gray-900">Weekly User Signups</h3>
          <div className="h-96 w-full">
            <Bar
              data={userSignupData}
              options={{ responsive: true, maintainAspectRatio: false }}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

// --- Subcomponent for Stats Cards ---
function StatCard({ title, value, growth, color }) {
  const colorMap = {
    blue: "text-blue-500",
    green: "text-green-500",
    orange: "text-orange-500",
    purple: "text-purple-500",
  };

  return (
    <div className="bg-white rounded-xl p-5 shadow hover:shadow-md transition-shadow duration-200 dark:bg-gray-700">
      <p className="text-gray-500 text-sm dark:text-gray-900">{title}</p>
      <h3 className="text-2xl font-semibold mt-1 dark:text-gray-900">{value}</h3>
      <span className={`text-sm font-medium ${colorMap[color]} dark:text-gray-900`}>{growth}</span>
    </div>
  );
}
