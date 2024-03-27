import { Modal, ModalContent, ModalHeader, ModalBody, Button, Kbd, useDisclosure, Input, Image, Divider, cn } from "@nextui-org/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaFolderOpen } from "react-icons/fa6";
import { ReactElement, useState } from "react";
import StarRatings from "./star-ratings";
import { Product } from "@/models/product";
import useDebounce from "@/hooks/use-debounce";
import { API_URL } from "@/config";
import Link from "next/link";

const EmptyState = (): ReactElement => {
    return (
        <div className="flex flex-col justify-center items-center p-20">
            <FaFolderOpen className="w-20 h-20 text-default-200" />
            <p className="font-medium text-default-400">No results</p>
        </div>
    );
}

const Item = ({product, className}: {product: Product, className?: string}): ReactElement => {
    return (
        <div className={cn("flex justify-between items-center", className)}>
            <div className="flex gap-x-2 items-center">
                <Image className="w-24 h-24 object-contain" removeWrapper src={product.thumbnailUrl} alt={product.title} />
                <div className="space-y-1">
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-small text-default-500">{product.type}</p>
                    <div className="flex gap-x-1"><StarRatings ratings={product.ratings} /></div>
                </div>
            </div>
            <div><p className="font-medium text-pink-500">${product.price}</p></div>
        </div>
    );
}

export default function SearchModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [query, setQuery] = useState<string>("");
    const [products, setProducts] = useState<Product[]>([]);

    useDebounce(() => {
        if (query === "") {
            setProducts([]);
            return;
        }
        fetch(`${API_URL}/product?q=${query}`)
            .then(res => res.json())
            .then((data: Product[]) => {
                setProducts(data);
            })
            .catch(err => console.error(err));
    }, [query], 500);

    return (
        <>
            <Button onPress={onOpen} startContent={<HiMagnifyingGlass className="w-5 h-5" />} variant="flat" className="text-default-500" endContent={<Kbd keys={["ctrl"]}>K</Kbd>}>Quick search...</Button>
            <Modal isOpen={isOpen} size="lg" onOpenChange={onOpenChange} onClose={() => setQuery("")} hideCloseButton classNames={{ body: "max-h-[32rem] min-h-80 overflow-auto" }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <Input autoFocus type="text" placeholder="Search for albums, movies, games, etc" labelPlacement="outside" startContent={<HiMagnifyingGlass className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} onValueChange={(value: string) => setQuery(value)} value={query} />
                            </ModalHeader>
                            <ModalBody>
                                {products.length ? (products.map(p => <Link href={`/product/${p.id}`} key={p.id}><Item product={p} /></Link>)) : <EmptyState />}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}