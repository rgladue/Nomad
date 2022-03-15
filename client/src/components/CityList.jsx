import './CityList.scss';
import CityListItem from '../components/CityListItem';

function CityList(props) {
  const cityArr = props.cities;
  const CityItem = cityArr.map((city) => {
   <CityListItem 
    name={city.name}
    img={city.img_link}
    safety_rating={city.safety_rating}
    />
  });
  return(
    <section className='city-list'>
    <h1 className="question">Where In The World Do You Want To Live Today?</h1> 
    <div>Search/Filter by Region: <a href="#">Asia</a>, <a href="#">North America</a>, <a href="#">South America</a>, <a href="#">Europe</a>, <a href="#">Africa/Middle East</a>, <a href="#">Australia/Zealandia</a></div>
    <ul className='listers'>{CityItem}</ul>
    </section> 
  )
}

export default CityList;