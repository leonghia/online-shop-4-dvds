import PageLayout from "@/components/layouts/page-layout";
import { Tabs, Tab, Card, CardBody, CardHeader, CardFooter, Divider, Link, Image, Chip } from "@nextui-org/react";
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
    }, [user]);

    return (
        <PageLayout>
            <div className="flex items-center justify-center p-10">
                <div className="max-w-3xl h-full w-full px-2 space-y-6">
                    <h1 className="text-2xl font-extrabold">Orders History</h1>
                    <div className="flex w-full flex-col">
                        <Tabs aria-label="Options" classNames={{ tabList: "w-full", panel: "px-0" }}>
                            <Tab key="all" title="All Orders">
                                <div className="space-y-4">
                                    {orders?.map(o => (
                                        <Card>
                                            <CardHeader className="flex justify-between">
                                                <div className="flex gap-x-2 items-center">
                                                    <p className="text-default-500 font-medium text-small">Order ID</p>
                                                    <Chip color="primary" variant="flat">{o.orderId}</Chip>
                                                </div>
                                                <p className="text-small text-default-500 font-medium">{o.status}</p>
                                            </CardHeader>
                                            <Divider />
                                            <CardBody className="space-y-4">
                                                {o.items.map(i => (
                                                    <div className="flex justify-between">
                                                        <div className="flex gap-x-2">
                                                            <Image src={i.thumbnailUrl} removeWrapper classNames={{ img: "w-20 h-20 object-contain" }} alt={i.title} />
                                                            <div>
                                                                <h4 className="text-medium font-semibold">
                                                                    {i.title}
                                                                </h4>
                                                                <p className="text-small text-default-500">x {i.quantity}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </CardBody>
                                        </Card>
                                    ))}
                                </div>
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