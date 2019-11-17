import React, {useState} from 'react'
import VisibilitySensor from 'react-visibility-sensor'

const LazyImg = ({ imgSrc, className, children, style, childClass, traceClass}) => {
  const [visOnce, setVisOnce] = useState(false);

  let imageLazy = require(`../assets/${imgSrc}?trace`);

  const backgroundStyle = {
    traceStyle: {
      zIndex: -1
    },
    srcClasses: "absolute w-100 h-100 top-0 left-0"
  };
  const imageStyle = {
    traceStyle: {
      zIndex: -1,
      display: 'block'
    },
    srcClasses: "absolute top-0 left-0"

  };

  return(
    <VisibilitySensor partialVisibility={true} active={!visOnce} onChange={(isVisible) => setVisOnce(isVisible)}>
      <div style={style} className={`relative ${className && className}`} >
        <img className={traceClass} style={children ? backgroundStyle.traceStyle : imageStyle.traceStyle} src={imageLazy.trace} alt={"Lazy Image"} />
        {visOnce && <img alt={"Lazy Loaded Image"} className={`db h-100 lazyimg transition ${children ? backgroundStyle.srcClasses : imageStyle.srcClasses}`} onLoad={(e) => {e.target.classList.remove('lazyimg')}} src={imageLazy.src} />}
        <div className={`absolute w-100 h-100 top-0 left-0 ${childClass && childClass}`}>
          {children && children}
        </div>

      </div>
    </VisibilitySensor>
  )
};

export default LazyImg