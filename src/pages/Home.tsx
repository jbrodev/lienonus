import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Clock, Users, Shield, Award, ArrowRight } from "lucide-react";
const Home = () => {
  const features = [{
    icon: Clock,
    title: "24/7 Availability",
    description: "Access our network of medical providers any time, day or night"
  }, {
    icon: Users,
    title: "Elite Network",
    description: "Carefully vetted medical professionals across all specialties"
  }, {
    icon: Shield,
    title: "Lien Acceptance",
    description: "All providers accept liens - get care now, pay later"
  }, {
    icon: Award,
    title: "Trusted Service",
    description: "Dedicated support for both patients and legal professionals"
  }];
  return <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">Lien On Us</span>
              <br />
              When You Need It Most
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">An elite network of medical providers all accepting liens. Get the care you need now.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/providers">
                  Find a Provider <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link to="/referral">Make a Referral</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Lien On Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">We connect injured patients with top-tier medical professionals who understand lien-based care. Trusted by top professionals for 25+ years!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <Card key={index} className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="bg-gradient-to-r from-primary to-secondary border-0 text-primary-foreground">
            <CardContent className="py-16 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Have You Been Injured?
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
                Lien On Us is your 24/7 resource for connecting with medical providers who accept liens. 
                Get the care you need without upfront costs.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg">
                <Link to="/referral">
                  Submit a Referral Now <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Lien On Us. All rights reserved.</p>
          <p className="mt-2 text-sm">24/7 Medical Provider Network</p>
        </div>
      </footer>
    </div>;
};
export default Home;