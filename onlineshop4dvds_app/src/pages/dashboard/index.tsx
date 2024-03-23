import Dashboard from "@/components/dashboard";
import Header from "@/components/header";
import AdminLayout from "@/components/layouts/admin-layout";

export default function Page() {
    return (
        <AdminLayout>
            <Header title="Dashboard" description="Manage everything in your store" />
            <Dashboard className="max-w-5xl" />
        </AdminLayout>
    );
}