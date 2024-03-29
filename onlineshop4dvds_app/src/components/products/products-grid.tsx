import { Product } from "@/models/product";
import ProductCardV1 from "./product-card-v1";

export default function ProductsGrid({products}: {products: Product[]}) {
    return (
        <div className="grid w-full grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map(p => <ProductCardV1 key={p.id} product={p} />)}
        </div>
    );
}