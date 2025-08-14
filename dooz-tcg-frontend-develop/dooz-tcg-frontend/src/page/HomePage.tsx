import HeroCarousel from "../components/home/HeroCarousel.tsx";
import ProductRangeSection from "../components/highlight/ProductRangeSection.tsx";
import PreorderSection from "../components/preorder/PreorderSection.tsx";
import EventsSection from "../components/events/EventsSection.tsx";
import AboutSection from "../components/about/AboutSection.tsx";
import ServiceFeatureSection from "../components/servicefeature/ServiceFeatureSection.tsx";
import NewsletterSection from "../components/newsletter/NewsletterSection.tsx";

function HomePage() {
    return (
        <>
            <HeroCarousel />
            <ProductRangeSection />
            <PreorderSection />
            <EventsSection />
            <AboutSection />
            <ServiceFeatureSection />
            <NewsletterSection />
        </>
    )
}
export default HomePage;