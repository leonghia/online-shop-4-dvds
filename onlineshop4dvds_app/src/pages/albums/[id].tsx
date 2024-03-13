import AlbumViewInfo from '@/components/albums/album-view-info';
import PageLayout from '@/components/layouts/page-layout';
import { API_URL } from '@/config';
import { Album } from '@/models/album';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
 
export default function AlbumPage() {
  const router = useRouter();
  const [album, setAlbum] = useState<Album | null>(null);

  useEffect(() => {
    if (!router.query.id) return;
    fetch(`${API_URL}/albums/${router.query.id}`)
      .then(res => res.json())
      .then((data: Album) => setAlbum(data))
      .catch(err => console.error(err));
  }, [router.query.id]);

  return (
    <PageLayout>
        <div className="flex items-center justify-center p-4">
            <AlbumViewInfo album={album}  />
        </div>
    </PageLayout>
  );
}