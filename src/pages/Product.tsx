import { useParams } from "react-router-dom";
import Hero from "../components/products/Hero";
import ProductGallery from "../components/products/ProductGallery";
import { products } from "../data/ProductDetails";
import ProductDetails from "../components/products/ProductDetails";
import { useRef } from "react";

function Product() {
  const { slug } = useParams<{ slug: string }>();
  const sectionRef = useRef<HTMLDivElement | null>(null);


  //scroll to secification section on btn click
    const scrollToSection = () => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
  
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
        keyFeatures={product.keyFeatures}
        onScrollClick={scrollToSection}
      />
      <ProductGallery photos={product.gallery} videos={product.videos} />

      <ProductDetails
        sectionRef={sectionRef}
        
        keyFeatures={product.keyFeatures}
        generalSpecifications={product.generalSpecifications}
        electricPowerSystem={product.electricPowerSystem}
        communicationAndPerformance={
          product.radioRequirementsAndFlightPerformance
        }
        performanceSpecifications={product.performanceSpecifications}
        radarIntegration={product.radarIntegration}
        communicationSystem={product.communicationSystem}
        flightCharacteristics={product.flightCharacteristics}
        additionalKeyComponentsAndApplications={
          product.additionalKeyComponentsAndApplications
        }
        radarDroneIntegrationWorkflowAndApplications={
          product.radarDroneIntegrationWorkflowAndApplications
        }
        vtolTechnologyAndApplications={product.vtolTechnologyAndApplications}
        advancedFeaturesAndApplications={
          product.advancedFeaturesAndApplications
        }
      />
    </div>
  );
}

export default Product;