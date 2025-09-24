import HeroSection from "./components/HeroSection.jsx";
import AboutBakery from "./components/AboutBakery.jsx";
import ProductGallery from "./components/ProductGallery.jsx";
import SpecialOffers from "./components/SpecialOffers.jsx";
import Testimonials from "./components/Testimonials.jsx";
import LocationMap from "./components/LocationMap.jsx";
import CallToAction from "./components/CallToAction.jsx";

export default function App(){
    return (
        <>
            <HeroSection/>
            <AboutBakery/>
            <ProductGallery/>
            <SpecialOffers/>
            <Testimonials/>
            <LocationMap/>
            <CallToAction/>
        </>
    );
}