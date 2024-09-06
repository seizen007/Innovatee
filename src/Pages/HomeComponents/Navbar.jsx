import React, { useState } from "react";
import images from "../../assets/Photos";

const Navbar = () => {
	const [menu, setMenu] = useState({
		home: "Home",
		features: "Features",
		services: "Services",
		pages: "Pages",
		blog: "Blog",
	});

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div className="Navbar font-dmSan">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between py-5">
					{/* logo */}
					<div className="logo">
						<picture>
							<img src={images.navLogo} alt="Logo" />
						</picture>
					</div>

					{/* Hamburger icon for mobile */}
					<div className="lg:hidden">
						<button onClick={toggleMenu} className="text-white">
							{/* Example of a hamburger icon */}
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16m-7 6h7"
								></path>
							</svg>
						</button>
					</div>

					{/* navMenu */}
					{/* navMenu with animation */}
					<div
						className={`${
							isMenuOpen ? "block animate-slide-in" : "hidden"
						} lg:flex flex-col lg:flex-row lg:items-center lg:gap-10 text-white`}
					>
						<div className="flex flex-col lg:flex-row gap-4 lg:gap-10">
							{Object.keys(menu).map((key) => (
								<p className="capitalize cursor-pointer" key={key}>
									{menu[key]}
								</p>
							))}
						</div>
					</div>

					{/* Styles for animation */}
					<style jsx>{`
						@keyframes slide-in {
							0% {
								opacity: 0;
								transform: translateY(-10px);
							}
							100% {
								opacity: 1;
								transform: translateY(0);
							}
						}

						.animate-slide-in {
							animation: slide-in 0.3s ease-in-out;
						}
					`}</style>

					{/* login/reg */}
					<div className="hidden lg:flex items-center space-x-4">
						<div className="login">
							<button className="py-2 px-4 text-white border border-white rounded-lg">
								Login
							</button>
						</div>
						<div className="reg">
							<button className="py-2 px-4 bg-teal-400 text-white rounded-lg">
								Register
							</button>
						</div>
					</div>
				</div>

				{/* Mobile login/reg */}
				{isMenuOpen && (
					<div className="lg:hidden flex flex-col items-center space-y-4 mt-4">
						<button className="py-2 px-4 text-white border border-white rounded-lg">
							Login
						</button>
						<button className="py-2 px-4 bg-teal-400 text-white rounded-lg">
							Register
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
