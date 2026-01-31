import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/unemployment-appeals', label: 'Unemployment Appeals' },
    { path: '/other-areas', label: 'Other Areas' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-[#e6edf5] shadow-sm"
      data-testid="site-header"
    >
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-[1280px] h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" data-testid="brand-link">
          <img
            src="/warren-logo-white.png"
            alt="Law Office of Warren J. Domangue"
            className="h-16 w-auto object-contain bg-[#13263b] rounded-lg p-2"
          />
          <div className="hidden md:flex flex-col">
            <span className="text-[#13263b] text-sm font-semibold leading-tight">
              Law Office of
            </span>
            <span className="text-[#13263b] text-sm font-semibold leading-tight">
              Warren J. Domangue
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden min-[900px]:flex items-center gap-6" data-testid="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-[#1ea6a3] ${
                isActive(link.path) ? 'text-[#1ea6a3]' : 'text-[#13263b]'
              }`}
              data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+17204957315"
            data-testid="call-cta-link"
            className="ml-2"
          >
            <Button
              className="rounded-full bg-[#1ea6a3] text-white px-5 h-10 hover:bg-[#189694] transition-colors shadow-md"
              data-testid="call-cta-button"
            >
              Call (720) 495-7315
            </Button>
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="min-[900px]:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full"
                aria-label="Toggle menu"
                data-testid="hamburger-button"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-10" data-testid="mobile-nav">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`text-base font-medium transition-colors hover:text-[#1ea6a3] ${
                      isActive(link.path) ? 'text-[#1ea6a3]' : 'text-[#13263b]'
                    }`}
                    data-testid={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+17204957315"
                  className="mt-6"
                  data-testid="mobile-call-link"
                  onClick={handleLinkClick}
                >
                  <Button
                    className="w-full rounded-full bg-[#1ea6a3] text-white hover:bg-[#189694] transition-colors"
                    data-testid="mobile-call-button"
                  >
                    Call (720) 495-7315
                  </Button>
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
