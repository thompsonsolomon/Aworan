import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import { CompanyName } from "../../../Data";

const Foot = () => {
  return (
    <footer className="bg-white-900 text-black py-10">
      <div className=" mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and About Section */}
        <div>
          <p className="text-sm text-black">
          Your one-stop solution for the highest quality products, carefully sourced and delivered with precision. We ensure that nature’s best reaches your doorstep, offering not just products, but a commitment to excellence and customer satisfaction every step of the way.
          </p>
        </div>


        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">Contact Us</h2>
          <ul className="space-y-2 text-sm">
          Email , phone: 
            <li>📞 <b>Phone</b>: <a href="tel:+08032517780"> (+234) 803-2517-780</a></li>
            <li>📞 <b>Phone</b>: <a href="tel:+08032517780"> (+234) 803-2517-780</a></li>
            <li>📧 <b>Email</b>: <a href="mailto:dejisanmary@gmail.com">dejisanmary@gmail.com</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg font-semibold text-black mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="FRC/"
              className="p-3 rounded-full bg-[#4caf50] text-green-900 hover:bg-green-500 hover:text-white"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-[#4caf50] text-green-900 hover:bg-green-500 hover:text-white"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="httpsnZhdHp2"
              className="p-3 rounded-full bg-[#4caf50] text-green-900 hover:bg-green-500 hover:text-white"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="p-3 rounded-full bg-[#4caf50] text-green-900 hover:bg-green-500 hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>&copy; 2025 {CompanyName} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Foot;
