import GamesCategories from "@/components/games-categories";
import AdminLayout from "@/components/layouts/admin-layout";
import MoviesCategories from "@/components/movies-categories";
import MusicCategories from "@/components/music-categories";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Categories() {
    return (
        <AdminLayout>
            <div>
                <Tabs defaultValue="music" className="w-full h-full space-y-6">
                    <TabsList>
                        <TabsTrigger value="music">Âm nhạc</TabsTrigger>
                        <TabsTrigger value="movies">Phim ảnh</TabsTrigger>
                        <TabsTrigger value="games">Trò chơi</TabsTrigger>
                    </TabsList>
                    <TabsContent value="music" className="border-none p-0 outline-none">
                        <MusicCategories />
                    </TabsContent>
                    <TabsContent value="movies" className="border-none p-0 outline-none">
                        <MoviesCategories />
                    </TabsContent>
                    <TabsContent value="games" className="border-none p-0 outline-none">
                        <GamesCategories />
                    </TabsContent>
                </Tabs>
            </div>
        </AdminLayout>
    );
}