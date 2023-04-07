import AdminDashboardLayout from "@components/Layout/Admin";
import Dashboard from "@components/Layout/Admin/Dashboard";

export default function Home() {
  return (
    <AdminDashboardLayout>
      <Dashboard title="Blog" />
    </AdminDashboardLayout>
  );
}
