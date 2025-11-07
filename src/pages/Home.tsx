import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Link } from "react-router-dom";
import { Music, Award, Truck, Shield } from "lucide-react";
import heroImage from "@/assets/hero-instruments.jpg";

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Musical Instruments"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="container relative py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Find Your Perfect
              <br />
              <span className="text-white drop-shadow-glow">Instrument</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl">
              Discover premium musical instruments for every artist. From guitars to keyboards, 
              find the perfect sound for your musical journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
                  Shop Now
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Music, title: "Premium Quality", desc: "Handpicked instruments" },
              { icon: Award, title: "Expert Advice", desc: "Professional guidance" },
              { icon: Truck, title: "Free Shipping", desc: "On orders over $500" },
              { icon: Shield, title: "Warranty", desc: "2-year protection" },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Instruments</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our handpicked selection of premium musical instruments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/products">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-95" />
        <div className="container relative text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Musical Journey?</h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of musicians who trust Harmony Hub for their instruments
          </p>
          <Link to="/products">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
              Explore Collection
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
