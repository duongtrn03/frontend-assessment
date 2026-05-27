import { Helmet } from "react-helmet-async";
import BackButton from "../../components/BackButton";
import HeroBanner from "../../components/HeroBanner";
import ProductCollection from "../../components/ProductCollection";

export default function Exercise1() {
  return (
    <>
      <Helmet>
        <title>Exercise 1 | Frontend Assessment</title>
        <meta name="description" content="Exercise 1 of Frontend Assessment" />
      </Helmet>
      <div className="relative">
        <BackButton />
        <HeroBanner />
        <ProductCollection />
      </div>
    </>
  );
}
