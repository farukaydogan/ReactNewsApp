import React from 'react';
import axios from 'axios';
import { Products } from './NewsCard';
import '../helpers/tools.js'
import { replaceSpace } from '../helpers/tools.js';
import Navbar from './Navbar';
import Footer from './Footer';

export default class GetNewsList extends React.Component {
  state = {
    news: []
  }

  componentDidMount() {
    axios.get(`https://app.haberler.com/services/haberlercom/3.3/service.asmx/appmanseta?count=50&offset=1`)
      .then(res => {
        const news = res.data.news;
        this.setState({ news });
      })
  }


  render() {
    return (
      <div className='App'>
       { this.state.news.map(New => {return  New.category !="3. Sayfa" && New.category !="0" ?<Products key={New.id}  publishDate={New.publishDate} body={New.body} name={New.title} image={New.imageUrl} category={New.category} id={New.id} fullNewsButton="Habere Git" />:null})}
      </div>
    )
    
  }
}
