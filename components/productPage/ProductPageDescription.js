
import ProductDetailsHeader from "./ProductDetailsHeader";
import SizeColorSelect from "./SizeColorSelect";

export default function ProductPageDescription({ product }) {


  return (
    <div className="w-1/2 pl-20 text-lg  flex flex-col justify-end  ">
      <ProductDetailsHeader product={product} />
    <SizeColorSelect product={product}/>
    </div>
  );
}
