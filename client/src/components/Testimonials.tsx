import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import studentImage1 from '@assets/generated_images/Student_testimonial_portrait_one_f91ec25b.png';
import studentImage2 from '@assets/generated_images/Student_testimonial_portrait_two_a3955853.png';
import parentImage from '@assets/generated_images/Parent_testimonial_portrait_975d1232.png';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Hope Senior School transformed my daughter's education. The teachers are incredibly dedicated, and the programs have helped her discover her passion for science.",
      name: "Michael Rodriguez",
      role: "Parent",
      image: parentImage,
    },
    {
      quote: "I love how supportive everyone is here. The small class sizes mean teachers really know each student, and I've made lifelong friends.",
      name: "Emily Chen",
      role: "Student, Grade 11",
      image: studentImage1,
    },
    {
      quote: "The college prep program at Hope helped me get accepted to my dream university. I'm grateful for the guidance and opportunities provided.",
      name: "David Thompson",
      role: "Student, Grade 12",
      image: studentImage2,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-testimonials-title">
            What Our Community Says
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear from students and parents about their Hope Senior School experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6" data-testid={`card-testimonial-${index}`}>
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-base mb-6 leading-relaxed">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
