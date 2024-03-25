import { Modal, ModalContent, ModalHeader, ModalBody, Button, Kbd, useDisclosure, Input, Image } from "@nextui-org/react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaFolderOpen } from "react-icons/fa6";

export default function SearchModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    
    return (
        <>
            <Button onPress={onOpen} startContent={<HiMagnifyingGlass className="w-5 h-5" />} variant="flat" className="text-default-500" endContent={<Kbd keys={["ctrl"]}>K</Kbd>}>Quick search...</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton classNames={{body: "max-h-[32rem] overflow-auto"}}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <Input autoFocus type="text" placeholder="Search for albums, movies, games, etc" labelPlacement="outside" startContent={<HiMagnifyingGlass className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />} />
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col justify-center items-center p-20">
                                    <FaFolderOpen className="w-20 h-20 text-default-200" />
                                    <p className="font-medium text-default-400">No results</p>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}