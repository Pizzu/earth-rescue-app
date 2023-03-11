import { Tree } from 'src/API';
import LoadingProductCard from '../loading/LoadingProductCard';

export interface ICardList {
  loading: boolean;
  list: Tree[] | undefined;
  render: (product: Tree) => React.ReactNode;
}

const CardList: React.FC<ICardList> = ({ loading, list, render }) => {
  const loadingCards = [1, 2, 3, 4];
  return (
    <>
      {loading ? (
        <>{loadingCards && loadingCards.length > 0 ? loadingCards.map((el) => <LoadingProductCard key={el} />) : null}</>
      ) : (
        <>{list && list.length > 0 ? list.map((product) => render(product)) : null}</>
      )}
    </>
  );
};

export default CardList;
