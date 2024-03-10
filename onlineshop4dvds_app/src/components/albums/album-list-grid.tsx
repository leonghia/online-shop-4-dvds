import { Link } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import AlbumCard from "./album-card";
import { Album } from "@/models/album";

export default function AlbumListGrid({albums}: {albums: Album[] | null}) {

    return (
        <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
            <div className="flex w-full items-baseline justify-between px-4">
                <h2 className="text-4xl font-bold tracking-tight from-[#FF72E1] to-[#F54C7A] bg-clip-text text-transparent bg-gradient-to-b">Albums</h2>
                <Link
                    isExternal
                    showAnchorIcon
                    href="/albums"
                    anchorIcon={<FaArrowRightLong />}
                    className="gap-x-2 font-semibold"

                >
                    See all
                </Link>
            </div>

            <div className="grid w-full grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {albums?.map(album => <AlbumCard key={album.id} album={album} />)}
            </div>
        </div>

    );
}