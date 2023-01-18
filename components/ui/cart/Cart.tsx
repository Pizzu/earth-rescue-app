import { CartNumber, SvgHandler } from '@components/ui';

const Cart: React.FC = () => {
  return (
    <div className="relative cursor-pointer">
      <SvgHandler width="2" height="2" icon="shoppingIcon" />
      <div className="absolute left-0 bottom-0 translate-y-1 ">
        <CartNumber itemsNumber={0} />
      </div>
    </div>
  );
};

export default Cart;
