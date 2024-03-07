import MusicCategoriesTable from "./music-categories-table";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";

export default function MusicCategories() {

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Thể loại âm nhạc
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Thêm sửa xóa các thể loại bài hát và album.
                    </p>
                </div>
                <div className="ml-auto mr-4">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Thêm thể loại
                    </Button>
                </div>
            </div>
            <MusicCategoriesTable />
        </div>
    );
}