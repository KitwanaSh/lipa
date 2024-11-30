import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "../components/ui/button";
import { ArrowRight, Send, Shield, Globe, Clock } from 'lucide-react';
import AnimatedContainer from '../components/ui/animated-container';

const Landing: React.FC = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Send className="w-6 h-6" />,
      title: "Fast Transfers",
      description: "Send money across borders instantly with competitive rates"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Bank-grade security for all your transactions"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Send money to multiple countries in East Africa"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Service",
      description: "Transfer money anytime, anywhere"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Business Owner",
      content: "Lipa has transformed how I send money to my suppliers across East Africa. Fast and reliable!"
    },
    {
      name: "John D.",
      role: "Student",
      content: "The best platform for receiving my allowance from home. The rates are unbeatable!"
    },
    {
      name: "Mary W.",
      role: "Freelancer",
      content: "Getting paid by international clients has never been easier. Thank you Lipa!"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero dark:bg-gradient-primary">
        <div className="container mx-auto px-4 py-20 sm:py-32">
          <AnimatedContainer className="flex flex-col items-center text-center space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Send Money Across Borders
              <span className="text-primary dark:text-primary-light block">Without Limits</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
              Fast, secure, and affordable cross-border payments for East Africa.
              Join thousands of satisfied customers sending money with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/auth')} 
                className="bg-gradient-primary hover:bg-gradient-cta text-white transition-all duration-300 hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="hover:bg-primary hover:text-white transition-all duration-300"
              >
                Learn More
              </Button>
            </div>
          </AnimatedContainer>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-muted/50 dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <AnimatedContainer delay={100}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Why Choose Lipa?
            </h2>
          </AnimatedContainer>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedContainer 
                key={index} 
                delay={200 + index * 100}
                className="transform transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background dark:bg-background-dark shadow-sm border border-gray-200 dark:border-gray-800">
                  <div className="p-3 rounded-full bg-gradient-secondary text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4">
          <AnimatedContainer delay={600}>
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              What Our Users Say
            </h2>
          </AnimatedContainer>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedContainer 
                key={index} 
                delay={700 + index * 100}
                className="transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-6 rounded-lg bg-muted/30 dark:bg-background-dark border hover:border-primary">
                  <p className="text-lg mb-4">{testimonial.content}</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-cta text-white">
        <AnimatedContainer delay={1000} className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who trust Lipa for their cross-border payments.
            Sign up now and experience the difference.
          </p>
          <Button
            size="lg"
            variant="secondary"
            onClick={() => navigate('/auth')}
            className="bg-white text-primary hover:bg-opacity-90 transition-all duration-300 hover:scale-105"
          >
            Create Your Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedContainer>
      </section>
    </div>
  );
};

export default Landing;
