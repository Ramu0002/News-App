import React, { Component } from 'react'
//import { data } from 'react-router-dom'

export class NewsItem extends Component {
  
  render() {
    let {title, description , imgUrl , newsUrl , author , publishedAt , source} = this.props
    let d = new Date(publishedAt)
    
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" alt="" src={!imgUrl?"https://image.cnbcfm.com/api/v1/image/108097025-1738679699072-108097025-17386790922025-02-04t130640z_935194143_rc2onca03sq8_rtrmadp_0_fox-corp-results.jpg?v=1738679717&w=1920&h=1080":imgUrl} />
            <div className="card-body">
              <h5 className="card-title">{title}... <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source}
    
  </span></h5>
              <p className="card-text">{description}...</p>
              <ul className="list-group list-group-flush">
                
                <p className="card-text"><small className="text-muted">By {!author ? "Unknown": author} on {d.toUTCString()} </small></p>
                
              </ul>
              <a rel="noreferrer" href={newsUrl} target="_blank"className="btn btn-sm btn-primary">Go somewhere</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
