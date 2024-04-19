import React from "react";
import { SocialIcon } from 'react-social-icons'

export default function Contact() {
    
    const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
      
        return <a  
        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" 
        href={`mailto:${email}${params}`}>{children}</a>;
    };

    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                        width="100%"
                        height="100%"
                        title="map"
                        className="absolute inset-0"
                        style={{ filter: "opacity(0.7)" }}
                        src="https://www.google.com/maps/embed/v1/place?q=Granada,+España&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    />
                    <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                DIRECCIÓN
                            </h2>
                            <p className="mt-1">
                                Granada - Andalucia                               
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <p className="text-indigo-400 leading-relaxed">
                                arielto333@gmail.com
                            </p>
                            {/* <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                                TELÉFONO
                            </h2>
                            <p className="leading-relaxed">000000000</p> */}
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                    <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                        Contratame
                    </h2>
                    <p className="leading-relaxed mb-5">
                        Si te interesa mi perfil y te gustaria ponerte en contacto, puedes contactarme mediante mi correo!
                    </p>
                    <p className="leading-relaxed mb-5 flex items-center">                      
                    <Mailto email="arielto333@gmail.com" subject="Hola" body="Hello world!">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>                           
                    </Mailto>
                    <span className="m-5">Enviame un correo!</span> 
                    </p>
                    <h4 className="text-white sm:text-3xl text-3xl mb-1 font-medium title-font">
                        Mis Redes:
                    </h4>
                        <a href="https://www.linkedin.com/in/jhonatan-torres-47123b27a/" className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                            <SocialIcon network="linkedin" />
                            Linkedin
                        </a>                   
                        <a href="https://github.com/JhonatanT2" className="inline-flex items-center border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
                            <SocialIcon network="github" />
                            GitHub
                        </a>                    
                </div>    
            </div>
        </section>
    )
}