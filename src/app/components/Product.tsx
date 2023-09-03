import Link from "next/link";
import Image from "next/image";
type Props = {
  product: any;
};

function Product({ product }: Props) {
  return (
    <Link
      href={`/Products/${product.id}`}
      className="h-96 flex flex-col p-5 rounded border group hover:scale-105 transition-transform ease-out duration-200"
    >
      <div className="relative max-h-72 flex-1">
      <Image
            src={product.image}
            alt="ImageNotFound"
            width={200}
            height={200}
        />
      </div>

      <div className="font-semibold flex items-center justify-between mt-4 mb-1">
        <p className="w-44 truncate">{product.title}</p>
        <p>${product.price}</p>
      </div>

      <p className="italic text-xs w-64 line-clamp-2 text-gray-600">
        {product.description}
      </p>
    </Link>
  );
}

export default Product;