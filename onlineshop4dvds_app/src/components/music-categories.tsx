import MusicCategoriesTable from "./music-categories-table";

import { useState, useEffect, MouseEvent, ChangeEvent } from "react";
import { Category } from "@/models/category";
import { API_URL } from "@/config";
import AddMusicCategoryDialog from "./add-music-category-dialog";


export default function MusicCategories() {
    const [musicCategories, setMusicCategories] = useState<Category[] | null>(null);
    const [flip, setFlip] = useState(false);

    const handleDataChange = () => {
        setFlip(!flip);
    }

    useEffect(() => {
        fetch(`${API_URL}/categories?type=0`)
            .then(res => res.json())
            .then((data: Category[]) => setMusicCategories(data))
            .catch(err => console.error(err));
    }, [flip]);

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
                    <AddMusicCategoryDialog onAddSuccessfully={handleDataChange} />
                </div>
            </div>
            <MusicCategoriesTable musicCategories={musicCategories} onDeleteSuccessfully={handleDataChange} onEditSuccessfully={handleDataChange} />
        </div>
    );
}