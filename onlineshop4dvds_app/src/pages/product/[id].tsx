import PageLayout from '@/components/layouts/page-layout';
import ProductInfo from '@/components/product/product-info';
import { API_URL } from '@/config';
import { ProductDetail } from '@/models/product-detail';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';

export const getServerSideProps = (async (context: GetServerSidePropsContext) => {
  const { id } = context.query;
  // Fetch data from external API
  try {
    const res = await fetch(`${API_URL}/product/${id}`);
    const productDetail: ProductDetail = await res.json();

    // Pass data to the page via props
    return { props: { productDetail: productDetail } }
  } catch (err) {
    console.error(err);
  }
});

export default function ProductPage({ productDetail }: InferGetServerSidePropsType<typeof getServerSideProps>) {

  return (
    <PageLayout>
      <div className="flex items-center justify-center p-4">
        <div className="max-w-5xl h-full w-full px-2">
          <Breadcrumbs className="my-4 py-2">
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/movies">Products</BreadcrumbItem>
            <BreadcrumbItem href="#">{productDetail.title}</BreadcrumbItem>
          </Breadcrumbs>
          <ProductInfo productDetail={productDetail} />
        </div>
      </div>
    </PageLayout>
  );
}