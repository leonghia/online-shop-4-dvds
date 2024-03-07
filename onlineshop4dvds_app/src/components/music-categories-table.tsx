import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Category } from "@/models/category";
import { API_URL } from "@/config";

export default function MusicCategoriesTable() {
    const [musicCategories, setMusicCategories] = useState<Category[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_URL}/categories?type=0`)
            .then(res => res.json())
            .then((data: Category[]) => setMusicCategories(data))
            .catch(err => console.error(err))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">STT</TableHead>
                    <TableHead>Thể loại</TableHead>
                    <TableHead>Số lượng bài hát</TableHead>
                    <TableHead>Số lượng albums</TableHead>
                    <TableHead colSpan={2}></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {musicCategories?.map((c, i) => {
                    return (
                        <TableRow key={c.id}>
                            <TableCell className="font-medium">{i + 1}</TableCell>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>2</TableCell>
                            <TableCell>1</TableCell>
                            <TableCell>
                                <Button variant="outline" size="icon" title="Sửa"><Pencil className="w-4 h-4" /></Button>
                            </TableCell>
                            <TableCell>
                                <Button variant="outline" size="icon" title="Xóa"><Trash2 className="w-4 h-4" /></Button>
                            </TableCell>
                        </TableRow>)
                })}
            </TableBody>
        </Table>
    );
}