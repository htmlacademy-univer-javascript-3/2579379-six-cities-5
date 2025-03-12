import { MainPageComponent } from '../../pages/main-page/MainPage';

type TAppProps = {
  cardsCount: number;
}

const App = ({cardsCount}: TAppProps) => (
  <MainPageComponent cardsCount={cardsCount} />
);

export {App};
