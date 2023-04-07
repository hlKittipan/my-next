import Overlay from "@components/Layout/Admin/Provider/overlay";
import TopNavigation from "@components/Layout/Admin/Navbar/topnavigation";
import SideNavigation from "@components/Layout/Admin/Navbar/sidenavigation";
import DashboardProvider from "./Provider/context";
import { PropsWithChildren } from "react";

const style = {
  container: `bg-gray-900 h-screen overflow-hidden relative`,
  mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-20 lg:space-y-4`,
  main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4`,
};

export default function AdminDashboardLayout({ children }: PropsWithChildren) {
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className="flex items-start">
          <Overlay />
          <SideNavigation mobilePosition="right" />
          <div className={style.mainContainer}>
            <TopNavigation />
            <main className={style.main}>{children}</main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
