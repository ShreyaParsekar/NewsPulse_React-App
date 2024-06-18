import React, {useEffect, useState} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>{
 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(true)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)


 const capitalize =(string) =>{
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
 

  const updateNews = async () =>{
    props.setProgress(10)
    let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
   
      props.setProgress(100)
  }
  useEffect(() => {
    document.title= `${capitalize(props.category)}- NewsPulse`;
    // eslint-disable-next-line
    updateNews();
  }, []
)

// handleNextClick = async () =>{
//  setPage(page+1)
//  updateNews()
//  }

// handlePreviousClick = async () => {
//   setPage(page-1)
//   updateNews()
// }
 const fetchMoreData = async () => {
  
  const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
  setPage(page+1)
  let data = await fetch(url);
  let parsedData = await data.json();
  setArticles(articles.concat(parsedData.articles))
  setTotalResults(parsedData.totalResults)
 
};

  
    return (
      
      <div className="container my-'3' ">
        <h1 className='text-center' style={{marginTop:'100px'}}>Top {capitalize(props.category)} HeadLines</h1>
        {loading &&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className='container'>
        <div className='row'>
          {articles.map((element)=>{
          return <div className="col-md-4  my-5  "style={{marginLeft:'120px'}} key={element.url} >
        <Newsitem title={element.title?element.title.slice(0,45):""} 
        description={element.description?element.description.slice(0,88):""} 
        imgUrl={element.urlToImage} newsUrl={element.url}
        author={element.author}
        date={element.publishedAt}
        source={element.source.name}/>
        </div>
          })}
        </div>
        </div>
        </InfiniteScroll>
       {/* <div className='d-flex justify-content-between mb-3'>
       <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlePreviousClick}>&larr; Previous</button>
       <button type="button" disabled={page + 1 > Math.ceil(state.totalResults/props.pageSize)} className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
       </div> */}
      </div>
    )
  
}
export default News
// News.defaultProps ={
//   country: 'in',
//   pageSize: 6,
//   category: "science"
// }

// static proptypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// }