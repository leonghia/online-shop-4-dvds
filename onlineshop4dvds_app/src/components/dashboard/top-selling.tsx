import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, cn } from "@nextui-org/react";

export default function TopSelling({ className }: { className?: string }) {
    return (
        <section className={cn("flex flex-col gap-5", className)}>
            <h3 className="text-xl font-semibold text-foreground">Top Selling</h3>
            <Table aria-label="Example static collection table" classNames={{ base: "grow", wrapper: "h-full" }}>
                <TableHeader>
                    <TableColumn>TITLE</TableColumn>
                    <TableColumn>SALES QUANTITY</TableColumn>
                    <TableColumn>REVENUE GENERATED</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>Tony Reichert</TableCell>
                        <TableCell>CEO</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>Zoey Lang</TableCell>
                        <TableCell>Technical Lead</TableCell>
                        <TableCell>Paused</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>Jane Fisher</TableCell>
                        <TableCell>Senior Developer</TableCell>
                        <TableCell>Active</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell>William Howard</TableCell>
                        <TableCell>Community Manager</TableCell>
                        <TableCell>Vacation</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    );
}
