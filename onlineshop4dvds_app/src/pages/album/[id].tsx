import AlbumViewInfo from '@/components/albums/album-view-info';
import PageLayout from '@/components/layouts/page-layout';
import { useRouter } from 'next/router'
 
export default function AlbumPage() {
  const router = useRouter();
  return (
    <PageLayout>
        <div className="flex items-center justify-center p-4">
            <AlbumViewInfo id={Number(router.query.id)} />
        </div>
    </PageLayout>
  );
}