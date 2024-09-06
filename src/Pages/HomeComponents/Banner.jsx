import React from "react";
import Navbar from "./Navbar";
import images from "../../assets/Photos";

const Banner = () => {
	return (
		<div className="banner relative">
			{/* Background Image */}
			<div className="absolute inset-0 bg-hero bg-no-repeat "></div>

			{/* Overlay for contrast */}
			<div className="absolute inset-0 "></div>

			<div className="relative z-10">
				<Navbar />
				<div className="container mx-auto px-6 sm:px-10 pt-16">
					<div className="flex flex-col lg:gap-[98px] items-center justify-center  space-y-8 text-center">
						<div className="flex flex-col items-center gap-y-[20px]">
							{/* Headline Text */}
							<div className="space-y-4 animate-fade-in">
								<h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] text-white font-bold tracking-wide leading-tight font-chivo">
									Get Your Work Done with <br /> Our Management Tool
								</h1>
								<p className="text-[16px] font-dmSan sm:text-[18px] md:text-[20px] lg:text-[22px] text-gray-300 max-w-[600px] mx-auto">
									Your all-in-one project management platform that connects
									everything for seamless workflows.
								</p>
							</div>

							{/* Input and Button */}
							<div className="flex flex-col mt-[17px] sm:flex-row justify-center items-center sm:bg-white rounded-lg w-full sm:w-[500px] p-2 shadow-xl space-y-4 sm:space-y-0 sm:space-x-4 transition-all duration-300 ease-in-out hover:shadow-2xl">
								<input
									type="email"
									placeholder="Enter your business email"
									className="w-full font-dmSan sm:flex-1 px-6 py-3 border-none outline-none rounded-lg text-gray-700 placeholder-gray-500 focus:ring-2 focus:ring-teal-400 transition duration-300 ease-in-out"
								/>
								<button className="bg-teal-400 text-[16px] md:text-[18px] text-black font-dmSan font-medium px-6 py-3 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:bg-teal-500 hover:transform-gpu hover:scale-105">
									<span className="block transform-none">Try for Free</span>
								</button>
							</div>
						</div>

						{/* Laptop Image */}
						<div className="mt-12 lg:mt-16 w-full lg:w-auto animate-slide-up">
							<picture>
								<img
									src={images.laptop}
									alt="Laptop"
									className="w-full  mx-auto "
								/>
							</picture>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
