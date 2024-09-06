import React from "react";

const Contact = () => {
	return (
		<div className="relative md:translate-y-44">
			<div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 ">
				<div className="bg bg-blue-800 rounded-2xl overflow-hidden py-10 md:py-[100px]">
					<div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 md:px-8 lg:px-16">
						{/* Text Section */}
						<div className="text-white text-center md:text-left">
							<p className="font-chivo text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
								Don’t find the answer? <br />
								<span className="font-dmSan">Contact us for any query.</span>
							</p>
						</div>

						{/* Button Section */}
						<div className="mt-4 md:mt-0">
							<button className="bg-teal-400 hover:bg-teal-500 text-black font-medium py-3 px-6 rounded-lg transition duration-300 text-sm sm:text-base md:text-lg">
								Contact Us
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Background pattern or overlay
			<div className="absolute inset-0">
				<img
					src="/path/to/your-background-pattern.png"
					alt="Background Pattern"
					className="w-full h-full object-cover opacity-25"
				/>
			</div> */}
		</div>
	);
};

export default Contact;
