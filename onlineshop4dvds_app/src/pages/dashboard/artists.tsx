import AdminLayout from "@/components/layouts/admin-layout";

export default function Artists() {
    return (
        <AdminLayout>
            <div>
                <div className="flex justify-between items-center mb-10">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Quản lý nghệ sĩ
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Thêm sửa xóa các nghệ sĩ.
                        </p>
                    </div>
                    <div className="ml-auto mr-4">
                        
                    </div>
                </div>
                
            </div>
        </AdminLayout>
    );
}