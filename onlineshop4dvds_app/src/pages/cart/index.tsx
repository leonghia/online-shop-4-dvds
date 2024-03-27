import PageLayout from "@/components/layouts/page-layout";
import ShoppingCart from "@/components/carts/shopping-cart";

export default function CartPage() {

    return (
        <PageLayout>
            <section className="flex max-w-3xl w-full h-full gap-8 justify-center">
                <ShoppingCart />
            </section>
        </PageLayout>
    );
}