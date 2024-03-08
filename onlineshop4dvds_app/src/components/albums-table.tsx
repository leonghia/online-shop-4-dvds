import { Album } from "@/models/album";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

export default function AlbumsTable({albums, onDelete}: {albums: Album[] | null, onDelete: Function}) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">No.</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Released</TableHead>
                    <TableHead>Artist(s)</TableHead>
                    <TableHead>Genre(s)</TableHead>
                    <TableHead colSpan={2}></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {albums?.map((album, i) => {
                    return (
                        <TableRow key={album.id}>
                            <TableCell className="font-medium">{i + 1}</TableCell>
                            <TableCell>{album.title}</TableCell>
                            <TableCell>{new Date(album.released).toLocaleDateString("vi-VN")}</TableCell>
                            <TableCell>{album.artists.join(", ")}</TableCell>
                            <TableCell>{album.genres.join(", ")}</TableCell>
                            <TableCell>
                                
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => onDelete(album.id)} variant="outline" size="icon" title="Delete"><Trash2 className="w-4 h-4" /></Button>
                            </TableCell>
                        </TableRow>)
                })}
            </TableBody>
        </Table>
    );
}