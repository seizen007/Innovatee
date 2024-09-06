import React from "react";
import images from "../../assets/Photos";

const Platform = () => {
	return (
		<div className="platform py-12">
			<div className="container mx-auto px-4 text-center">
				{/* Text Section */}
				<div className="texts mb-12 flex flex-col items-center md:flex-row md:justify-between md:text-start">
					<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-chivo text-gray-800 mb-4 md:mb-0 md:w-[400px]">
						How simple is it to use our platform?
					</h2>
					<p className="text-gray-500 text-[18px] font-dmSan md:text-lg max-w-full md:max-w-[530px]">
						This Innovate Con guide explores the most popular platforms and
						walks you through how to use them to grow your business.
					</p>
				</div>

				{/* Icons Cards */}
				<div className="flex flex-wrap justify-center md:justify-between gap-8">
					{Object.keys(images.icons).map((key) => (
						<div
							className="icons p-6 bg-white rounded-lg max-w-[305px] sm:w-80"
							key={key}
						>
							<img
								src={images.icons[key]}
								alt=""
								className="mx-auto mb-6 w-16 h-16"
							/>
							<h3 className="text-lg md:text-[24px] font-chivo font-semibold text-gray-800 mb-2">
								{key === "icon_1"
									? "Login or sign up to use our platform"
									: key === "icon_2"
									? "Connect your website with just a few clicks"
									: "Take some sales data that you want"}
							</h3>
							<p className="text-gray-500 font-dmSan text-[18px] md:text-base">
								{key === "icon_1"
									? "This quickstart shows you how to use Identity Platform to sign in a user with an email and password."
									: key === "icon_2"
									? "Once your website is online, you can configure it and I will show you how to put your website online."
									: "Sell your data directly: The most straightforward method is to sell your data directly to another."}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Platform;
