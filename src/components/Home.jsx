import React from "react";
import HeroImage from "../assets/heroImage.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
	return <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
		<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
			<div className="flex flex-col justify-center h-full">
				<h2 className="text-4xl sm:text-6xl font-bold text-white pr-2">I'm a Front-End Developer</h2>
				<p className="text-gray-500 pt-2 pr-3">I'm a graduate of the Holberton School/ALX africa, I have developed a strong foundation in full-stack web development,
					with a focus on modern front-end technologies and best practices.
					Driven by a passion for creating elegant, user-friendly responsive web applications.</p>
				<div>
					<button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-900 to-rose-600 cursor-pointer">
						Portfolio
						<span className="group-hover:rotate-90 duration-300">
							<MdOutlineKeyboardArrowRight size={25} className="ml-1" />
						</span>
					</button>
				</div>
			</div>
			<div className="mb-20 md:mb-0">
				<img src={HeroImage} alt="profile" className="rounded-2xl mx-auto w-2/3 md:w-full lg:w-full" />
			</div>
		</div>
		
	</div>
};
export default Home