import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, X, User, LogOut } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavigationItem {
  name: string;
  href: string;
  protected?: boolean;
}

const navigation: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard', protected: true },
  { name: 'Send Money', href: '/send-money', protected: true },
  { name: 'Transactions', href: '/transactions', protected: true },
];

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Mock authentication state - replace with your actual auth logic
  const isAuthenticated = false;

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const isCurrentPath = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <span className="text-2xl font-bold text-primary">Lipa</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              (!item.protected || isAuthenticated) && (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href)}
                  className={`text-sm font-medium transition-colors hover:text-primary
                    ${isCurrentPath(item.href) ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  {item.name}
                </button>
              )
            ))}
          </div>

          {/* Auth Buttons - Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <ThemeToggle />
            {isAuthenticated ? (
              <>
                <Button variant="ghost" size="sm" className="gap-2">
                  <User size={16} />
                  Profile
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-destructive">
                  <LogOut size={16} />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
                  Login
                </Button>
                <Button size="sm" onClick={() => navigate('/auth')} className="text-white">
                  Sign up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="mt-6 flex flex-col space-y-4">
                  {navigation.map((item) => (
                    (!item.protected || isAuthenticated) && (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href)}
                        className={`flex items-center space-x-2 px-2 py-1.5 text-sm font-medium transition-colors hover:text-primary
                          ${isCurrentPath(item.href) ? 'text-primary' : 'text-muted-foreground'}`}
                      >
                        {item.name}
                      </button>
                    )
                  ))}
                  <div className="my-4 h-px bg-border" />
                  {isAuthenticated ? (
                    <>
                      <Button variant="ghost" size="sm" className="justify-start gap-2">
                        <User size={16} />
                        Profile
                      </Button>
                      <Button variant="ghost" size="sm" className="justify-start gap-2 text-destructive">
                        <LogOut size={16} />
                        Logout
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="ghost" size="sm" onClick={() => handleNavigation('/auth')}>
                        Login
                      </Button>
                      <Button size="sm" onClick={() => handleNavigation('/auth')} className="text-white">
                        Sign up
                      </Button>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
