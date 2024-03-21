namespace OnlineShop4DVDS.Utils;

public enum OrderStatus
{
    Pending, // This status indicates that the order has been placed but has not yet been processed by the seller.
    Processing, // The order is being processed by the seller. This might involve activities such as verifying payment, checking stock availability, and preparing items for shipment.
    Shipped, // The order has been shipped out for delivery.
    Delivered, // The order has been successfully delivered to the customer.
    Cancelled, // The order has been cancelled either by the customer or by the seller.
    Refunded, // The order has been refunded, indicating that the transaction has been reversed and the customer has been reimbursed.
    OnHold, // The order is temporarily on hold, often due to issues such as payment problems or stock availability.
    Backordered, // Some items in the order are currently out of stock, and the order is awaiting restocking before it can be fulfilled.
    PartiallyShipped, // Part of the order has been shipped, but there are remaining items that have not yet been sent out.
    AwaitingPayment, // The order has been placed, but payment has not yet been received or verified.
}