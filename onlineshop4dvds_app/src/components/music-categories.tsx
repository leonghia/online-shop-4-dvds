import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { PlusCircle, Pencil, Trash2 } from "lucide-react";

export default function MusicCategories() {
    return (
        <div>
            <div className="flex justify-between items-center">
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
            <Table className="mt-10">
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">ID</TableHead>
                        <TableHead>Thể loại</TableHead>
                        <TableHead>Số lượng bài hát</TableHead>
                        <TableHead>Số lượng albums</TableHead>
                        <TableHead colSpan={2}></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Pop</TableCell>
                        <TableCell>2</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell>
                            <Button variant="outline" size="icon" title="Sửa"><Pencil className="w-4 h-4" /></Button>
                        </TableCell>
                        <TableCell>
                            <Button variant="outline" size="icon" title="Xóa"><Trash2 className="w-4 h-4" /></Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    );
}