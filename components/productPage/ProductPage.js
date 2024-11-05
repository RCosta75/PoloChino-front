import React from "react";

import Suggestions from "./Suggestions";
import Review from "./Review";
import { useRouter } from "next/router";
import Footer from "../Footer";

import PictureProductPage from "./PictureProductPage";
import ProductPageDescription from "./ProductPageDescription";

export default function ProductPage() {
  const router = useRouter();

  const {
    _id,
    name,
    description,
    price,
    image,
    marque,
    coupe,
    matiere,
    comments: commentsString, // Récupérer comme une chaîne
  } = router.query;

  const comments = commentsString ? JSON.parse(commentsString) : [];

  const product = {
    _id,
    name,
    description,
    price,
    image,
    marque,
    coupe,
    matiere,
    comments,
  };
  console.log(product.comments, comments);
  return (
    <div className="w-full h-full">
      <div className="flex ">
        <PictureProductPage
          image={product.image}
          description={product.description}
        />
        <ProductPageDescription product={product} />
      </div>

      <div className="flex flex-col justify-between overflow-x-hidden w-full pt-20">
        <div className="flex w-full overflow-scroll no-scrollbar [&>div]:flex-shrink-0 border-b-8">
          <Review product={product} />
        </div>
        <h1 className=" text-center text-3xl font-medium underline underline-offset-6 pt-4">Suggestions</h1>
        <div className="flex w-full overflow-scroll no-scrollbar [&>div]:flex-shrink-0">
          <Suggestions />
        </div>
      </div>
      <Footer />
    </div>
  );
}
