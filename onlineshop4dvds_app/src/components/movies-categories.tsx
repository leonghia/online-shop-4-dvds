import MoviesCategoriesTable from "./movies-categories-table";
import { useState, useEffect } from "react";
import { Category } from "@/models/category";
import { API_URL } from "@/config";
import { CategoryType } from "@/utils/category-type";
import { Button } from "./ui/button";
import { PlusCircle } from "lucide-react";

export default function MoviesCategories() {
    const [moviesCategories, setMoviesCategories] = useState<Category[] | null>(null);

    useEffect(() => {
        fetch(`${API_URL}/categories?type=${CategoryType.Movie}`)
            .then(res => res.json())
            .then((data: Category[]) => setMoviesCategories(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div className="space-y-3">
                    <h2 className="text-2xl font-semibold tracking-tight">
                        Thể loại phim ảnh
                    </h2>
                    <p className="text-sm text-muted-foreground">
                        Thêm sửa xóa các thể loại bộ phim.
                    </p>
                </div>
                <div className="ml-auto mr-4">
                    <Button>
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Thêm thể loại
                    </Button>
                </div>
            </div>
            <MoviesCategoriesTable moviesCategories={moviesCategories} />
        </div>
    );
}