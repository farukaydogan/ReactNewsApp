import { Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import { newsData } from "./NewsCard";

// or less ideally

export default function NewDetails() {
    let data = newsData.props
    console.log(newsData);



    // console.log(data.image);
    // console.log(data.title);


    return (
        <div class="container">
            <div class=" text-center p-5 m-5 ">
                <h1 style={{ fontSize: "5rem" }} className="mb-4"  > {data.name}</h1>
                <p >{data.publishDate}</p>
                <img className=" img-fluid  text-center" src={data.image}></img>
                <p className="mt-5 fs-2">{data.body[0].p}</p>

            </div>
        </div>
    )
}