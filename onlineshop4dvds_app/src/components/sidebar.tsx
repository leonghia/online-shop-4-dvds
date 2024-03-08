import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button";
import { Shapes, User, Disc3, Music2, Film, Gamepad2, Users, Factory, Mail, FileText, BarChart, Newspaper, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ className }: { className: string }) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-md font-bold tracking-tight">
            Quản lý
          </h2>
          <div className="space-y-1">
            <Link href="/dashboard/categories">
              <Button variant={pathname === "/dashboard/categories" ? "secondary" : "ghost"} className="w-full justify-start">
                <Shapes className="w-4 h-4 mr-2" />
                Thể loại
              </Button>
            </Link>
            <Link href="/dashboard/artists">
              <Button variant={pathname === "/dashboard/artists" ? "secondary" : "ghost"} className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                Nghệ sĩ
              </Button>
            </Link>
            <Button variant="ghost" className="w-full justify-start">
              <Disc3 className="w-4 h-4 mr-2" />
              Album
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Music2 className="w-4 h-4 mr-2" />
              Bài hát
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Film className="w-4 h-4 mr-2" />
              Phim ảnh
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Gamepad2 className="w-4 h-4 mr-2" />
              Trò chơi
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Users className="w-4 h-4 mr-2" />
              Người dùng
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Mail className="w-4 h-4 mr-2" />
              Thư góp ý
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Factory className="w-4 h-4 mr-2" />
              Nhà cung cấp
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="w-4 h-4 mr-2" />
              Đơn hàng
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <BarChart className="w-4 h-4 mr-2" />
              Báo cáo
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Newspaper className="w-4 h-4 mr-2" />
              Tin tức
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Star className="w-4 h-4 mr-2" />
              Reviews
            </Button>
          </div>
        </div>
        
      </div>
    </div>
  )
}