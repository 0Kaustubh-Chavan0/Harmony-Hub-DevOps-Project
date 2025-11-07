import { Card } from "@/components/ui/card";
import { Music, Users, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Harmony Hub</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted partner in musical excellence since 2010
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Harmony Hub was founded by a group of passionate musicians who wanted to make 
              high-quality instruments accessible to everyone. What started as a small shop has 
              grown into a trusted online destination for musicians worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe that every musician deserves access to premium instruments that inspire 
              creativity and help them reach their full potential. Our carefully curated collection 
              features only the finest instruments from renowned manufacturers.
            </p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Music,
              title: "Premium Selection",
              desc: "Handpicked instruments from the world's best manufacturers",
            },
            {
              icon: Users,
              title: "Expert Team",
              desc: "Professional musicians ready to help you find your sound",
            },
            {
              icon: Award,
              title: "Quality Assured",
              desc: "Every instrument is tested and verified before shipping",
            },
            {
              icon: Heart,
              title: "Passion Driven",
              desc: "We're musicians serving musicians with dedication",
            },
          ].map((value, i) => (
            <Card key={i} className="p-6 text-center hover:shadow-glow transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.desc}</p>
            </Card>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-hero opacity-95" />
          <div className="relative p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Over 50,000 musicians trust Harmony Hub for their instruments. 
              Be part of a community that celebrates music and creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
