import Dashboard from "@/components/dashboard";
import Header from "@/components/header";
import AdminLayout from "@/components/layouts/admin-layout";

export default function Page() {
    return (
        <AdminLayout>
            <Header title="Home" />
            <Dashboard />
        </AdminLayout>
    );
}