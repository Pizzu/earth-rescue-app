import { Card } from '@components/ui';

const LoadingProductCard: React.FC = () => {
  return (
    <Card background="bg-neutral-100" height="h-full">
      <div className="animate-pulse">
        <div className="relative w-full h-60 overflow-clip rounded-br-3xl bg-neutral-400"></div>
        <div className="py-5 px-4">
          <div className="h-2 w-full bg-neutral-400 rounded-full mb-2"></div>
          <div className="flex flex-col gap-2">
            <div className="h-2 w-5/6 bg-neutral-400 rounded-full"></div>
            <div className="h-2 w-3/4 bg-neutral-400 rounded-full"></div>
            <div className="h-2 w-2/3 bg-neutral-400 rounded-full"></div>
            <div className="h-2 w-2/3 bg-neutral-400 rounded-full"></div>
            <div className="h-2 w-2/3 bg-neutral-400 rounded-full"></div>
          </div>
          <div className="mt-8 flex justify-between">
            <div className="bg-neutral-400 h-6 w-24 rounded-full"></div>
            <div className="bg-neutral-400 h-6 w-24 rounded-full"></div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default LoadingProductCard;
