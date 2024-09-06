import React from "react";
import images from "../../assets/Photos";

const Intergration = () => {
	return (
		<div className="intergration py-16 bg-integrationbg bg-no-repeat bg-cover">
			<div className="container mx-auto px-4 lg:px-8 mt-[100px] mb-[23px]">
				<div className="wrapper flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
					{/* Text Area */}
					<div className="text_area mb-12 lg:mb-0 max-w-full lg:max-w-[583px]">
						<div className="texts mb-8">
							<div className="intergration mb-4">
								<p className="text-[18px] sm:text-[20px] font-dmSan font-medium text-[#FF7364]">
									Integration
								</p>
							</div>
							<div className="text2 mb-4">
								<p className="text-[32px] sm:text-[38px] md:text-[46px] font-chivo font-bold leading-tight">
									Easily integrate with your favorite apps
								</p>
							</div>
							<div className="text3">
								<p className="text-[16px] sm:text-[18px] font-dmSan text-gray-600 leading-relaxed">
									App integration, in a general sense, is the process of
									bringing resources or capabilities from one application to
									another. As the world of apps continues to evolve, app
									integration is becoming expected in many contexts.
								</p>
							</div>
						</div>
						<div className="button">
							<button className="bg-blue-600 text-white py-3 px-6 sm:px-8 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold">
								Get Started
							</button>
						</div>
					</div>

					{/* Logos Section */}
					<div className="logos grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 lg:w-1/2">
						{Object.keys(images.logos).map((key) => (
							<div
								key={key}
								className={`flex items-center justify-center bg-white rounded-lg p-3 sm:p-5 lg:p-6`}
							>
								<picture>
									<img
										src={images.logos[key]}
										alt={key}
										className="max-h-[40px] sm:max-h-[50px] lg:max-h-[60px] w-auto"
									/>
								</picture>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intergration;
