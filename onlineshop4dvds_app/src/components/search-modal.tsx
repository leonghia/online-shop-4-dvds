import { Modal, ModalContent, ModalHeader, ModalBody, Button, Kbd, useDisclosure, Input, Image, Divider } from "@nextui-org/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaFolderOpen } from "react-icons/fa6";
import { ReactElement } from "react";
import StarRatings from "./star-ratings";
import { Product } from "@/models/product";

const EmptyState = (): ReactElement => {
    return (
        <div className="flex flex-col justify-center items-center p-20">
            <FaFolderOpen className="w-20 h-20 text-default-200" />
            <p className="font-medium text-default-400">No results</p>
        </div>
    );
}

const item = (product: Product): ReactElement => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-x-2 items-center">
                <Image className="w-24 h-24 object-contain" removeWrapper src={product.thumbnailUrl} alt={product.title} />
                <div className="space-y-1">
                    <p className="font-semibold">{product.title}</p>
                    <p className="text-small text-default-500"></p>
                    <div className="flex gap-x-1"><StarRatings ratings={product.ratings} /></div>
                </div>
            </div>
            <div><p className="font-medium text-pink-500">${product.price}</p></div>
        </div>
    );
}

export default function SearchModal() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} startContent={<HiMagnifyingGlass className="w-5 h-5" />} variant="flat" className="text-default-500" endContent={<Kbd keys={["ctrl"]}>K</Kbd>}>Quick search...</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton classNames={{ body: "max-h-[32rem] min-h-80 overflow-auto" }}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <Input autoFocus type="text" placeholder="Search for albums, movies, games, etc" labelPlacement="outside" startContent={<HiMagnifyingGlass className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} />
                            </ModalHeader>
                            <ModalBody>

                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}