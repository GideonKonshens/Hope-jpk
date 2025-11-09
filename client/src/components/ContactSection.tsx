import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    { icon: MapPin, label: 'Address', value: '123 Education Lane, Academic City, AC 12345' },
    { icon: Phone, label: 'Phone', value: '(555) 123-4567' },
    { icon: Mail, label: 'Email', value: 'info@hopeseniorschool.edu' },
    { icon: Clock, label: 'Office Hours', value: 'Mon-Fri: 8:00 AM - 4:00 PM' },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-contact-title">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to join our community? We'd love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex gap-4" data-testid={`contact-info-${index}`}>
                  <div className="bg-primary/10 p-3 rounded-md h-fit">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{item.label}</div>
                    <div className="text-muted-foreground">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-4 bg-muted/30">
              <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
                <MapPin className="h-12 w-12 text-muted-foreground" />
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  data-testid="input-email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  data-testid="input-phone"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your inquiry..."
                  rows={4}
                  data-testid="input-message"
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-submit">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
