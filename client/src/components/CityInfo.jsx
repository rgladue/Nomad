import React from 'react';
import './CityInfo.scss';
import classnames from 'classnames';

function CityInfo(props) {
const cityClass = classnames("city-modal", {
  "show": props.show
})
 
  return(
    <div className={cityClass}>
      <div className="info-window">
        <h1>This is very important information!!</h1>
      </div>
    </div>
  )
}

export default CityInfo;