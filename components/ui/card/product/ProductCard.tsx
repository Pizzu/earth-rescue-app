import { HeadingText, SingleText } from '@components/typography';
import { Button, Card } from '@components/ui';
import getStripe from '@lib/stripe';
import { useSession } from '@providers/SessionProvider';
import Image from 'next/image';
export interface IProductCard {
  title: string;
  price: number;
  priceId?: string | null;
  image: string;
  meaning: string;
  consume: number;
}

const ProductCard: React.FC<IProductCard> = ({ title, price, priceId, image, meaning, consume }) => {
  const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'USD' });
  const session = useSession();

  const openCheckout = async () => {
    const stripe = await getStripe();
    await stripe?.redirectToCheckout({
      clientReferenceId: session?.user?.attributes.sub,
      customerEmail: session?.user?.attributes.email,
      lineItems: [
        {
          price: priceId ? priceId : undefined,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: 'http://localhost:3000/',
      cancelUrl: 'http://localhost:3000/',
    });
  };

  return (
    <Card background="bg-neutral-200" height="h-full">
      <div className="relative w-full h-60 overflow-clip rounded-br-3xl">
        <div className="h-60"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-neutral-800 opacity-20 z-50"></div>
        <Image className="object-cover" src={image} alt="Profile image" layout="fill" priority={true} />
      </div>
      <div className="py-5 px-4">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <div>
              <HeadingText elementTag="h4" type="text-headingFour">
                {title}
              </HeadingText>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <SingleText type="text-200" weight="font-normal">
                  Meaning:
                </SingleText>
                <SingleText className="text-primaryGreen" type="text-200" weight="font-bold">
                  {meaning}
                </SingleText>
              </div>
              <div className="flex items-center gap-1">
                <SingleText type="text-200" weight="font-normal">
                  Consume:
                </SingleText>
                <SingleText className="text-primaryGreen" type="text-200" weight="font-bold">
                  -{consume}kg
                </SingleText>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-neutral-200 border-neutral-300 border-0.06 px-2 py-1 rounded-full">
              <SingleText className="text-neutral-800" type="text-400" weight="font-medium">
                {formatter.format(price)}
              </SingleText>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-between">
          <Button type="btn-small" color="secondary" linkUrl="/trees">
            Show details
          </Button>
          <Button onClick={() => openCheckout()} type="btn-small" color="primary">
            Add to cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
