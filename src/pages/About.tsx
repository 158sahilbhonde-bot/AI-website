import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Users, Award, Heart } from "lucide-react";
import teamImage from "@/assets/team.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every interaction is designed around your unique health needs and wellbeing",
    },
    {
      icon: Award,
      title: "Excellence in Technology",
      description: "Leveraging cutting-edge AI to provide accurate and reliable healthcare guidance",
    },
    {
      icon: Users,
      title: "Accessibility for All",
      description: "Making quality healthcare accessible to everyone, anywhere, anytime",
    },
    {
      icon: Target,
      title: "Continuous Innovation",
      description: "Constantly evolving to bring you the best in virtual healthcare",
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
              About AIHealthHappiness
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Revolutionizing healthcare through artificial intelligence and compassionate care
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At AIHealthHappiness, we believe that everyone deserves access to quality healthcare guidance, 
                regardless of location or time constraints. Our mission is to bridge the gap between traditional 
                healthcare and modern technology, providing instant, reliable medical support when you need it most.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine advanced artificial intelligence with medical expertise to create a virtual healthcare 
                companion that's available 24/7. Our platform is designed to complement traditional healthcare 
                services, offering preliminary guidance, health information, and peace of mind.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img
                src={teamImage}
                alt="Healthcare Team"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-lg transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-card/50"
                >
                  <div className="bg-gradient-to-br from-primary to-accent p-3 rounded-xl w-fit mb-4 shadow-md">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "24/7", label: "Availability" },
              { number: "100K+", label: "Consultations" },
              { number: "95%", label: "Satisfaction Rate" },
              { number: "50+", label: "Languages" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Powered by Advanced AI</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our virtual doctor utilizes state-of-the-art artificial intelligence technology trained on vast 
              medical databases and updated continuously with the latest healthcare information. We prioritize 
              accuracy, privacy, and user experience to deliver healthcare guidance you can trust.
            </p>
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50">
              <p className="text-muted-foreground italic">
                "AIHealthHappiness represents the future of accessible healthcare. By combining cutting-edge 
                technology with a human-centered approach, we're making quality health guidance available to 
                everyone, everywhere."
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
