import Hero from "@/components/hero";
import UserLayout from "@/components/layouts/user-layout";
import AlbumListGrid from "@/components/albums/album-list-grid";
import ScrollingBanner from "@/components/scrolling-banner";
import { useEffect, useState } from "react";
import { Album } from "@/models/album";
import { API_URL } from "@/config";
import MovieListWithRating from "@/components/movies/movie-list-with-ratings";

export default function Home() {
  const [albums, setAlbums] = useState<Album[] | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/albums`)
      .then(res => res.json())
      .then((data: Album[]) => setAlbums(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <UserLayout>
      <div className="flex items-center justify-center p-4">
        <Hero />
      </div>
      <div className="flex items-center justify-center p-4">
        <ScrollingBanner />
      </div>
      <div className="flex items-center justify-center p-4">
        <AlbumListGrid albums={albums} />
      </div>
      <div className="flex items-center justify-center p-4">
        <MovieListWithRating movies={null} />
      </div>
    </UserLayout>
  );
}
