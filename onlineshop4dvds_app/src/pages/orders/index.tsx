import PageLayout from "@/components/layouts/page-layout";
import { Tabs, Tab } from "@nextui-org/react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { ReactElement, useEffect, useState } from "react";
import { API_URL } from "@/config";
import { Order } from "@/models/order";
import OrderCard from "@/components/orders/order-card";
import { OrderStatus } from "@/utils/order";
import { HiDocumentText } from "react-icons/hi2";

const EmptyList = (): ReactElement => {
    return (
        <div className="w-full h-64 flex justify-center items-center">
            <div className="flex flex-col items-center gap-2">
                <HiDocumentText className="w-10 h-10 text-default-400" />
                <p className="font-medium text-default-500">No orders</p>
            </div>
        </div>
    );
}

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
                                        <OrderCard key={o.id} order={o} />
                                    ))}
                                </div>
                            </Tab>
                            <Tab key="awaiting" title="Awaiting Payment">
                                <div className="space-y-4">
                                    {orders?.filter(o => o.status === OrderStatus.AwaitingPayment).length ? orders?.filter(o => o.status === OrderStatus.AwaitingPayment).map(o => <OrderCard key={o.id} order={o} />) : <EmptyList />}
                                </div>
                            </Tab>
                            <Tab key="processing" title="Processing">
                                <div className="space-y-4">
                                    {orders?.filter(o => o.status === OrderStatus.Processing).length ? orders?.filter(o => o.status === OrderStatus.Processing).map(o => <OrderCard key={o.id} order={o} />) : <EmptyList />}
                                </div>
                            </Tab>
                            <Tab key="shipping" title="Shipping">
                                <div className="space-y-4">
                                    {orders?.filter(o => o.status === OrderStatus.Shipped).length ? orders?.filter(o => o.status === OrderStatus.Shipped).map(o => <OrderCard key={o.id} order={o} />) : <EmptyList />}
                                </div>
                            </Tab>
                            <Tab key="delivered" title="Delivered">
                                <div className="space-y-4">
                                    {orders?.filter(o => o.status === OrderStatus.Delivered).length ? orders?.filter(o => o.status === OrderStatus.Delivered).map(o => <OrderCard key={o.id} order={o} />) : <EmptyList />}
                                </div>
                            </Tab>
                            <Tab key="cancelled" title="Cancelled">
                                <div className="space-y-4">
                                    {orders?.filter(o => o.status === OrderStatus.Cancelled).length ? orders?.filter(o => o.status === OrderStatus.Cancelled).map(o => <OrderCard key={o.id} order={o} />) : <EmptyList />}
                                </div>
                            </Tab>
                            <Tab key="refunded" title="Refunded">
                                <div className="space-y-4">
                                    {orders?.filter(o => o.status === OrderStatus.Refunded).length ? orders?.filter(o => o.status === OrderStatus.Refunded).map(o => <OrderCard key={o.id} order={o} />) : <EmptyList />}
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}