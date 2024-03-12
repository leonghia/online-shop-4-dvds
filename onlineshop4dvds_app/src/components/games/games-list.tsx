import { Link } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import GradientHeading from "../gradient-heading";
import GameCard from "./game-card";
import { Game } from "@/models/game";

export default function MoviesListWithRating({games}: {games: Game[] | null}) {
    return (
        <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
            <div className="flex w-full items-baseline justify-between px-4">
                <GradientHeading title="Games" />
                <Link
                    isExternal
                    showAnchorIcon
                    href="/games"
                    anchorIcon={<FaArrowRightLong />}
                    className="gap-x-2 font-semibold"
                    color="primary"
                >
                    See all
                </Link>
            </div>

            <div className="grid w-full grid-cols-1 gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {games?.map(game => <GameCard key={game.id} game={game} />)}     
            </div>
        </div>
    );
}