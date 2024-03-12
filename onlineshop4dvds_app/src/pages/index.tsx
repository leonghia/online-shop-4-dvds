import AlbumsList from "@/components/albums/albums-list";
import ScrollingBanner from "@/components/scrolling-banner";
import { useEffect, useState } from "react";
import { API_URL } from "@/config";
import MoviesList from "@/components/movies/movies-list";
import { Movie } from "@/models/movie";
import { Game } from "@/models/game";
import GamesList from "@/components/games/games-list";
import HomeLayout from "@/components/layouts/home-layout";

export default function Home() {
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [games, setGames] = useState<Game[] | null>(null);

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
        <AlbumsList />
      </div>
      <div className="flex items-center justify-center p-4">
        <MoviesList movies={movies} />
      </div>
      <div className="flex items-center justify-center p-4">
        <GamesList games={games} />
      </div>
    </HomeLayout>
  );
}
