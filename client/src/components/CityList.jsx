import './CityList.scss';
import CityListItem from '../components/CityListItem';

function CityList(props) {
  const cityArr = props.cities;
  console.log('whats this', cityArr);
  const CityItem = cityArr.map((city) => {
  return <CityListItem
    key={city.id} 
    name={city.name}
    img={city.img_link}
    safety_rating={city.safety_rating}
    toggle={() => props.toggle()}
    />
  });
  return(
    <section className='city-list'>
    <h1 className="question">Where In The World Do You Want To Live Today?</h1> 
    <div>Search/Filter by Region: <a href="#">Asia</a>, <a href="#">North America</a>, <a href="#">South America</a>, <a href="#">Europe</a>, <a href="#">Africa/Middle East</a>, <a href="#">Australia/Zealandia</a></div>
    <ul>{CityItem}</ul>
    <a className="load" href="">Load More....</a>
    </section> 
  )
}

export default CityList;