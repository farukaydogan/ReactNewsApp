
import { Link, Navigate  } from "react-router-dom";
import { data } from "../App";

let newsData={};

export function Products(props) {

    function setPropsToData(props){
        newsData=props
        Navigate('/details')
    }
    
    return (
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>
                <h2 className="mt-4">{props.category}</h2>
                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='displayStack__1'></div>
                    <div className='displayStack__2 justify-content-center text-dark fs-1'> 
                        <div className='productPlus'><button className="fullNewsBtn" onClick={() => setPropsToData({props})}><Link to='/details' >{props.fullNewsButton}</Link></button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export {newsData};