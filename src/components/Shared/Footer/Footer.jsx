import { BsEmojiHeartEyesFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (

        <div className="footer bg-orange-300 text-white  p-10">

            <div>
                <h4 className="text-xl font-bold text-sky-500">Focus
                    <span className="text-sky-600">Crafty</span>
                </h4>
                <p className="max-w-sm">Our website based on art & craft product related. We are collect many items of art & craft product
                    for our users.
                    <BsEmojiHeartEyesFill className="text-red-600 text-2xl font-bold my-3" />
                </p>
                <p className="max-w-2xl mx-auto mt-5 font-bold">
                    Copyright © {new Date().getFullYear()} - All right reserved by Focus Crafty.
                </p>
            </div>
            <nav>
                <h6 className="footer-title text-xl font-bold">Company</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Abot</a>
                <a className="link link-hover">Contact</a>
            </nav>
            <nav>
                <h6 className="footer-title text-xl font-bold">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <h6 className="footer-title text-xl font-bold">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-orange-600">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="focusCrafty@gmail.com"
                            className="input input-bordered join-item text-sm" />
                        <button className="btn bg-amber-700 outline-none text-white join-item">Subscribe</button>
                    </div>
                </fieldset>
                <div >
                    <div className="flex justify-between items-center space-x-2 text-xl mt-5">
                        <FaWhatsapp className="text-[#25D366]" />
                        <FaFacebook className="text-[#1877F2]" />
                        <FaYoutube className="text-[#FF0000]" />
                        <FaLinkedin className="text-[#0077B5]" />
                    </div>

                </div>
            </form>

        </div>


    );
};

export default Footer;