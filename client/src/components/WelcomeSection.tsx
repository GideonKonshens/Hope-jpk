import { Card } from '@/components/ui/card';
import { Heart, Target, Users, Award } from 'lucide-react';
import principalImage from '@assets/generated_images/Principal_professional_headshot_7cccd971.png';

export default function WelcomeSection() {
  const values = [
    { icon: Heart, title: 'Compassion', description: 'Fostering empathy and kindness in every student' },
    { icon: Target, title: 'Excellence', description: 'Striving for the highest academic standards' },
    { icon: Users, title: 'Community', description: 'Building strong relationships and collaboration' },
    { icon: Award, title: 'Integrity', description: 'Upholding honesty and ethical values' },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-welcome-title">
              Welcome to Hope Senior School
            </h2>
            <div className="flex gap-6 mb-6">
              <img
                src={principalImage}
                alt="Principal Dr. Sarah Johnson"
                className="w-24 h-24 rounded-md object-cover"
                data-testid="img-principal"
              />
              <div>
                <p className="text-base md:text-lg text-foreground leading-relaxed" data-testid="text-welcome-message">
                  As Principal of Hope Senior School, I am honored to lead an institution dedicated to nurturing young minds and preparing them for a bright future. Our commitment to academic excellence, character development, and community engagement sets us apart.
                </p>
                <p className="text-sm text-muted-foreground mt-3">
                  <span className="font-semibold">Dr. Sarah Johnson</span>, Principal
                </p>
              </div>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              At Hope Senior School, we believe every student has unique potential waiting to be discovered and developed. Our experienced faculty, modern facilities, and comprehensive programs create an environment where students thrive academically, socially, and personally.
            </p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6" data-testid="text-values-title">
              Our Core Values
            </h3>
            <div className="grid gap-4">
              {values.map((value, index) => (
                <Card key={index} className="p-6" data-testid={`card-value-${index}`}>
                  <div className="flex gap-4 items-start">
                    <div className="bg-primary/10 p-3 rounded-md">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
