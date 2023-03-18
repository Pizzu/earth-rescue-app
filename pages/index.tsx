import { SidebarLayout } from '@components/layouts';
import { TextLink } from '@components/link';
import { BodyText, HeadingText } from '@components/typography';
import { Card, CardList, ProductCard } from '@components/ui';
import { useTrees } from '@hooks/useTrees';
import { useSession } from '@providers/SessionProvider';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  const { treeList, loading } = useTrees();
  const session = useSession();

  console.log(treeList, loading);

  return (
    <>
      <section>
        <div className="grid grid-cols-12 gap-8 items-stretch">
          <div className="col-start-1 col-end-9">
            <Card background="bg-neutral-100">
              <div className="p-8 flex flex-col gap-2">
                <HeadingText elementTag="h2" type="text-headingTwo">
                  Heading card
                </HeadingText>
                <BodyText type="text-bodyDefault">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi cupiditate doloremque voluptas illum,
                  consectetur consequuntur voluptatum dolorem
                </BodyText>
              </div>
            </Card>
          </div>
          <div className="col-start-9 col-end-13">
            <Card background="bg-neutral-100">
              <div className="p-8 flex flex-col gap-2">
                <HeadingText elementTag="h2" type="text-headingTwo">
                  This is a card
                </HeadingText>
                <BodyText type="text-bodyDefault">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi cupiditate doloremque voluptas illum,
                  consectetur consequuntur voluptatum dolorem
                </BodyText>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="mt-8">
        {session?.cognitoGroup === 'Administrators' ? (
          <div className="flex justify-end mb-6">
            <TextLink href={'/admin/trees'} type={'text-300'} weight="font-bold" isUnderlined={false}>
              Add Tree
            </TextLink>
          </div>
        ) : null}
        <div className="grid grid-cols-4 gap-8 items-stretch">
          <CardList
            loading={loading}
            list={treeList}
            render={(tree) => (
              <ProductCard
                key={tree.id}
                title={tree.name}
                price={tree.price}
                priceId={tree.priceId}
                image={tree.image}
                meaning={tree.meaning}
                consume={tree.consume}
              />
            )}
          />
        </div>
      </section>
    </>
  );
};

export default Home;

Home.properties = {
  pageAuth: { isAuthRequired: true, authLevel: 'Customers' },
  getLayout: (page) => {
    return <SidebarLayout pageTitle="Dashboard">{page}</SidebarLayout>;
  },
};
