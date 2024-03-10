import { Movie } from "@/models/movie";
import { Link } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import GradientHeading from "../gradient-heading";
import MovieCard from "./movie-card";

export default function MovieListWithRating({movies}: {movies: Movie[] | null}) {
    return (
        <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
            <div className="flex w-full items-baseline justify-between px-4">
                <GradientHeading title="Movies" />
                <Link
                    isExternal
                    showAnchorIcon
                    href="/albums"
                    anchorIcon={<FaArrowRightLong />}
                    className="gap-x-2 font-semibold text-green-500"
                >
                    See all
                </Link>
            </div>

            <div className="grid w-full grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {movies?.map(movie => <MovieCard key={movie.id} movie={movie} />)}     
            </div>
        </div>
    );
}