import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@assets/generated_images/School_campus_exterior_hero_a39b0655.png';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4" data-testid="text-hero-title">
          Hope Senior School
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-8 font-medium" data-testid="text-hero-tagline">
          Inspiring Excellence Since 1975
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground border border-primary-border"
            data-testid="button-schedule-visit"
          >
            Schedule a Visit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-background/10 backdrop-blur-sm text-white border-white/30 hover:bg-background/20"
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
          <div className="text-center" data-testid="stat-students">
            <div className="text-3xl md:text-4xl font-bold">500+</div>
            <div className="text-sm md:text-base text-white/90 mt-1">Students</div>
          </div>
          <div className="text-center" data-testid="stat-ratio">
            <div className="text-3xl md:text-4xl font-bold">25:1</div>
            <div className="text-sm md:text-base text-white/90 mt-1">Student-Teacher Ratio</div>
          </div>
          <div className="text-center" data-testid="stat-college">
            <div className="text-3xl md:text-4xl font-bold">95%</div>
            <div className="text-sm md:text-base text-white/90 mt-1">College Acceptance</div>
          </div>
          <div className="text-center" data-testid="stat-excellence">
            <div className="text-3xl md:text-4xl font-bold">50+</div>
            <div className="text-sm md:text-base text-white/90 mt-1">Years Excellence</div>
          </div>
        </div>
      </div>
    </section>
  );
}
