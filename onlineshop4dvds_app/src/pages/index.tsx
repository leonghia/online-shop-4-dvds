import ScrollingBanner from "@/components/scrolling-banner";
import HomeLayout from "@/components/layouts/home-layout";
import ProductsGrid from "@/components/products/products-grid";
import { API_URL } from "@/config";
import { GenreType } from "@/utils/genre";
import { Product } from "@/models/product";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { AcceptHeaders } from "@/utils/header";

export const getStaticProps = (async () => {
  // Fetch data from external API
  const resForAlbums = await fetch(`${API_URL}/product?type=${GenreType.Music}`, {
    headers: {"Accept": AcceptHeaders.ProductWithDescription}
  });
  const albums: Product[] = await resForAlbums.json();

  const resForMovies = await fetch(`${API_URL}/product?type=${GenreType.Movie}`, {
    headers: {"Accept": AcceptHeaders.ProductWithDescription}
  });
  const movies: Product[] = await resForMovies.json();

  const resForGames = await fetch(`${API_URL}/product?type=${GenreType.Game}`, {
    headers: {"Accept": AcceptHeaders.ProductWithDescription}
  });
  const games: Product[] = await resForGames.json();

  // Pass data to the page via props
  return {props: {
    albums,
    movies,
    games,
  }};
}) satisfies GetStaticProps<{albums: Product[], movies: Product[], games: Product[]}>;

export default function HomePage({albums, movies, games}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <HomeLayout>
      {/* <div className="flex items-center justify-center p-4">
        <ScrollingBanner />
      </div> */}
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
