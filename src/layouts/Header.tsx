import React, { useState } from 'react';
import { Sun, Moon, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleMenuClick = () => {
    onMenuClick?.();
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-background-dark border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-primary text-transparent bg-clip-text">
              Lipa
            </span>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-primary hover:opacity-80">Home</a>
            <a href="/payments" className="text-primary hover:opacity-80">Payments</a>
            <a href="/transactions" className="text-primary hover:opacity-80">Transactions</a>
          </nav>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-primary-light" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={handleMenuClick}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu className="h-5 w-5 text-primary dark:text-primary-light" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-primary dark:text-primary-light hover:opacity-80">Home</a>
              <a href="/payments" className="text-primary dark:text-primary-light hover:opacity-80">Payments</a>
              <a href="/transactions" className="text-primary dark:text-primary-light hover:opacity-80">Transactions</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
