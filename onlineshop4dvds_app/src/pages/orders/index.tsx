import PageLayout from "@/components/layouts/page-layout";
import { Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";
import { API_URL } from "@/config";
import { Order } from "@/models/order";

export default function Page() {
    const { user, error, isLoading } = useUser();
    const [orders, setOrders] = useState<Order[] | null>(null);

    useEffect(() => {
        if (!user) return;
        fetch(`${API_URL}/order?sub=${user.sub}`)
            .then(res => res.json())
            .then((orders: Order[]) => setOrders(orders))
            .catch(err => console.error(err));  
    }, []);

    return (
        <PageLayout>
            <div className="flex items-center justify-center p-10">
                <div className="max-w-3xl h-full w-full px-2 space-y-6">
                    <h1 className="text-2xl font-extrabold">Orders History</h1>
                    <div className="flex w-full flex-col">
                        <Tabs aria-label="Options">
                            <Tab key="all" title="All Orders">
                                <Card>
                                    <CardBody>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="awaiting" title="Awaiting Payment">
                                <Card>
                                    <CardBody>
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="processing" title="Processing">
                                <Card>
                                    <CardBody>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="shipping" title="Shipping">
                                <Card>
                                    <CardBody>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="delivered" title="Delivered">
                                <Card>
                                    <CardBody>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="cancelled" title="Cancelled">
                                <Card>
                                    <CardBody>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab key="refunded" title="Refunded">
                                <Card>
                                    <CardBody>
                                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}