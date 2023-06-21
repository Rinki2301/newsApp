import React, { Component } from 'react'

export class NewsItem extends Component {
   render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
    <div className='my-3'> 
    <div className="card" style={{width:'18rem'}}>
        <div style={{display:'flex', justifyContent: 'flex-end', position: 'absolute', right:'0', zIndex:'1'}}>
        <span className='badge rounded-pill bg-danger'> {source} </span>
        </div>
            <img className="card-img-top" src={imageUrl?imageUrl:"https://media.istockphoto.com/id/1311148884/vector/abstract-globe-background.jpg?s=2048x2048&w=is&k=20&c=ZyHCcX0F_DVM-r_R_vG8OX_CqYLb-G16afTyaVGtB3o="} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className='text-muted'>By {author?author:"unknown"} on {new Date(date).toGMTString()}</small></p>
                <a rel="noreferrer" href={newsUrl} target='_blank' className="btn  btn-sm btn-dark">Read more</a>
            </div>
        </div>
        </div>
    )
  }
}

export default NewsItem
