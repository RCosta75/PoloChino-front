
import ProductDetailsHeader from "./ProductDetailsHeader";
import SizeColorSelect from "./SizeColorSelect";

export default function ProductPageDescription({ product }) {


  return (
    <div className="w-1/3 pl-20 gap-10 text-xl  flex flex-col justify-center  ">
      <ProductDetailsHeader product={product} />
    <SizeColorSelect/>
    </div>
  );
}
