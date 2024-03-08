import AddArtistDialog from "@/components/add-artist-dialog";
import AdminLayout from "@/components/layouts/admin-layout";

export default function Artists() {
    return (
        <AdminLayout>
            <div>
                <div className="flex justify-between items-center mb-10">
                    <div className="space-y-3">
                        <h2 className="text-2xl font-semibold tracking-tight">
                            Manage artists
                        </h2>
                        <p className="text-sm text-muted-foreground">
                            Create, edit or delete artists in your website.
                        </p>
                    </div>
                    <div className="ml-auto mr-4">
                        <AddArtistDialog />
                    </div>
                </div>
                
            </div>
        </AdminLayout>
    );
}