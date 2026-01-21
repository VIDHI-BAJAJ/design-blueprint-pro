import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import omnificLogo from "@/assets/Omnific.jpg";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display text-3xl font-semibold text-background">
                Omnific
              </span>
            </Link>
            <img src={omnificLogo} alt="Omnific Fitouts Logo" className="h-12 w-auto mb-4" />
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              We create your imaginations. Premium interior design and fitout
              solutions for discerning clients across India.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-background/20 text-background/60 hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-background/20 text-background/60 hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center border border-background/20 text-background/60 hover:border-primary hover:text-primary transition-colors"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Services", "Portfolio", "Process", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase().replace(" ", "-")}`}
                      className="text-background/60 hover:text-primary transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-xl mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Commercial Interiors",
                "Retail Fitouts",
                "Office Design",
                "Residential Luxury",
                "Custom Furniture",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-background/60 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-1" />
                <span className="text-background/60 text-sm">
                  Building No: 1633, Street 14, 2nd Floor,
                  <br />
                  Govind Puri, Kalkaji, New Delhi - 110019
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a
                  href="tel:+919871373456"
                  className="text-background/60 hover:text-primary transition-colors text-sm"
                >
                  +91 98713 73456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a
                  href="mailto:info@omnificfitouts.com"
                  className="text-background/60 hover:text-primary transition-colors text-sm"
                >
                  info@omnificfitouts.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/40 text-sm">
            © {new Date().getFullYear()} Omnific Fitouts LLP. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-background/40 hover:text-background/60 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-background/40 hover:text-background/60 text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
