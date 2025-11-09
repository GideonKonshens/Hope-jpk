import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  const footerLinks = {
    'Quick Links': ['About Us', 'Academic Calendar', 'Admissions', 'Contact'],
    'Academics': ['Elementary', 'Middle School', 'High School', 'Curriculum'],
    'Admissions': ['Apply Now', 'Tuition & Fees', 'Financial Aid', 'Visit Campus'],
    'Resources': ['Parent Portal', 'Student Portal', 'Career Opportunities', 'Alumni'],
  };

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Hope Senior School</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Inspiring excellence and nurturing potential since 1975. Dedicated to providing world-class education.
            </p>
            <div className="flex gap-2">
              <Button size="icon" variant="ghost" data-testid="button-facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" data-testid="button-linkedin">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold mb-3">Subscribe to our Newsletter</h3>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" type="email" data-testid="input-newsletter" />
                <Button data-testid="button-subscribe">Subscribe</Button>
              </div>
            </div>
            <div className="text-sm text-muted-foreground md:text-right">
              <p className="mb-2">
                Accredited by National Association of Independent Schools
              </p>
              <p>&copy; 2024 Hope Senior School. All rights reserved.</p>
              <div className="flex gap-4 mt-2 md:justify-end">
                <a href="#" className="hover:text-foreground">Privacy Policy</a>
                <a href="#" className="hover:text-foreground">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
