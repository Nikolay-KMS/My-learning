import PropTypes from "prop-types";

export function IconStar(props) {
  let sizeFill = 0.8 * props.size;
  let slideFill = -0.1 * props.size;
  const {colorFill= "transparent"}= props;

  return (
    <div >
      <div className="iconStar" 
        style={{ width: sizeFill +"px", height: sizeFill +"px", position:'relative', zIndex: 3}}
      >
        <svg 
          focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarIcon"><path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"      
          style={{
            fill: colorFill
          }} 
        ></path></svg>
      <div 
        onClick={props.handleClickStar}
        style={{ width:props.size+"px", height:props.size+"px", top: slideFill+ 'px', left: slideFill+ 'px', position:'absolute', zIndex: 2 }}
      >
        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StarBorderIcon"><path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"      
          style={{
            fill:"#c41120"
          }} 
          ></path></svg>
        </div>
      </div>
    </div>
  )
}

IconStar.propTypes= {
  size: PropTypes.number,
  onClick: PropTypes.func,
  handleClickStar: PropTypes.func
}
