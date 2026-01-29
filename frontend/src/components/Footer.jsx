import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1726] text-[#9ca3af] py-12 px-4" data-testid="site-footer">
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 min-[900px]:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">
              Law Office of Warren J. Domangue
            </h3>
            <p className="text-sm leading-relaxed">
              Colorado unemployment appeals, family law, criminal defense, and appeals for clients across
              the Denver metro area and throughout Colorado.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Contact</h3>
            <div className="space-y-2 text-sm">
              <p>9888 West Belleview Ave., #158</p>
              <p>Littleton, Colorado 80123</p>
              <p>
                <a href="tel:+17204957315" className="hover:text-[#1ea6a3] transition-colors">
                  Phone: (720) 495-7315
                </a>
              </p>
              <p>Fax: (720) 763-9695</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-3">Navigation</h3>
            <nav className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-[#1ea6a3] transition-colors">
                Home
              </Link>
              <Link
                to="/unemployment-appeals"
                className="block hover:text-[#1ea6a3] transition-colors"
              >
                Unemployment Appeals
              </Link>
              <Link to="/other-areas" className="block hover:text-[#1ea6a3] transition-colors">
                Other Areas
              </Link>
              <a href="#contact" className="block hover:text-[#1ea6a3] transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#111827] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#6b7280]">
          <p>© {currentYear} Law Office of Warren J. Domangue. All rights reserved.</p>
          <p className="text-center md:text-right">
            This website is for informational purposes only and does not create an attorney–client
            relationship.
          </p>
        </div>
      </div>
    </footer>
  );
};
