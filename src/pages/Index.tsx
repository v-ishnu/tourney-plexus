
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Calendar, ChevronRight, LayoutGrid, Shield, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedContainer } from '@/components/ui-components';

const features = [
  {
    title: 'Tournament Management',
    description: 'Create and manage tournaments with ease. Set prize pools, registration fees, and more.',
    icon: Trophy,
    color: 'bg-tournament-blue/10 text-tournament-blue',
  },
  {
    title: 'Slot Organization',
    description: 'Organize your tournament into multiple slots with custom schedules and participant limits.',
    icon: LayoutGrid,
    color: 'bg-tournament-green/10 text-tournament-green',
  },
  {
    title: 'Participant Tracking',
    description: 'Track participants, teams, and their performance throughout your tournaments.',
    icon: Users,
    color: 'bg-tournament-purple/10 text-tournament-purple',
  },
  {
    title: 'Schedule Management',
    description: 'Manage your tournament schedule with an intuitive calendar interface.',
    icon: Calendar,
    color: 'bg-tournament-orange/10 text-tournament-orange',
  },
  {
    title: 'Secure Administration',
    description: 'Full administrative control with secure permissions and role management.',
    icon: Shield,
    color: 'bg-tournament-blue/10 text-tournament-blue',
  },
  {
    title: 'Insightful Analytics',
    description: 'Get detailed analytics about your tournaments, participants, and overall engagement.',
    icon: BarChart,
    color: 'bg-tournament-green/10 text-tournament-green',
  },
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b border-border bg-white/80 backdrop-blur-sm">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-tournament-blue text-white p-1 rounded-md">
              <Trophy className="h-6 w-6" />
            </div>
            <span className="font-semibold text-xl">Tourney Plexus</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link to="/dashboard">Dashboard</Link>
            </Button>
            <Button asChild>
              <Link to="/dashboard">
                Login 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        <section className="py-16 md:py-24 px-4">
          <div className="container max-w-7xl mx-auto">
            <AnimatedContainer className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                The Ultimate <span className="text-tournament-blue">BGMI Tournament</span> Management Platform
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Organize, manage, and run BGMI tournaments with ease. From registration to results, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/dashboard">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </AnimatedContainer>
          </div>
        </section>
        
        <section className="py-16 bg-secondary/50">
          <div className="container max-w-7xl mx-auto px-4">
            <AnimatedContainer className="text-center mb-12" animation="fade-up">
              <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to organize successful BGMI tournaments
              </p>
            </AnimatedContainer>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <AnimatedContainer 
                  key={feature.title} 
                  animation="fade-up" 
                  delay={100 + index * 100}
                >
                  <Card className="h-full card-hover">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className={`${feature.color} p-3 rounded-xl w-fit mb-4`}>
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground flex-grow">{feature.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedContainer>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 px-4">
          <div className="container max-w-7xl mx-auto">
            <div className="bg-primary/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <AnimatedContainer animation="fade-up" className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Ready to Organize Your Next Tournament?</h2>
                <p className="text-muted-foreground mb-6">
                  Start creating professional BGMI tournaments today and take your esports events to the next level.
                </p>
                <Button size="lg" asChild>
                  <Link to="/dashboard">
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </AnimatedContainer>
              
              <AnimatedContainer animation="fade-up" delay={200} className="flex-1 max-w-md">
                <div className="bg-white p-6 rounded-xl shadow-card">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-medium">BGMI Pro League</h3>
                    <span className="text-xs font-medium px-2 py-0.5 bg-tournament-blue/10 text-tournament-blue rounded-full">
                      Upcoming
                    </span>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date</span>
                      <span>Sep 15, 2023</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Prize Pool</span>
                      <span>₹100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Slots</span>
                      <span>8</span>
                    </div>
                  </div>
                  
                  <Button className="w-full">View Details</Button>
                </div>
              </AnimatedContainer>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-secondary py-12 px-4 border-t border-border">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-tournament-blue text-white p-1 rounded-md">
                  <Trophy className="h-5 w-5" />
                </div>
                <span className="font-semibold text-lg">Tourney Plexus</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                The ultimate platform for BGMI tournament organizers to create and manage professional esports events.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</Link></li>
                <li><Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors">Tournaments</Link></li>
                <li><Link to="/slots" className="text-muted-foreground hover:text-foreground transition-colors">Slots</Link></li>
                <li><Link to="/participants" className="text-muted-foreground hover:text-foreground transition-colors">Participants</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-muted-foreground">support@tourneyplexus.com</li>
                <li className="text-muted-foreground">+91 9876543210</li>
                <li className="text-muted-foreground">Mumbai, India</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2023 Tourney Plexus. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="sm">Terms</Button>
              <Button variant="ghost" size="sm">Privacy</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
