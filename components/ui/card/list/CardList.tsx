import { Tree } from 'src/API';

export interface ICardList {
  list: Tree[] | undefined;
  render: (product: Tree) => React.ReactNode;
}

const CardList: React.FC<ICardList> = ({ list, render }) => {
  return <>{list && list.length > 0 ? list.map((product) => render(product)) : null}</>;
};

export default CardList;
