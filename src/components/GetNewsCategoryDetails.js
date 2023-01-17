
import React from 'react';
import axios from 'axios';
import { Products } from './NewsCard';
import '../helpers/tools.js'
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import { useNavigate } from 'react-router'
import LoadingSpinner from './LoadingSpinner';

export default function GetNewsCategoryDetails() {
  const navigate = useNavigate()
  navigate(0)
  let { category } = useParams();
  return (<AxiosGet category={category}></AxiosGet>)
}


class AxiosGet extends React.Component {

  state = {
    news: [],
    categorys: {
      "dunya": "dunyaa",
      "ekonomi": "ekonomia",
      "magazin": "magazina",
      "spor": "spora",
      "teknoloji": "teknolojia",
      "guncel": "guncela",
    },
    category: ""

  }

  componentDidMount() {
    let category = this.props.category;
    this.setState({ category: '1' })
    this.setState({ loading: true }, () => {
      axios.get('https://app.haberler.com/services/haberlercom/3.4/service.asmx/app' + this.state.categorys[category] + '?count=30&offset=0')
        .then(res => {
          const news = res.data.news;
          this.setState({ news, loading: false });
        })
    });
  }


  render() {
    const { loading } = this.state;
    return (
      <div className='App justify-content-center text-cente'>
        {loading ? <LoadingSpinner /> :
          this.state.news.map(New => { return New.category != "0" ? <Products key={New.id} name={New.title} publishDate={New.publishDate} body={New.body} image={New.imageUrl} category={New.category} id={New.id} fullNewsButton="Habere Git" /> : null })
        }
      </div>
    )
  }

}
