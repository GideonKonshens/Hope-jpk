import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';
import sportsImage from '@assets/generated_images/Sports_day_event_7a9adf48.png';
import scienceImage from '@assets/generated_images/Science_fair_event_05b7b2c6.png';
import gradImage from '@assets/generated_images/Graduation_ceremony_setup_278700d1.png';

export default function NewsEvents() {
  const news = [
    {
      image: gradImage,
      date: 'June 15, 2024',
      title: 'Graduation Ceremony 2024',
      excerpt: 'Celebrating our graduating class and their remarkable achievements. Join us for this special occasion.',
    },
    {
      image: scienceImage,
      date: 'May 8, 2024',
      title: 'Annual Science Fair Winners',
      excerpt: 'Our students showcased innovative projects at the science fair, with outstanding presentations.',
    },
    {
      image: sportsImage,
      date: 'April 22, 2024',
      title: 'Spring Sports Day Success',
      excerpt: 'Students competed in various athletic events, demonstrating teamwork and sportsmanship.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-news-title">
            News & Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest happenings at Hope Senior School
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-news-${index}`}>
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <Button variant="ghost" size="sm" className="group" data-testid={`button-read-more-${index}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" data-testid="button-view-all-news">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
}
