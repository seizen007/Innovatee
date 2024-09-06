import React from "react";
import Banner from "./HomeComponents/Banner";
import Platform from "./HomeComponents/Platform";
import Features from "./HomeComponents/Features";
import Intergration from "./HomeComponents/Intergration";
import OurServices from "./HomeComponents/OurServices";
import FactsSection from "./HomeComponents/FactsSection";
import PricingTable from "./HomeComponents/Pricingtable";
import Testimonial from "./HomeComponents/Testimonial";
import Footer from "./HomeComponents/Footer";
import Contact from "./HomeComponents/Contact";

const Home = () => {
	return (
		<>
			<Banner />
			<Platform />
			<Features />
			<Intergration />
			<OurServices />
			<FactsSection />
			<PricingTable />
			<Testimonial />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
