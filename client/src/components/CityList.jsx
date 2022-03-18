import './CityList.scss';
import CityListItem from '../components/CityListItem';
import Nomad from '../img/nomadtravel.jpeg';

function CityList(props) {
  const cityArr = props.cities;
  const CityItem = cityArr.map((city) => {
  return <CityListItem
    key={city.id} 
    name={city.name}
    img={city.img_link}
    safety_rating={city.safety_rating}
    trigger={props.trigger}
    />
  });

  
  return(
    <section className='city-list'>
    <h1 className="question">Where In The World Do You Want To Live Today?</h1> 
    <div>Search/Filter by Region: <a href="#">Asia</a>, <a href="#">North America</a>, <a href="#">South America</a>, <a href="#">Europe</a>, <a href="#">Africa/Middle East</a>, <a href="#">Australia/Zealandia</a></div>
    <div className="content-body">
      <ul>{CityItem}</ul>
      <div className="ad-section">
        <img className="insurance" src={Nomad} />
        <p className="ad-words"><b>Travel Insurance<br></br>for Nomads</b><br></br>Stay Protected<br></br>Adventurer!</p>
      </div>
    </div>
    <a className="load" href="">Load More....</a>
    </section> 
  )
}

export default CityList;