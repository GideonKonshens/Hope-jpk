import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Microscope, GraduationCap } from 'lucide-react';
import elementaryImage from '@assets/generated_images/Elementary_school_classroom_e55829fb.png';
import middleSchoolImage from '@assets/generated_images/Middle_school_classroom_1c3e57fe.png';
import highSchoolImage from '@assets/generated_images/High_school_science_lab_1222df8b.png';

export default function AcademicPrograms() {
  const programs = [
    {
      icon: BookOpen,
      title: 'Elementary School',
      grades: 'Grades K-5',
      description: 'Building strong foundations in core subjects with hands-on learning experiences that spark curiosity and love for learning.',
      image: elementaryImage,
    },
    {
      icon: Microscope,
      title: 'Middle School',
      grades: 'Grades 6-8',
      description: 'Developing critical thinking and independence through challenging curriculum and diverse extracurricular opportunities.',
      image: middleSchoolImage,
    },
    {
      icon: GraduationCap,
      title: 'High School',
      grades: 'Grades 9-12',
      description: 'Preparing students for college and career success with advanced courses, AP classes, and personalized guidance.',
      image: highSchoolImage,
    },
  ];

  return (
    <section id="academics" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-academics-title">
            Academic Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive education from elementary through high school, tailored to each developmental stage
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden hover-elevate" data-testid={`card-program-${index}`}>
              <div className="aspect-video overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center mb-4">
                  <program.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm text-primary font-semibold mb-3">{program.grades}</p>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <Button variant="ghost" className="group" data-testid={`button-explore-${index}`}>
                  Explore Program
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
