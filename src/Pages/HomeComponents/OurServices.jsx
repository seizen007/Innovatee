import React from "react";

const OurServices = () => {
	return (
		<div className="ourservices py-10 text-center">
			<div className="container mx-auto">
				{/* Header Section */}
				<div className="mb-8 mt-[140px]">
					<p className="text-[20px] font-dmSan capitalize text-[#FF7364]">
						Our Services
					</p>
					<h2 className="text-[46px] font-chivo font-bold mt-2 mb-5 capitalize">
						How It Works
					</h2>
				</div>

				{/* Services Section */}
				<div className="flex flex-wrap justify-center gap-6">
					{/* Service Card 1 */}
					<div className="service-card cursor-pointer bg-white border border-gray-200 rounded-lg p-5 max-w-xs text-left hover:bg-[#3a3ebc] hover:text-white transition-all duration-300">
						<div className="icon text-4xl mb-4">📅</div>
						<h3 className="text-[22px] font-bold mb-2">
							Plan Product Roadmap
						</h3>
						<p className="text-[16px] mb-4">
							A product roadmap is a shared source of truth that outlines the
							vision, direction, priorities.
						</p>
						<a href="#" className="text-sm hover:underline">
							Read More ➜
						</a>
					</div>

					{/* Service Card 2 */}
					<div className="service-card   cursor-pointer bg-white border border-gray-200 rounded-lg p-5 max-w-xs text-left hover:bg-[#3a3ebc] hover:text-white transition-all duration-300">
						<div className="icon text-4xl mb-4">🧑‍🤝‍🧑</div>
						<h3 className="text-[22px] font-bold mb-2">Assign Any Work</h3>
						<p className="text-[16px] font-dmSan mb-4">
							Work assignment or job assignment is allocating work to work
							centers or appropriate.
						</p>
						<a href="#" className="text-sm hover:underline">
							Read More ➜
						</a>
					</div>

					{/* Service Card 3 */}
					<div className="service-card  cursor-pointer bg-white border border-gray-200 rounded-lg p-5 max-w-xs text-left hover:bg-[#3a3ebc] hover:text-white transition-all duration-300">
						<div className="icon text-4xl mb-4">📊</div>
						<h3 className="text-[22px] font-chivo font-bold mb-2">
							Monitor Work Progress
						</h3>
						<p className="text-[16px] font-dmSan mb-4">
							Monitor Work Progress Keeping records and monitoring activities
							helps people see progress.
						</p>
						<a href="#" className="text-sm hover:underline">
							Read More ➜
						</a>
					</div>

					{/* Service Card 4 */}
					<div className="service-card cursor-pointer bg-white border border-gray-200 rounded-lg p-5 max-w-xs text-left hover:bg-[#3a3ebc] hover:text-white transition-all duration-300">
						<div className="icon text-4xl mb-4">🔗</div>
						<h3 className="text-[22px] font-chivo font-bold mb-2">
							Perfect Integration
						</h3>
						<p className="text-[16px] font-dmSan mb-4">
							App integration, in a general sense, is the process of resources
							or capabilities from one application.
						</p>
						<a href="#" className="text-sm hover:underline">
							Read More ➜
						</a>
					</div>
				</div>

				{/* View More Button */}
				<div className="mt-8">
					<button className="bg-blue-700 text-white hover:text-blue-700 border-transparent hover:border-blue-700 font-dmSan font-medium border-2 px-5 py-2 rounded hover:bg-transparent transition-colors">
						View More
					</button>
				</div>
			</div>
		</div>
	);
};

export default OurServices;
