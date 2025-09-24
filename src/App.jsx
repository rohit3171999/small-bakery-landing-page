import HeroSection from "./components/HeroSection.jsx";
import AboutBakery from "./components/AboutBakery.jsx";
import ProductGallery from "./components/ProductGallery.jsx";
import SpecialOffers from "./components/SpecialOffers.jsx";

export default function App(){
    return (
        <>
            <HeroSection/>
            <AboutBakery/>
            <ProductGallery/>
            <SpecialOffers/>
        </>
    );
}