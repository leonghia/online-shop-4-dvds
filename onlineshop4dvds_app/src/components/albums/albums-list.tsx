import { Link } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import AlbumCard from "./album-card";
import { Album } from "@/models/album";
import GradientHeading from "../gradient-heading";
import FilterGenres from "../filter-genres";
import { useEffect, useState } from "react";
import { Genre } from "@/models/genre";
import { API_URL } from "@/config";

export default function AlbumsList() {
    const [albums, setAlbums] = useState<Album[] | null>(null);
    const [genres, setGenres] = useState<Genre[] | null>(null);

    useEffect(() => {
        fetch(`${API_URL}/categories?type=0`)
            .then(res => res.json())
            .then((data: Genre[]) => setGenres(data))
            .catch(err => console.error(err));
    })

    useEffect(() => {
        fetch(`${API_URL}/albums`)
          .then(res => res.json())
          .then((data: Album[]) => setAlbums(data))
          .catch(err => console.error(err));
      }, []);

    return (
        <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
            <div className="flex w-full justify-between px-4 items-center">
                <GradientHeading title="Albums" />
                <div className="lg:max-w-3xl">
                    <FilterGenres genres={genres} />
                </div>
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