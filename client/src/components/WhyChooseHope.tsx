import { Card } from '@/components/ui/card';
import { Users, BookOpen, TrendingUp, Trophy } from 'lucide-react';

export default function WhyChooseHope() {
  const highlights = [
    {
      icon: Users,
      number: '500+',
      label: 'Students',
      description: 'Diverse community of learners',
    },
    {
      icon: BookOpen,
      number: '25:1',
      label: 'Student-Teacher Ratio',
      description: 'Personalized attention',
    },
    {
      icon: TrendingUp,
      number: '95%',
      label: 'College Acceptance',
      description: 'Outstanding results',
    },
    {
      icon: Trophy,
      number: '30+',
      label: 'Extracurricular Activities',
      description: 'Well-rounded development',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-why-choose-title">
            Why Choose Hope Senior School
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Excellence in education, proven results, and a commitment to student success
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 text-center hover-elevate" data-testid={`card-highlight-${index}`}>
              <div className="bg-primary/10 w-16 h-16 rounded-md flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">{item.number}</div>
              <div className="text-base font-semibold mb-2">{item.label}</div>
              <div className="text-sm text-muted-foreground">{item.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
