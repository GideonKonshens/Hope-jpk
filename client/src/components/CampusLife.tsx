import { Button } from '@/components/ui/button';
import { Camera } from 'lucide-react';
import libraryImage from '@assets/generated_images/School_library_interior_9d672cb3.png';
import gymImage from '@assets/generated_images/School_gymnasium_sports_facility_849fa271.png';
import labImage from '@assets/generated_images/Science_laboratory_facility_34c7f4ba.png';
import theaterImage from '@assets/generated_images/Performing_arts_theater_d1d0700b.png';

export default function CampusLife() {
  const facilities = [
    { image: libraryImage, title: 'Modern Library', description: 'Extensive collection and study spaces' },
    { image: gymImage, title: 'Sports Facilities', description: 'State-of-the-art gymnasium' },
    { image: labImage, title: 'Science Labs', description: 'Advanced research equipment' },
    { image: theaterImage, title: 'Performing Arts', description: 'Professional theater space' },
  ];

  return (
    <section id="campus" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-campus-title">
            Campus Life & Facilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            World-class facilities designed to enhance learning and student development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-md hover-elevate border"
              data-testid={`facility-${index}`}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-background">
                <h3 className="font-semibold mb-1">{facility.title}</h3>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" data-testid="button-virtual-tour">
            <Camera className="mr-2 h-5 w-5" />
            Take a Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
}
