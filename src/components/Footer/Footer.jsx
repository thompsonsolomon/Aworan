// src/components/Footer/Foot.js
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";
import { CompanyName } from "../../../Data";

const Foot = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and About Section */}
        <div className="footer-about">
          <p>
            Your one-stop solution for the highest quality products, carefully sourced and delivered with precision.
            We ensure that nature’s best reaches your doorstep, offering not just products,
            but a commitment to excellence and customer satisfaction every step of the way.
          </p>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h2>Contact Us</h2>
          <ul>
            <li>📞 <b>Phone</b>: <a href="tel:+08032517780">(+234) 803-2517-780</a></li>
            <li>📞 <b>Phone</b>: <a href="tel:+08032517780">(+234) 803-2517-780</a></li>
            <li>📧 <b>Email</b>: <a href="mailto:dejisanmary@gmail.com">dejisanmary@gmail.com</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="FRC/" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="httpsnZhdHp2" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 {CompanyName} All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Foot;
