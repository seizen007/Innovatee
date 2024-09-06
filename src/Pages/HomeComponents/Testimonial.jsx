import React, { useState, useEffect } from "react";

const testimonials = [
	{
		id: 1,
		name: "Sohel Rana Baig",
		role: "Full Stack Developer",
		text: "“Incredible team! Their expertise in the MERN stack truly helped streamline our web applications.”",
		rating: 4.8,
		reviews: "120k Total Reviews",
	},
	{
		id: 2,
		name: "Ashraful Islam Siam",
		role: "Frontend Engineer",
		text: "“Top-notch service! Their React and Tailwind skills brought our designs to life.”",
		rating: 4.6,
		reviews: "180k Total Reviews",
	},
	{
		id: 3,
		name: "Antor Ahmed",
		role: "Backend Developer",
		text: "“They really know their way around Node.js and Express. Amazing support throughout the project!”",
		rating: 4.7,
		reviews: "150k Total Reviews",
	},
	{
		id: 4,
		name: "Mahamud Hasan",
		role: "Software Architect",
		text: "“Highly efficient team! They delivered a robust architecture for our MERN-based platform.”",
		rating: 4.9,
		reviews: "200k Total Reviews",
	},
	{
		id: 5,
		name: "Liton Chowdhury",
		role: "DevOps Engineer",
		text: "“Their approach to cloud deployment and continuous integration is simply outstanding!”",
		rating: 4.8,
		reviews: "170k Total Reviews",
	},

	// Add more testimonials here...
];

const Testimonial = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	const handleNext = () => {
		setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
	};

	const handlePrev = () => {
		setActiveIndex(
			(prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
		);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			handleNext(); // Automatically switch every 5 seconds
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="testimonial py-16 bg-[#F4FAFA]">
			{" "}
			{/* Updated background color */}
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
				{/* Left Section */}
				<div className="text-left p-8">
					<h2 className="text-4xl font-chivo font-bold mb-4 text-gray-800">
						What they are talking about us?
					</h2>
					<p className="text-gray-600 mb-6 font-dmSan">
						Testimonials are evidence of customers talking about your product or
						service in their own words. At their best, they are authentic and
						descriptive.
					</p>
					<button className="px-6 py-3 bg-blue-600 text-white font-dmSan rounded-lg hover:bg-blue-700 transition duration-300">
						Get Started
					</button>
					<div className="flex flex-wrap items-center mt-6">
						<div className="flex space-x-2">
							{testimonials.map((_, index) => (
								<div
									key={index}
									className={`w-4 h-4 rounded-full transition-all duration-500 ${
										activeIndex === index ? "bg-blue-600" : "bg-gray-400"
									}`}
								></div>
							))}
						</div>
						<div className="ml-4 text-lg font-dmSan text-gray-700">
							{testimonials[activeIndex].rating} ⭐{" "}
							<span>{testimonials[activeIndex].reviews}</span>
						</div>
					</div>
				</div>

				{/* Right Section - Slider */}
				<div className="relative overflow-hidden h-72">
					{" "}
					{/* Updated height */}
					<div className="relative h-full w-full">
						{testimonials.map((testimonial, index) => (
							<div
								key={testimonial.id}
								className={`absolute inset-0 transition-transform duration-700 ease-in-out h-full w-full flex items-center justify-center ${
									activeIndex === index
										? "transform translate-y-0 opacity-100"
										: "transform -translate-y-full opacity-0"
								}`}
							>
								<div className="p-8 bg-white rounded-lg shadow-lg max-w-lg">
									<p className="text-lg font-dmSan text-gray-800 mb-4">
										{testimonial.text}
									</p>
									<h3 className="font-bold font-chivo text-xl text-gray-900">
										{testimonial.name}
									</h3>
									<p className="text-sm font-dmSan text-gray-500">
										{testimonial.role}
									</p>
									<div className="mt-4 flex space-x-1 text-yellow-500">
										{"⭐".repeat(Math.round(testimonial.rating))}
									</div>
								</div>
							</div>
						))}
					</div>
					{/* Navigation Arrows - Up/Down Style */}
					<div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col space-y-4">
						<button
							onClick={handlePrev}
							className="p-3 bg-white shadow-lg rounded-full hover:bg-gray-100 transition duration-300 flex items-center justify-center"
							aria-label="Previous testimonial"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-6 h-6 text-blue-600"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M5 15l7-7 7 7"
								/>
							</svg>
						</button>

						<button
							onClick={handleNext}
							className="p-3 bg-white shadow-lg rounded-full hover:bg-gray-100 transition duration-300 flex items-center justify-center"
							aria-label="Next testimonial"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-6 h-6 text-blue-600"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
