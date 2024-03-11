import Hero from "@/components/hero";
import AlbumListGrid from "@/components/albums/album-list-grid";
import ScrollingBanner from "@/components/scrolling-banner";
import { useEffect, useState } from "react";
import { Album } from "@/models/album";
import { API_URL } from "@/config";
import MoviesListWithRating from "@/components/movies/movies-list-with-ratings";
import { Movie } from "@/models/movie";
import { Game } from "@/models/game";
import GamesList from "@/components/games/games-list";
import HomeLayout from "@/components/layouts/home-layout";

export default function Home() {
  const [albums, setAlbums] = useState<Album[] | null>(null);
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [games, setGames] = useState<Game[] | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/albums`)
      .then(res => res.json())
      .then((data: Album[]) => setAlbums(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/movies`)
      .then(res => res.json())
      .then((data: Movie[]) => setMovies(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/games`)
      .then(res => res.json())
      .then((data: Game[]) => setGames(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <HomeLayout>
      <div className="flex items-center justify-center p-4">
        <ScrollingBanner />
      </div>
      <div className="flex items-center justify-center p-4">
        <AlbumListGrid albums={albums} />
      </div>
      <div className="flex items-center justify-center p-4">
        <MoviesListWithRating movies={movies} />
      </div>
      <div className="flex items-center justify-center p-4">
        <GamesList games={games} />
      </div>
    </HomeLayout>
  );
}
