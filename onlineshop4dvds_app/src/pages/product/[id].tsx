import PageLayout from '@/components/layouts/page-layout';
import ProductInfo from '@/components/products/product-info';
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
      <div className="max-w-5xl h-full w-full px-2 space-y-10">
        <div className='space-y-4'>
          <Breadcrumbs className="py-2">
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/movies">Products</BreadcrumbItem>
            <BreadcrumbItem href="#">{productDetail.title}</BreadcrumbItem>
          </Breadcrumbs>
          <ProductInfo productDetail={productDetail} />
        </div>
        <div className='text-medium text-foreground space-y-6'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam varius magna ac erat porttitor, nec interdum erat euismod. Vivamus viverra nulla magna, nec malesuada nunc aliquet et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer vitae ipsum sodales, posuere dui sit amet, imperdiet tortor. Donec libero diam, feugiat fringilla vestibulum quis, dapibus non libero. Duis id ante eget erat pharetra pulvinar. Integer consectetur efficitur ante sit amet molestie. In consequat volutpat odio id porta. Donec imperdiet condimentum urna interdum finibus. Quisque arcu purus, accumsan eu sollicitudin sit amet, lobortis ut turpis.</p>
          <p>Aliquam erat volutpat. Etiam ultrices vel dolor at finibus. Curabitur quis sapien eu lacus consequat consequat. Aenean accumsan justo metus, sed sollicitudin eros viverra in. Maecenas nisi justo, sagittis at mi in, bibendum molestie arcu. In vulputate leo in leo volutpat feugiat. Cras eu arcu finibus, tincidunt lectus id, mattis metus. Aenean vitae cursus velit. Etiam pharetra vitae dolor vel rutrum. Phasellus ultrices est dolor, non efficitur elit aliquam sed. Vestibulum molestie vitae dui sed efficitur.</p>
          <p>Nam tristique euismod tortor, a molestie enim porttitor vitae. Vivamus erat est, condimentum vitae mauris et, cursus hendrerit lectus. Suspendisse potenti. Nulla facilisi. Fusce facilisis nec eros a tincidunt. Suspendisse quis est ornare, finibus est in, molestie urna. Aliquam ullamcorper eget turpis dignissim interdum. Sed eros orci, faucibus ut nulla nec, elementum sagittis tellus. Nullam in ex consequat dolor tempor scelerisque. Proin volutpat lacus sit amet velit fermentum porttitor. Fusce elementum lacinia ex ac sagittis. Vivamus rhoncus mattis dolor, eget viverra tortor hendrerit in. Duis dignissim urna sit amet tempus scelerisque.</p>
          <p>Vestibulum tincidunt consectetur tortor vel semper. Sed scelerisque augue congue dui viverra, in porttitor ex consequat. Cras consequat nisl nunc, quis consequat erat luctus a. Aliquam maximus elit quis felis fringilla, a aliquet elit euismod. Duis lorem massa, feugiat id elit nec, convallis faucibus odio. Vivamus tincidunt ac erat elementum cursus. Sed eget ante quis lorem pellentesque accumsan sed ac enim. Integer in porttitor dolor. Pellentesque placerat ipsum lectus, eu placerat ante lacinia vel. Nunc pharetra elementum tempor.</p>
          <p>Phasellus nisi erat, ornare quis convallis nec, ultricies ut magna. Morbi malesuada finibus diam, eget rutrum lectus pretium a. In hac habitasse platea dictumst. Nam tempor, leo ac aliquet venenatis, risus metus commodo elit, quis malesuada libero mauris nec leo. Sed tempor sem ac sapien sodales, eu auctor orci mollis. Aliquam vel aliquet libero. Aenean et lacinia massa.</p>
        </div>
      </div>
    </PageLayout>
  );
}