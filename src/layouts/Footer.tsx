import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold bg-gradient-primary text-transparent bg-clip-text">
                Lipa
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Making cross-border payments simple, fast, and secure for everyone.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-primary dark:text-primary-light mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/careers" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold text-primary dark:text-primary-light mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-primary dark:text-primary-light mb-4">
                Contact Us
              </h4>
              <ul className="space-y-2">
                <li className="text-sm text-gray-600 dark:text-gray-400">
                  Email: support@lipa.com
                </li>
                <li className="text-sm text-gray-600 dark:text-gray-400">
                  Phone: +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
            <p className="text-sm text-center text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Lipa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
