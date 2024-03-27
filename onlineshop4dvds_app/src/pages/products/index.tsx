import PageLayout from "@/components/layouts/page-layout";
import ProductCardVer2 from "@/components/products/product-card-v2";
import ProductsFilters from "@/components/products/products-filters";
import { Product } from "@/models/product";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { useState } from "react";

export default function Page() {
    const [products, setProducts] = useState<Product[]>([]);


    return (
        <PageLayout>
            <div className="max-w-6xl h-full w-full px-2 lg:px-24 space-y-5">
                <Breadcrumbs>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Products</BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex gap-x-6">
                    <div className="w-full flex-1 flex-col">
                        <ProductsFilters onApply={(data: Product[]) => setProducts(data)} total={products.length} />
                        <main className="mt-4 h-full w-full overflow-visible px-1">
                            <div className="block rounded-medium border-medium border-dashed border-divider">
                                <div className="grid w-full gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                                    {products.map(p => <ProductCardVer2 key={p.id} product={p} />)}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}