import ScrollingBanner from "@/components/scrolling-banner";
import HomeLayout from "@/components/layouts/home-layout";
import ProductsGrid from "@/components/product/products-grid";
import { API_URL } from "@/config";
import { GenreType } from "@/utils/genre-type";
import { Product } from "@/models/product";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps = (async () => {
  // Fetch data from external API
  const resForAlbums = await fetch(`${API_URL}/product?genreType=${GenreType.Music}`);
  const albums: Product[] = await resForAlbums.json();

  const resForMovies = await fetch(`${API_URL}/product?genreType=${GenreType.Movie}`);
  const movies: Product[] = await resForMovies.json();

  const resForGames = await fetch(`${API_URL}/product?genreType=${GenreType.Game}`);
  const games: Product[] = await resForGames.json();

  // Pass data to the page via props
  return {props: {
    albums,
    movies,
    games,
  }};
}) satisfies GetServerSideProps<{albums: Product[], movies: Product[], games: Product[]}>;

export default function HomePage({albums, movies, games}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <HomeLayout>
      <div className="flex items-center justify-center p-4">
        <ScrollingBanner />
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
          <ProductsGrid products={albums} />
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
          <ProductsGrid products={movies} />
        </div>
      </div>
      <div className="flex items-center justify-center p-4">
        <div className="my-auto flex w-full max-w-7xl flex-col items-start gap-2">
          <ProductsGrid products={games} />
        </div>
      </div>
    </HomeLayout>
  );
}
