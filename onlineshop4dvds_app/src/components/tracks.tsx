import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { HiOutlineClock } from "react-icons/hi2";

export default function Tracks({ albumId }: { albumId?: string }) {
    return (
        <Table removeWrapper aria-label="Example static collection table" selectionMode="single" color="primary">
            <TableHeader>
                <TableColumn width={1}>#</TableColumn>
                <TableColumn>TITLE</TableColumn>
                <TableColumn width={1}><HiOutlineClock className="w-5 h-5" /></TableColumn>
            </TableHeader>
            <TableBody>
                <TableRow key="1">
                    <TableCell className="text-default-500">1</TableCell>
                    <TableCell>
                        <p>Welcome To New York (Taylor's Version)</p>
                        <p className="text-default-500">Taylor Swift</p>
                    </TableCell>
                    <TableCell className="text-default-500">3:32</TableCell>
                </TableRow>
                <TableRow key="2">
                    <TableCell className="text-default-500">2</TableCell>
                    <TableCell>
                        <p>Blank Space (Taylor's Version)</p>
                        <p className="text-default-500">Taylor Swift</p>
                    </TableCell>
                    <TableCell className="text-default-500">3:32</TableCell>
                </TableRow>
                <TableRow key="3">
                    <TableCell className="text-default-500">3</TableCell>
                    <TableCell>
                        <p>Style (Taylor's Version)</p>
                        <p className="text-default-500">Taylor Swift</p>
                    </TableCell>
                    <TableCell className="text-default-500">3:32</TableCell>
                </TableRow>
                <TableRow key="4">
                    <TableCell className="text-default-500">4</TableCell>
                    <TableCell>
                        <p>Out Of The Woods (Taylor's Version)</p>
                        <p className="text-default-500">Taylor Swift</p>
                    </TableCell>
                    <TableCell className="text-default-500">3:32</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
}