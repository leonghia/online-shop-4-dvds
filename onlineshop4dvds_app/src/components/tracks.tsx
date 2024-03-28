import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Key, useState } from "react";
import { HiOutlineClock, HiMiniPlay } from "react-icons/hi2";

export default function Tracks({ albumId }: { albumId?: string }) {
    const [rowHovered, setRowHovered] = useState<number | null>(null);

    return (
        <Table removeWrapper aria-label="Example static collection table" color="primary" selectionMode="single">
            <TableHeader>
                <TableColumn width="6%">#</TableColumn>
                <TableColumn>TITLE</TableColumn>
                <TableColumn width={1}><HiOutlineClock className="w-5 h-5" /></TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1" onMouseEnter={(e) => setRowHovered(1)} onMouseLeave={(e) => setRowHovered(null)}>
                    <TableCell className="text-default-500">1</TableCell>
                    <TableCell>
                        <p>Welcome To New York (Taylor's Version)</p>
                        <p className="text-default-500">Taylor Swift</p>
                    </TableCell>
                    <TableCell className="text-default-500">3:32</TableCell>
                </TableRow>
                <TableRow key="2" onMouseEnter={(e) => setRowHovered(2)} onMouseLeave={(e) => setRowHovered(null)}>
                    <TableCell className="text-default-500">2</TableCell>
                    <TableCell>
                        <p>Blank Space (Taylor's Version)</p>
                        <p className="text-default-500">Taylor Swift</p>
                    </TableCell>
                    <TableCell className="text-default-500">3:32</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}