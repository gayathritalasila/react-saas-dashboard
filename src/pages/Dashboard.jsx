import { useState } from "react"
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import NotificationPanel from '../components/NotificationPanel'
import Card from '../components/Card'
import BarChartCard from "../components/BarChartCard"
import LineChartCard from "../components/LineChartCard"
import MapChartCard from "../components/MapChartCard"
import TopSellingProductsCard from "../components/TopSellingProducts"
import PieChartCard from "../components/PieChartCard"
import OrderList from "../components/OrderList"

export default function Dashboard({ toggleTheme }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [rightPanel, setRightPanel] = useState(null);
  // null | 'notifications' | 'activities' | 'sidebar'
  const [currentView, setCurrentView] = useState("dashboard");

  const data = [
    { name: "Jan", value: 4000 },
    { name: "Feb", value: 3000 },
    { name: "Mar", value: 2000 },
    { name: "Apr", value: 2780 },
    { name: "May", value: 1890 },
    { name: "Jun", value: 2390 },
  ];

  const weeklyData = [
    { name: "Mon", current: 400, previous: 300 },
    { name: "Tue", current: 500, previous: 350 },
    { name: "Wed", current: 350, previous: 320 },
    { name: "Thu", current: 600, previous: 400 },
    { name: "Fri", current: 700, previous: 450 },
    { name: "Sat", current: 550, previous: 380 },
    { name: "Sun", current: 620, previous: 410 },
  ];


  const markers = [
    { name: "New York", coordinates: [-74.006, 40.7128] },
    { name: "San Francisco", coordinates: [-122.4194, 37.7749] },
    { name: "Sydney", coordinates: [151.2093, -33.8688] },
    { name: "Singapore", coordinates: [103.8198, 1.3521] },
  ];

  const locations = [
    { name: "New York", value: 72 },
    { name: "San Francisco", value: 39 },
    { name: "Sydney", value: 25 },
    { name: "Singapore", value: 61 },
  ];

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-50 text-gray-900 dark:bg-base dark:text-text">
      {isSidebarOpen && <Sidebar />}

      <div className="flex-1 flex flex-col bg-gray-50 dark:bg-base">
        <Header
          setIsSidebarOpen={setIsSidebarOpen}
          onShowNotifications={() => setRightPanel("notifications")}
          onShowActivities={() => setRightPanel("activities")}
          onShowSidebar={() => setRightPanel("sidebar")}
          onToggleTheme={toggleTheme}
        />

        <main className="flex-1 overflow-y-auto p-[25px] space-y-[28px] dark:bg-surface dark:text-text">
          {currentView === "dashboard" && (
            <>
              {/* top row: 4 cards + bar chart */}
              <div className="grid grid-cols-2 lg:grid-cols-2 gap-[38px]">
                {/* 4 cards */}
                <section className="grid grid-cols-2 gap-x-[0px] gap-y-[25px]">
                  <Card title="Customers" value="3,781" change="+11.01%" bgColor="rgba(227,245,255,1)" />
                  <Card
                    title="Orders"
                    value="1,219"
                    change="-0.03%"
                    bgColor="rgba(247, 249, 251, 1)"
                    onClick={() => setCurrentView("orders")}
                  />
                  <Card title="Revenue" value="$695" change="+15.03%" bgColor="rgba(247, 249,251,1)" />
                  <Card title="Growth" value="30.1%" change="+6.08%" bgColor="rgba(229,236,246,1)" />
                </section>

                <BarChartCard data={data} />
              </div>

              <div className="grid grid-cols-2 bg-white lg:grid-cols-2 gap-[208px]">
                <LineChartCard data={weeklyData} title={
                  <div className="flex items-center gap-3 text-gray-900 dark:text-text">
                    <span className="font-semibold">Revenue &nbsp;</span>
                    <span className="text-gray-400 dark:text-textMuted">| &nbsp;</span>
                    <span className="text-sm">
                      Current Week <span className="font-medium text-gray-900">$58,211</span>
                      &nbsp;
                      Previous Week <span className="font-medium text-gray-900">$68,768</span>
                    </span>
                  </div>
                } />
                <MapChartCard markers={markers} locations={locations} />

              </div>
              <div className="flex justify-start gap-[108px]">
                <TopSellingProductsCard />
                <PieChartCard />
              </div>
            </>
          )}

          {currentView === "orders" && (
            <OrderList />
          )}
        </main>
      </div>

      {rightPanel && (
        <NotificationPanel mode={rightPanel} />
      )}
    </div>
  );
}
