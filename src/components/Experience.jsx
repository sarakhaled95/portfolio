import React from "react";
import css from "../assets/css.png";
import html from "../assets/html.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import bootstrap from "../assets/bootstrap.png";
import tailwind from "../assets/tailwind.png";
import reactImage from "../assets/reactImage.png";

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: reactImage,
            title: 'React',
            style: "shadow-cyan-500"
        },{
            id: 2,
            src: html,
            title: 'HTML',
            style: "shadow-orange-500"
        },{
            id: 3,
            src: css,
            title: 'CSS',
            style: "shadow-blue-500"
        },{
            id: 4,
            src: javascript,
            title: 'JavaScript',
            style: "shadow-yellow-500"
        },{
            id: 5,
            src: bootstrap,
            title: 'Bootstrap',
            style: "shadow-violet-700"
        },{
            id: 6,
            src: tailwind,
            title: 'Tailwind CSS',
            style: "shadow-sky-400"
        },{
            id: 7,
            src: github,
            title: 'GitHub',
            style: "shadow-gray-400"
        },{
            id: 8,
            src: node,
            title: 'Nodejs',
            style: "shadow-lime-500"
        },

    ]

    return (
        <div name="experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
                <div className="pb-4">
                    <p className="text-4xl font-bold py-2">Experience</p>
                <p>These are the technologies I've worked with</p>
                </div>

                <div className="grid w-full grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-6 sm:px-0">

                    {
                        techs.map(({ id, title, src, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className="mt-2">{title}</p>
                            </div>
                        ))
                    }

                    
                </div>
            </div>
        </div>
    );
};

export default Experience