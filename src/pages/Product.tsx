import { useParams } from "react-router-dom";
import Hero from "../components/products/Hero";
import ProductDetails from "../components/products/ProductDetails";
import ProductGallery from "../components/products/ProductGallery";
import { products } from "../data/ProductDetails";

function Product() {
const { slug } = useParams<{ slug: string }>();

if (!slug) {
  return <div>Product not found</div>;
}

const product = products.find((p) => p.url.includes(slug));
if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Hero
        name={product.name}
        title={product.title}
        description={product.description}
        image={product.image}
        layout={product.layout}
      />
      <ProductGallery photos={product.gallery} videos={product.videos} />

      <ProductDetails
        keyFeatures={product.keyFeatures}
        generalSpecifications={product.generalSpecifications}
        electricPowerSystem={product.electricPowerSystem}
        communicationAndPerformance={product.communicationAndPerformance}
      />
    </div>
  );
}

export default Product;
