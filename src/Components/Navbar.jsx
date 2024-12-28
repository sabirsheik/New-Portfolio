import { RiCloseFill, RiMenu3Fill } from "@remixicon/react";
import React, { useState } from "react";
import { LINKS } from "../constants/index.js";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50">
                <div className="flex justify-between items-center max-w-5xl mx-auto md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg">
                    <div className=""> 
                        <a href="/" style={{background:"red"}}> <svg style={{height : "25px", margin:'0', padding:"0"}} viewBox="0 0 304.5822537167429 64.80000000000001" className="looka-1j8o68f"><defs id="SvgjsDefs1671"></defs><g id="SvgjsG1672" featurekey="nameLeftFeature-0" transform="matrix(2.6125406704882783,0,0,2.6125406704882783,-1.9948447828964835,-1.5604399513545921)" fill="#eeeeee"><path d="M0.84746 17.678 l0.74576 -0.84763 c0.18644 -0.20339 0.38983 -0.20339 0.5422 -0.084746 c0.4578 0.38983 1.6103 1.5424 3.1527 1.5424 c1.6949 0 2.7119 -0.81356 2.7119 -1.9322 c0 -1.3898 -1.5257 -1.7797 -2.9834 -2.339 c-2.2203 -0.88136 -3.9831 -1.8644 -3.9831 -3.9831 c0 -1.7288 1.2712 -3.6949 4.322 -3.6949 c2.0847 0 3.5932 1.2034 4.0169 1.6102 c0.15254 0.15254 0.23729 0.35593 0.10169 0.52542 l-0.66102 0.86441 c-0.13559 0.18661 -0.32203 0.25441 -0.54237 0.10186 c-0.44068 -0.33898 -1.4915 -1.2881 -2.8983 -1.2881 c-1.5254 0 -2.4237 0.84746 -2.4237 1.8814 c0 1.1695 1.1186 1.6441 2.712 2.2542 c2.0339 0.81356 4.2373 1.7627 4.2373 4.0847 c0 1.9831 -1.8981 3.7456 -4.5931 3.7456 c-2.4407 0 -3.9492 -1.5761 -4.3729 -1.9829 c-0.13559 -0.11864 -0.25424 -0.27102 -0.084746 -0.45763 z M24.4918813559322 19.69492 c0.08458 0.16966 0.033898 0.30508 -0.15254 0.30508 l-1.5424 0 c-0.15254 0 -0.23712 -0.067631 -0.28797 -0.18644 l-1.0508 -2.2034 l-7.3051 0 l-1.0339 2.2034 c-0.067797 0.11881 -0.15254 0.18644 -0.28814 0.18644 l-1.5593 0 c-0.16949 0 -0.25424 -0.13543 -0.18644 -0.30508 l6.3898 -13.186 c0.050847 -0.11864 0.13559 -0.15254 0.22034 -0.15254 l0.22017 0 c0.084746 0 0.15254 0.033898 0.22034 0.15254 z M14.983181355932203 15.8646 l5.6441 0 l-2.8136 -6 z M33.67793898305084 12.7798 c1.4068 0.64407 2.2881 1.9324 2.2881 3.4408 c0 2.2373 -1.9661 3.7795 -4.0508 3.7795 l-5.4746 0 c-0.16949 0 -0.28814 -0.11864 -0.28814 -0.28814 l0 -13 c0 -0.15254 0.10169 -0.27119 0.27119 -0.27119 l5.051 0 c2.1524 0 3.7625 1.8814 3.7625 3.5763 c0 1.2373 -0.66102 2.2034 -1.5593 2.7627 z M31.101738983050844 12.2207 c2.8136 0 2.8644 -3.9322 0.033898 -3.9322 l-3.0678 0 l0 3.9322 l3.0339 0 z M31.474538983050845 18.1529 c3.322 0 3.339 -4.1356 -0.033898 -4.1356 l-3.3729 0 l0.016949 4.1356 l3.3898 0 z M39.79660677966101 6.441000000000001 l-1.3053 -0.00016552 c-0.16949 0 -0.27119 0.11864 -0.27119 0.27119 l0 13 c0 0.16949 0.11864 0.28814 0.28831 0.28814 l1.3051 0 c0.15254 0 0.25424 -0.13543 0.25424 -0.28797 l0 -13 c0 -0.15254 -0.11864 -0.27119 -0.27119 -0.27119 z M52.609728813559315 19.67797 c0.11864 0.16949 0.034064 0.32203 -0.1861 0.32203 l-1.2544 0 c-0.37288 0 -0.67814 -0.33881 -0.81356 -0.5422 l-2.6441 -3.8983 l-3.3559 0 l0 4.1525 c0 0.18644 -0.10169 0.28797 -0.27119 0.28797 l-1.3729 0 c-0.16949 0 -0.27119 -0.10153 -0.27119 -0.28797 l0 -13 c0 -0.15254 0.10169 -0.27119 0.27119 -0.27119 l5.2203 0 c2.9659 0 4.5592 2.5254 4.5592 4.5592 c0 1.6949 -1.0168 3.5934 -2.9322 4.2881 z M44.356128813559316 8.288 l0 5.4237 l3.3559 0 c1.9153 0 2.8644 -1.3729 2.8644 -2.7458 c0 -1.3559 -0.9661 -2.678 -2.8644 -2.678 l-3.3559 0 z"></path></g><g id="SvgjsG1673" featurekey="inlineSymbolFeature-0" transform="matrix(0.9084866808585195,0,0,0.9084866808585195,137.9229331055449,-13.024065458797528)" fill="#eeeeee"><g xmlns="http://www.w3.org/2000/svg"><g><path d="M50.023,52.662c8.141,0,20.761-8.777,13.741-23.499c-0.393-0.824,0.732-1.517,1.283-0.79    c11.625,15.355-1.063,32.072-15.024,32.072h-0.045c-13.961,0-26.649-16.717-15.024-32.072c0.551-0.728,1.676-0.034,1.283,0.79    C29.217,43.886,42.063,52.662,50.023,52.662L50.023,52.662z"></path><path d="M60.879,65.505c9.612-4.494,19.223-0.315,19.223,9.098c0,6.348-5.974,14.285-15.584,9.534    c-0.664-0.328-0.323-1.321,0.405-1.183c5.695,1.082,9.701-2.839,9.701-7.259c0-6.563-7.359-6.012-11.733-3.508L39.121,83.852    c-9.612,4.494-19.223,0.315-19.223-9.098c0-6.348,5.974-14.285,15.584-9.534c0.664,0.328,0.323,1.321-0.405,1.183    c-5.695-1.082-9.701,2.839-9.701,7.259c0,6.563,7.359,6.012,11.733,3.508l23.771-11.667L60.879,65.505z"></path><path d="M50,14.336c-9.557,0-11.465,14.069-5.809,19.744c0.591,0.593,1.536-0.166,1.086-0.872    C42.275,28.49,44.737,20.636,50,20.645c5.263-0.009,7.725,7.845,4.723,12.562c-0.45,0.707,0.495,1.466,1.086,0.872    C61.465,28.405,59.557,14.336,50,14.336z"></path></g></g></g><g id="SvgjsG1674" featurekey="nameRightFeature-0" transform="matrix(2.63856409776085,0,0,2.63856409776085,216.88362319483844,-1.7717147641167053)" fill="#eeeeee"><path d="M18.780016949152543 19.69492 c0.08458 0.16966 0.033898 0.30508 -0.15254 0.30508 l-1.5424 0 c-0.15254 0 -0.23712 -0.067631 -0.28797 -0.18644 l-1.0508 -2.2034 l-7.3051 0 l-1.0339 2.2034 c-0.067797 0.11881 -0.15254 0.18644 -0.28814 0.18644 l-1.5593 0 c-0.16949 0 -0.25424 -0.13543 -0.18644 -0.30508 l6.3898 -13.186 c0.050847 -0.11864 0.13559 -0.15254 0.22034 -0.15254 l0.22017 0 c0.084746 0 0.15254 0.033898 0.22034 0.15254 z M9.271316949152542 15.8646 l5.6441 0 l-2.8136 -6 z M28.830474576271186 18.1525 c0.15238 0 0.27102 0.10169 0.27102 0.28814 l0 1.2881 c0 0.15238 -0.11881 0.27102 -0.27119 0.27102 l-8 0 c-0.15254 0 -0.22034 -0.11864 -0.22034 -0.27102 l0 -13.017 c0 -0.15254 0.10169 -0.27119 0.27136 -0.27119 l1.3729 0 c0.15254 0 0.27119 0.11864 0.27119 0.27119 l0 11.441 l6.3051 0 z M32.96609830508475 6.441000000000001 l-1.3053 -0.00016552 c-0.16949 0 -0.27119 0.11864 -0.27119 0.27119 l0 13 c0 0.16949 0.11864 0.28814 0.28831 0.28814 l1.3051 0 c0.15254 0 0.25424 -0.13543 0.25424 -0.28797 l0 -13 c0 -0.15254 -0.11864 -0.27119 -0.27119 -0.27119 z"></path></g></svg></a>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {LINKS.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="text-white hover:text-stone-400 transition duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                        >
                            {menuOpen ? (
                                <RiCloseFill className="w-6 h-6" />
                            ) : (
                                <RiMenu3Fill className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
                {menuOpen && (
                    <div className="md-hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto">
                        {LINKS.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                className="text-white hover:text-stone-400 transition duration-300"
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
