import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Heart,
  Brain,
  Pill,
  Activity,
  MessageCircle,
  FileText,
  Users,
  Clock,
  Shield,
  Globe,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Symptom Assessment",
      description: "Get preliminary guidance on your symptoms and understand when to seek immediate care",
      features: ["AI-powered analysis", "Instant feedback", "Risk assessment"],
    },
    {
      icon: Heart,
      title: "General Health Guidance",
      description: "Receive advice on maintaining wellness and managing common health concerns",
      features: ["Preventive care tips", "Lifestyle recommendations", "Health monitoring"],
    },
    {
      icon: Pill,
      title: "Medication Information",
      description: "Learn about medications, potential interactions, and proper usage",
      features: ["Drug information", "Interaction warnings", "Dosage guidance"],
    },
    {
      icon: Brain,
      title: "Mental Health Support",
      description: "Access resources and guidance for mental wellbeing and emotional health",
      features: ["Stress management", "Coping strategies", "Resource referrals"],
    },
    {
      icon: Activity,
      title: "Chronic Condition Management",
      description: "Get support for managing ongoing health conditions and treatments",
      features: ["Tracking assistance", "Lifestyle tips", "Monitoring guidance"],
    },
    {
      icon: FileText,
      title: "Health Records Review",
      description: "Understand your test results and medical reports with clear explanations",
      features: ["Result interpretation", "Follow-up advice", "Report analysis"],
    },
  ];

  const additionalFeatures = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Access healthcare guidance any time of day or night",
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your health information is encrypted and confidential",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate in your preferred language",
    },
    {
      icon: Users,
      title: "Family Care",
      description: "Get guidance for your entire family's health needs",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Comprehensive virtual healthcare services tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border/50 bg-gradient-to-br from-card to-card/50"
                >
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl w-fit mb-4 shadow-md">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience healthcare that adapts to your lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 text-center hover:shadow-lg transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-card/50"
                >
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl w-fit mb-4 mx-auto shadow-md">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold">Important Notice</h3>
              </div>
              <p className="text-muted-foreground">
                Our virtual doctor service is designed to provide health information and preliminary guidance. 
                It is not a substitute for professional medical advice, diagnosis, or treatment. Always seek 
                the advice of qualified healthcare providers with questions you may have regarding medical 
                conditions or treatments.
              </p>
              <p className="text-muted-foreground">
                In case of a medical emergency, please call your local emergency services immediately.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground">
              Experience the convenience of virtual healthcare today
            </p>
            <Link to="/virtual-doctor">
              <Button variant="hero" size="xl" className="rounded-full">
                Talk with Virtual Doctor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
