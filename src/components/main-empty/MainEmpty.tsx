import noPlaces from './../../../markup/img/no-places@2x.png';

type EmptyProps = {
  cityName: string | null;
}

export const MainEmpty = ({cityName}: EmptyProps) => (
  <>
    <section className="cities__no-places">
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No places to stay available</b>
        <p className="cities__status-description">We could not find any property available at the moment in {cityName}</p>
      </div>
    </section>
    <div className="cities__right-section" style = {{backgroundImage: noPlaces}}></div>
  </>
);
