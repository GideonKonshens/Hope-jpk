import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#academics', label: 'Academics' },
    { href: '#admissions', label: 'Admissions' },
    { href: '#campus', label: 'Campus Life' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 px-2 py-1 rounded-md -ml-2">
            <GraduationCap className="h-8 w-8 text-primary" data-testid="icon-logo" />
            <span className="text-xl font-bold" data-testid="text-school-name">Hope Senior School</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
                data-testid={`link-nav-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" className="ml-2" data-testid="button-apply-now">
              Apply Now
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background" data-testid="mobile-menu">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium hover-elevate active-elevate-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase().replace(' ', '-')}`}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full mt-2" data-testid="button-mobile-apply">
              Apply Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
