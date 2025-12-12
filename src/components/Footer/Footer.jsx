import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* TOP COLUMNS */}
        <div className="footer-top">

          <div className="footer-col">
            <h4>Shipping & Returns</h4>
            <ul>
              <li><a href="#">Shipping Policy</a></li>
              <li><a href="#">Store Policy</a></li>
              <li><a href="#">Payment Methods</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <span class="material-icons-round">phone</span>
                <a href="tel:+918980145007">+91 89801 45007</a>
              </li>

              <li>
                <span class="material-icons-round">mail</span>
                <a href="mailto:info@fudvira.com">info@fudvira.com</a>
              </li>
            </ul>

          </div>

          <div className="footer-col">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Available On</h4>
            <ul>
              <li><a href="#">IndiaMART</a></li>
              <li><a href="#">Flipkart</a></li>
              <li><a href="#">Amazon</a></li>
            </ul>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h4>Join our mailing list and never miss an update</h4>

          <form className="newsletter-form">
            <input type="email" placeholder="Email *" required />
            <button className="btn-white">Subscribe Now</button>
          </form>

          <label className="checkbox-label">
            <input type="checkbox" /> Yes, subscribe me to your newsletter.
          </label>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>© 2025 Bharat Oxen — All Rights Reserved</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
