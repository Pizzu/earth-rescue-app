import { Box, CartNumber, SvgHandler } from '@components/ui';

const Cart: React.FC = () => {
  return (
    <Box className="relative cursor-pointer">
      <SvgHandler width="2" height="2" icon="shoppingIcon" />
      <Box className="absolute left-0 bottom-0 translate-y-1 ">
        <CartNumber itemsNumber={0} />
      </Box>
    </Box>
  );
};

export default Cart;
