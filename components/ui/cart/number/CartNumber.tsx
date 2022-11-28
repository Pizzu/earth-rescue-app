import { SingleText } from '@components/typography';
import { Box } from '@components/ui';

export interface ICartNumber {
  itemsNumber: number;
}

const CartNumber: React.FC<ICartNumber> = ({ itemsNumber = 0 }) => {
  const size = itemsNumber >= 100 ? 'w-5 h-5' : 'w-4 h-4';

  return (
    <Box className={`flex justify-center items-center ${size} bg-primaryGreen rounded-full`}>
      <SingleText className="text-neutral-100 leading-none" type="text-50" weight="font-medium">
        {itemsNumber}
      </SingleText>
    </Box>
  );
};

export default CartNumber;
