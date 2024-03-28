import { Order } from "@/models/order";
import { OrderStatus, getInfo } from "@/utils/order";
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, Divider, Popover, PopoverContent, PopoverTrigger, Image } from "@nextui-org/react";
import { HiMiniQuestionMarkCircle } from "react-icons/hi2";

export default function OrderCard({order: o}: {order: Order}) {
    return (
        <Card>
            <CardHeader className="flex justify-between">
                <div className="flex gap-x-2 items-center">
                    <p className="text-default-500 font-medium text-small">Order ID</p>
                    <Chip color="primary" variant="flat">{o.orderId}</Chip>
                </div>
                <div className="flex items-center">
                    <span className="text-small text-default-500 font-medium">{OrderStatus[o.status]}</span>
                    <Popover placement="right-start" classNames={{ base: "max-w-64" }}>
                        <PopoverTrigger>
                            <Button isIconOnly variant="light"><HiMiniQuestionMarkCircle className="h-5 w-5 text-default-500" /></Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2">
                                <div className="text-tiny">{getInfo(o.status)}</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </div>
            </CardHeader>
            <Divider className="border-dashed" />
            <CardBody>
                {o.items.map(i => (
                    <div key={i.productId} className="flex justify-between">
                        <div className="flex gap-x-2">
                            <Image src={i.thumbnailUrl} removeWrapper classNames={{ img: "w-20 h-20 object-contain" }} alt={i.title} />
                            <div className="space-y-1">
                                <h4 className="text-medium font-semibold">
                                    {i.title}
                                </h4>
                                <p className="text-small"><span className="text-default-500">Type: </span><span className="text-foreground">{i.type}</span></p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2"><span className="text-small font-semibold text-default-700">${i.price}</span><span className="text-small text-default-500">x {i.quantity}</span></div>
                    </div>
                ))}
            </CardBody>
            
            <CardFooter className="flex justify-end">
                <div className="flex gap-x-3 items-center">
                    <dt className="text-small font-semibold text-default-500">Total:</dt><dd className="text-lg font-semibold text-pink-500">${(o.subtotal + o.shippingFee - o.discount).toFixed(2)}</dd>
                </div>
            </CardFooter>
        </Card>
    );
}