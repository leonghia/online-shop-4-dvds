import { Card, CardHeader } from "@nextui-org/react";
import React from "react";
import { HiOutlineCircleStack, HiOutlineDocumentText, HiOutlineUsers } from "react-icons/hi2";

export default function QuickActions() {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-xl font-semibold text-foreground">Quick Actions</h3>
            <div className="flex gap-x-4">
                <Card className="w-full max-w-80 cursor-pointer hover:bg-content2">
                    <CardHeader className="flex gap-3">
                        <div className="item-center flex rounded-medium border p-2 bg-default-50 border-default-100">
                            <HiOutlineCircleStack className="text-default-500 w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-medium">Add new product</p>
                            <p className="text-small text-default-400">Add new products to your store include their detailed information.</p>
                        </div>
                    </CardHeader>
                </Card>
                <Card className="w-full max-w-80 cursor-pointer hover:bg-content2">
                    <CardHeader className="flex gap-3">
                        <div className="item-center flex rounded-medium border p-2 bg-default-50 border-default-100">
                            <HiOutlineDocumentText className="text-default-500 w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-medium">Manage orders</p>
                            <p className="text-small text-default-400">View all orders in your store and update their status.</p>
                        </div>
                    </CardHeader>
                </Card>
                <Card className="w-full max-w-80 cursor-pointer hover:bg-content2">
                    <CardHeader className="flex gap-3">
                        <div className="item-center flex rounded-medium border p-2 bg-default-50 border-default-100">
                            <HiOutlineUsers className="text-default-500 w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-medium">View customers</p>
                            <p className="text-small text-default-400">View customers related information in your website.</p>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </section>
    );
}