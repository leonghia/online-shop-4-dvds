import {Card, CardHeader, CardBody, CardFooter, Chip, Divider, cn} from "@nextui-org/react";
import React from "react";
import { MoMo } from "../icons/brands";

export default function TransactionsCard({className}: {className?: string}) {
    return (
        <Card className={cn(className)}>
            <CardHeader className="flex justify-center">
                <h4 className="font-semibold text-foreground">Recent Transactions</h4>
            </CardHeader>
            <CardBody className="space-y-4">
                <div className="flex gap-x-4 items-center">
                    <MoMo className="w-6 h-6" />
                    <Chip variant="bordered">MOMO43364362344</Chip>
                    <p className="font-medium text-small text-primary">$78.92</p>
                    <p className="text-small text-default-500">06:28 24/03/2024</p>
                </div>
                <Divider />
                <div className="flex gap-x-4 items-center">
                    <MoMo className="w-6 h-6" />
                    <Chip variant="bordered">MOMO43364362344</Chip>
                    <p className="font-medium text-small text-primary">$78.92</p>
                    <p className="text-small text-default-500">06:28 24/03/2024</p>
                </div>
                <Divider />
                <div className="flex gap-x-4 items-center">
                    <MoMo className="w-6 h-6" />
                    <Chip variant="bordered">MOMO43364362344</Chip>
                    <p className="font-medium text-small text-primary">$78.92</p>
                    <p className="text-small text-default-500">06:28 24/03/2024</p>
                </div>
            </CardBody>
        </Card>
    );
}