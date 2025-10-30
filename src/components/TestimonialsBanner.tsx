import { useEffect, useRef } from "react";
import avalosImg from "@/assets/avalos.png";

interface Testimonial {
  quote: string;
  author: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Amazing platform! The variety of doctors available is extensive, covering numerous specialties, which makes it easy to find the right professional for our client needs.",
    author: "Yulissa Avalos",
    image: avalosImg
  },
  {
    quote: "Amazing platform! The variety of doctors available is extensive, covering numerous specialties, which makes it easy to find the right professional for our client needs.",
    author: "Yulissa Avalos",
    image: avalosImg
  },
  {
    quote: "Amazing platform! The variety of doctors available is extensive, covering numerous specialties, which makes it easy to find the right professional for our client needs.",
    author: "Yulissa Avalos",
    image: avalosImg
  },
];

const TestimonialsBanner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    
    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 1;
        }
      }, 30);
    };

    startScrolling();

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="w-full bg-card/30 backdrop-blur-sm border-y border-border/50 py-8 overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="inline-flex flex-col items-start px-8 min-w-[500px] opacity-70"
          >
            <p className="text-base italic text-foreground mb-3 whitespace-normal">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-3">
              {testimonial.image && (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
              )}
              <p className="text-sm font-semibold text-muted-foreground">
                — {testimonial.author}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsBanner;
