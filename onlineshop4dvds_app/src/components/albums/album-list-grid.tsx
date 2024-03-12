import { Link } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import AlbumCard from "./album-card";
import { Album } from "@/models/album";
import GradientHeading from "../gradient-heading";
import FilterTags from "../filter-tags";

export default function AlbumListGrid({albums}: {albums: Album[] | null}) {

    return (
        <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
            <div className="flex w-full justify-between px-4 items-center">
                <GradientHeading title="Albums" />
                <FilterTags />
                <Link
                    isExternal
                    showAnchorIcon
                    href="/albums"
                    anchorIcon={<FaArrowRightLong />}
                    className="gap-x-2 font-semibold"
                    color="primary"
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