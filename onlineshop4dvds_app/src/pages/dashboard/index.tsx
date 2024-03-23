import Header from "@/components/header";
import AdminLayout from "@/components/layouts/admin-layout";
import Home from "@/components/dashboard/home";

export default function Page() {
    return (
        <AdminLayout>
            <Home />
        </AdminLayout>
    );
}