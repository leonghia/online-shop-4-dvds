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
import { Category } from "@/models/category";

export default function GamesCategoriesTable({ gamesCategories }: { gamesCategories: Category[] | null }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">STT</TableHead>
                    <TableHead>Thể loại</TableHead>
                    <TableHead>Số lượng trò chơi</TableHead>
                    <TableHead colSpan={2}></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {gamesCategories?.map((c, i) => {
                    return (
                        <TableRow key={c.id}>
                            <TableCell className="font-medium">{i + 1}</TableCell>
                            <TableCell>{c.name}</TableCell>
                            <TableCell>2</TableCell>
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