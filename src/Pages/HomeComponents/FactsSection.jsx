import React from "react";
import images from "../../assets/Photos";

const FactsSection = () => {
	return (
		<div className="factsSection py-8 sm:py-16 md:py-24 lg:py-32">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="bg-factbg bg-no-repeat bg-cover bg-center">
					<div className="wrapper flex flex-col xl:flex-row items-center gap-y-[64px]">
						<div className="image pt-4 md:pt-[64px] md:pl-[41px] flex-shrink-0">
							<picture>
								<img
									src={images.factillustration}
									alt=""
									className="w-full max-w-xs md:max-w-none"
								/>
							</picture>
						</div>
						<div className="texts flex flex-col justify-center gap-y-8 md:gap-y-[64px] mt-8 md:mt-0 md:ml-8 lg:ml-16 xl:mb-0 m-5">
							<div className="text1 text-center md:text-left">
								<p className="font-chivo font-bold text-[28px] sm:text-[36px] md:text-[44px] text-white">
									Trusted by 35,000+ happy customers.
								</p>
							</div>
							<div className="text2 flex flex-col sm:flex-row items-center justify-center gap-x-20 md:gap-x-[44px] gap-y-6 md:gap-y-0 md:items-start md:justify-start text-white">
								<div className="price1 max-w-[173px] text-center md:text-left">
									<p className="font-chivo text-[28px] sm:text-[36px] md:text-[44px] font-bold">
										720+
									</p>
									<p className="font-dmSan text-[14px] sm:text-[16px] md:text-[18px]">
										Over 500 businesses powered with us
									</p>
								</div>
								<div className="price2 max-w-[173px] text-center md:text-left">
									<p className="font-chivo text-[28px] sm:text-[36px] md:text-[44px] font-bold">
										4.9
									</p>
									<p className="font-dmSan text-[14px] sm:text-[16px] md:text-[18px]">
										Rating on Google Play and App Store
									</p>
								</div>
								<div className="price3 max-w-[173px] text-center md:text-left">
									<p className="font-chivo text-[28px] sm:text-[36px] md:text-[44px] font-bold">
										200+
									</p>
									<p className="font-dmSan text-[14px] sm:text-[16px] md:text-[18px]">
										Easily integrate with your favorite apps
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FactsSection;
