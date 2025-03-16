import { Main } from '../../pages/main-page/Main';

type TAppProps = {
  cardsCount: number;
}

const App = ({cardsCount}: TAppProps) => (
  <Main cardsCount={cardsCount} />
);

export {App};
