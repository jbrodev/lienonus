import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ReferralForm from "@/components/ReferralForm";
import TestimonialsBanner from "@/components/TestimonialsBanner";
import { Clock, Users, Shield, Award, ArrowRight, Phone, Mail, Facebook, Instagram } from "lucide-react";
import availabilityImg from "@/assets/24-7-availability.jpg";
import networkImg from "@/assets/elite-network.jpg";
import lienImg from "@/assets/lien-acceptance.jpg";
import serviceImg from "@/assets/trusted-service.jpg";
import logo from "@/assets/logo.png";
import doctorHero from "@/assets/doctor-hero.jpg";

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access our network of medical providers any time, day or night",
      image: availabilityImg,
    },
    {
      icon: Users,
      title: "Elite Network",
      description: "Carefully vetted medical professionals across all specialties",
      image: networkImg,
    },
    {
      icon: Shield,
      title: "Lien Acceptance",
      description: "All providers accept liens - get care now, pay later",
      image: lienImg,
    },
    {
      icon: Award,
      title: "Trusted Service",
      description: "Dedicated support for both patients and legal professionals",
      image: serviceImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${doctorHero})` }}
        />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <img 
              src={logo} 
              alt="Lien On Us" 
              className="mx-auto w-full max-w-md md:max-w-lg mb-1"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
                Lien On Us
              </span>
              <br />
              When You Need It Most
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">
              Accidents Happen, We're Here to Help!
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              An elite network of medical providers all accepting liens. Get the care you need now.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="text-lg">
                <Link to="/providers">
                  Browse All Providers <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Why Choose Lien On Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We connect injured patients with elite medical professionals who understand lien-based care. Trusted by top professionals for 25+ years!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden relative"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-15"
                  style={{ backgroundImage: `url(${feature.image})` }}
                />
                <CardContent className="pt-6 text-center space-y-4 relative z-10">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Banner */}
      <TestimonialsBanner />

      {/* Referral Form Section */}
      <section id="referral-form" className="py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Make a Referral
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-2">
              Connect your injured client with our elite network of medical providers
            </p>
            <p className="text-base font-semibold text-foreground">
              Free for attorneys - No cost to send referrals
            </p>
          </div>
          <ReferralForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Contact Info */}
            <div className="text-center md:text-left space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
              <div className="space-y-2">
                <a 
                  href="tel:323-873-6336" 
                  className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone size={18} />
                  <span>323-873-6336</span>
                </a>
                <a 
                  href="mailto:referrals@lienonusmedical.com" 
                  className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={18} />
                  <span>referrals@lienonusmedical.com</span>
                </a>
              </div>
            </div>

            {/* Service Area */}
            <div className="text-center space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Service Area</h3>
              <p className="text-muted-foreground">
                Proudly serving all of California
              </p>
              <p className="text-sm text-muted-foreground">
                24/7 Medical Provider Network
              </p>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-right space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
              <div className="flex items-center justify-center md:justify-end gap-4">
                <a 
                  href="https://www.facebook.com/lienonusmedical/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:scale-110 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/lienonusmed/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center text-primary hover:scale-110 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-6 border-t border-border text-muted-foreground">
            <p>&copy; 2024 Lien On Us. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
