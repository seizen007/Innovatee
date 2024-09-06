import React from "react";
// Importing React Icons
import { FiZap, FiShield, FiClipboard } from "react-icons/fi";
import images from "../../assets/Photos";

const Features = () => {
	return (
		<div className="features py-12">
			<div className="container mx-auto grid gap-12 md:grid-cols-2 lg:gap-24 items-center">
				{/* Image Section */}
				<div className="element_image">
					<picture>
						<img
							src={images.elements}
							alt="Project Data"
							className="w-full h-auto"
						/>
					</picture>
				</div>

				{/* Text and Features Section */}
				<div className="texts max-w-full md:max-w-[553px]">
					{/* Main Title */}
					<div className="text1 mb-6">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
							We provide features for your Business
						</h2>
					</div>

					{/* Features with Icons */}
					<div className="text2_with_icons grid lg:flex flex-wrap gap-8 md:gap-12 lg:gap-x-16">
						{/* Feature 1 */}
						<div className="flex flex-col items-start lg:max-w-[220px]">
							{/* Using React Icons */}
							<FiZap className="w-8 h-8 mb-4 text-blue-600" />
							<div>
								<h3 className="text-lg font-semibold text-gray-800">
									Fast and Easy to use
								</h3>
								<p className="text-gray-500">
									Easily convert API with just a few clicks.
								</p>
							</div>
						</div>

						{/* Feature 2 */}
						<div className="flex flex-col items-start lg:max-w-[220px]">
							{/* Using React Icons */}
							<FiShield className="w-8 h-8 mb-4 text-blue-600" />
							<div>
								<h3 className="text-lg font-semibold text-gray-800">
									Safely Security
								</h3>
								<p className="text-gray-500">All customer data is encrypted.</p>
							</div>
						</div>

						{/* Feature 3 */}
						<div className="flex flex-col items-start lg:max-w-[220px]">
							{/* Using React Icons */}
							<FiClipboard className="w-8 h-8 mb-4 text-blue-600" />
							<div>
								<h3 className="text-lg font-semibold text-gray-800">
									Get Organized
								</h3>
								<p className="text-gray-500">
									From lists to boards, organize work your way.
								</p>
							</div>
						</div>

						{/* Call to Action Button */}
						<div className="flex flex-col items-start justify-end md:items-center">
							<button className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 text-lg font-semibold">
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
