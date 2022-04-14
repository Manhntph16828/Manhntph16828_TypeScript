import React from 'react'

type Props = {}

const Search = (props: Props) => {
  
  return (
   <div>
     <div className="search-box">
						<div className="input-group">
					    	<input placeholder="Search Here" type="text" className="form-control"/>
					      	<span className="input-group-btn">
					        	<button className="btn btn-default" type="button"></button>
					      	</span>
					    </div>
					</div>
   </div>
  )
}

export default Search