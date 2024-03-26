import PageLayout from "@/components/layouts/page-layout";
import ProductsFilters from "@/components/products/products-filters";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";

export default function Page() {
    return (
        <PageLayout>
            <div className="max-w-6xl h-full w-full px-2 lg:px-24 space-y-6">
                <Breadcrumbs>
                    <BreadcrumbItem>Home</BreadcrumbItem>
                    <BreadcrumbItem>Products</BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex gap-x-6">
                    <div className="w-full flex-1 flex-col">
                        <ProductsFilters />
                        <main className="mt-4 h-full w-full overflow-visible px-1">

                        </main>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}