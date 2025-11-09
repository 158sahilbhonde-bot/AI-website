import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Clock, Shield, Video, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DisclaimerPopup from "@/components/DisclaimerPopup";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access healthcare support anytime, day or night",
    },
    {
      icon: Video,
      title: "AI-Powered Consultations",
      description: "Advanced virtual assistant technology for accurate guidance",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health information is protected and confidential",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Tailored health recommendations based on your needs",
    },
  ];

  const benefits = [
    "Instant medical advice and symptom assessment",
    "Medication information and reminders",
    "Health tracking and wellness tips",
    "Referrals to specialists when needed",
    "Mental health support and guidance",
    "Multilingual support available",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <DisclaimerPopup />
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Heart className="h-4 w-4" />
                Advanced Virtual Healthcare
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
              Your Health, Our Priority
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Experience the future of healthcare with our AI-powered virtual doctor. 
              Get instant medical guidance, personalized care, and peace of mind—anytime, anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Link to="/virtual-doctor">
                <Button variant="hero" size="xl" className="rounded-full group">
                  Talk with Virtual Assistant
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+18665204146">
                <Button variant="hero" size="xl" className="rounded-full group">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 24/7 Medical Assistant
                </Button>
              </a>
              <Link to="/about">
                <Button variant="outline" size="xl" className="rounded-full">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Mission
            </h2>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              AI Health & Happiness is part of the Shah Happiness Foundation, a charitable organization dedicated to bringing "Goodness to All" through accessible healthcare, education, and community support. We believe that quality health information should be available to everyone, regardless of their location, language, literacy level, or economic status. Our AI-powered medical assistants provide free, 24/7 health guidance in multiple Indian languages, making healthcare more accessible to underserved communities. Through this platform, we aim to empower individuals with knowledge about their health, help them make informed decisions, and guide them to seek professional medical care when needed.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              See How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our demo to see how AI Health & Happiness can help you
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src="https://drive.google.com/file/d/1b6OeM4TXtqJ-tHNnyqA3jVLEuv7QftGh/preview"
                allow="autoplay; fullscreen"
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
                style={{ minHeight: '500px' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Why Choose AIHealthHappiness?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Revolutionary healthcare at your fingertips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-to-br from-card to-card/50"
                >
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl w-fit mb-4 shadow-md">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Comprehensive Healthcare Support
              </h2>
              <p className="text-lg text-muted-foreground">
                Our virtual doctor provides a wide range of healthcare services to support your wellbeing and help you make informed health decisions.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link to="/virtual-doctor">
                <Button variant="hero" size="lg" className="rounded-full mt-4">
                  Get Started Now
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <Card className="relative p-8 shadow-xl border-border/50">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      AI
                    </div>
                    <div>
                      <p className="font-semibold">Virtual Doctor Available</p>
                      <p className="text-sm text-muted-foreground">Ready to assist you</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {["Analyzing symptoms...", "Providing recommendations...", "Connecting you to care..."].map((text, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                        <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                        <span className="text-sm text-muted-foreground">{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-90" />
            <div className="relative z-10 p-12 lg:p-20 text-center text-white">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Ready to Transform Your Healthcare Experience?
              </h2>
              <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of users who trust AIHealthHappiness for their healthcare needs
              </p>
              <Link to="/virtual-doctor">
                <Button variant="glass" size="xl" className="rounded-full text-white border-white/30">
                  Start Your Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
