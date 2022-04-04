import React from 'react'

type Props = {}
const Banner = (props: Props) => {
  return (
    <div>
      <section id="slider-area">
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<div id="slider" className="nivoSlider">
				    	<img src="images/slider.jpg" alt="" />
				    	<img src="images/slider1.jpg" alt=""/>
				    	<img src="images/slider2.jpg" alt="" />
					</div>	
				</div>	
			</div>	
		</div>	
	</section>
    </div>
  )
}
export default Banner;