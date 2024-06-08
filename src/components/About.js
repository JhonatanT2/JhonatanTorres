import React from "react";
import { useState } from "react";

export default function About() {
    const [documentType, setDocumentType] = useState('english');

    const handleDocumentTypeChange = (type) => {
        setDocumentType(type);
    };
    return(
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                    Hola, soy Jhonatan.
                    <br/>Desarrollador Web
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Programador Web altamente motivado con
                    ganas de seguir creciendo.
                    Habilidades sólidas en programación front-end y back-end con una mayor inclinación hacia este último, con
                    enfoque en tecnologías modernas como Git, Jira, HTML, SQL, CSS, JavaScript
                    y frameworks como React, Symfony y Node.js.              
                    Mi dedicación, mis ganas de progresar y mis habilidades de trabajo en equipo hacen de mi perfil lo que estas buscando.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Trabaja Conmigo
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            Mira mis proyectos
                        </a>
                        
                    </div>
                    <div className="flex justify-center pt-4">
                        <label className="py-2">Choose a language:</label>
                        <select className="ml-4 rounded-md py-2" onChange={(e) => handleDocumentTypeChange(e.target.value)}>
                            <option className="rounded-md" value="english">English Curriculum</option>
                            <option value="español">Currículum Español</option>
                        </select>
                        <a
                            href={`./${documentType}/CV-JhonatanTorres.pdf`}
                            className="ml-4 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                            download="CV-JhonatanTorres.pdf"
                        >
                            {documentType === 'english' ? 'Download my resume' : 'Descarga mi CV'}
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./perfil-back.jpeg"
                    />
                </div>
            </div>
        </section>
    );
}