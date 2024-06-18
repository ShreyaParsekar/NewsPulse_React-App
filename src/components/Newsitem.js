import React from 'react'

const Newsitem = (props) => {
  
    let{title, description,imgUrl,newsUrl,author,date,source} = props;
    return (
      
        <div  className="card mb-3" >
  <div  className="row g-0">
    <div  className="col-md-15">
      <div style={{display:'flex', justifyContent:'flex-end', position:'absolute',right:'0'}}>
    <span className=" badge rounded-pill bg-danger">{source}
    </span></div>
      <img src={!imgUrl?"https://st.depositphotos.com/1011646/1255/i/450/depositphotos_12553000-stock-photo-breaking-news-screen.jpg":imgUrl}  className="img-fluid rounded-start"  alt=''/>
    </div>
    <div  className="col-md-8">
      <div  className="card-body">
        <h5  className="card-title">{title}...</h5>
        
        <p  >{description}... </p>
        <p className="card-text"><small className="text-body-secondary"> By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
       <a href={newsUrl} className='text-center'> <button  className='btn btn-sm btn-dark text text-center'> Read More</button></a>
      </div>
    </div>
  </div>
</div>
      
    )
  
}
export default Newsitem