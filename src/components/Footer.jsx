import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Importing social media icons

export default function Footer() {
    return (
        <footer className="bg-seaBlue-950 py-4">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-evenly items-center">
                    <div className="text-center md:text-left text-white">
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} BrightCast. All rights reserved.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end mt-4 md:mt-0 space-x-4">
                        <a href="#" className="hover:text-seaBlue-200 text-white transition-colors duration-300" aria-label="Facebook">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="#" className="hover:text-seaBlue-200 text-white transition-colors duration-300" aria-label="Twitter">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="hover:text-seaBlue-200 text-white transition-colors duration-300" aria-label="Instagram">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="hover:text-seaBlue-200 text-white transition-colors duration-300" aria-label="LinkedIn">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
