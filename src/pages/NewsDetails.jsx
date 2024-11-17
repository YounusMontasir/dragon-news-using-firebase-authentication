import React from "react";
import Header from "../components/Header";
import RightNavbar from "../layout-component/RightNavbar";
import { Link, useLoaderData } from "react-router-dom";

const NewsDetails = () => {
  const detailsData = useLoaderData();
  const newsData = detailsData.data[0];
  console.log(newsData);

  return (
    <div className="">
      <Header></Header>
      <div className="w-10/12 mx-auto grid grid-cols-4 gap-6">
        <div className="col-span-3">
          <div class="card bg-base-100 rounded-none ">
            <figure>
              <img
                src={newsData.image_url}
                alt=""
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{newsData.title}</h2>
              <p>{newsData.details}</p>
              <div class="card-actions justify-end">
                <Link to={`/category/${newsData?.category_id}`} class="btn btn-primary mx-auto">Buy Now</Link>
              </div>
            </div>
          </div>
        </div>
        <section>
          <RightNavbar></RightNavbar>
        </section>
      </div>
    </div>
  );
};

export default NewsDetails;
