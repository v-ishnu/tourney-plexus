
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, LayoutGrid, PlusCircle, Trophy, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedContainer, GlassCard, PageSubtitle, PageTitle } from '@/components/ui-components';
import EventCard, { EventCardProps } from '@/components/EventCard';

// Mock data
const mockStats = [
  { label: 'Total Tournaments', value: 12, icon: Trophy, color: 'bg-tournament-blue/10 text-tournament-blue' },
  { label: 'Active Slots', value: 24, icon: LayoutGrid, color: 'bg-tournament-green/10 text-tournament-green' },
  { label: 'Participants', value: 342, icon: Users, color: 'bg-tournament-purple/10 text-tournament-purple' },
  { label: 'Upcoming Events', value: 5, icon: Calendar, color: 'bg-tournament-orange/10 text-tournament-orange' },
];

const mockEvents: EventCardProps[] = [
  { 
    id: '1', 
    title: 'BGMI Pro League Season 3', 
    date: 'Aug 25, 2023', 
    participantsCount: 156, 
    slotsCount: 6, 
    status: 'upcoming' 
  },
  { 
    id: '2', 
    title: 'Weekend Warriors Cup', 
    date: 'Aug 15, 2023', 
    participantsCount: 98, 
    slotsCount: 4, 
    status: 'live' 
  },
  { 
    id: '3', 
    title: 'Monthly Mayhem', 
    date: 'Aug 5, 2023', 
    participantsCount: 120, 
    slotsCount: 5, 
    status: 'completed' 
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="container p-4 lg:p-6 max-w-7xl mx-auto space-y-8">
      <AnimatedContainer>
        <PageTitle>Dashboard</PageTitle>
        <PageSubtitle>Welcome back, Tournament Organizer</PageSubtitle>
      </AnimatedContainer>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {mockStats.map((stat, index) => (
          <AnimatedContainer key={stat.label} animation="fade-up" delay={index * 100}>
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                    <h3 className="text-2xl font-semibold mt-1">{stat.value}</h3>
                  </div>
                  <div className={`${stat.color} p-3 rounded-xl`}>
                    <stat.icon className="h-5 w-5" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedContainer>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AnimatedContainer animation="fade-up" delay={100}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Recent Tournaments</h2>
              <Button asChild variant="ghost" size="sm">
                <Link to="/events">
                  <span>View All</span>
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockEvents.map((event, index) => (
                <AnimatedContainer key={event.id} animation="fade-up" delay={150 + index * 100}>
                  <EventCard {...event} />
                </AnimatedContainer>
              ))}
            </div>
          </AnimatedContainer>
        </div>
        
        <div className="space-y-6">
          <AnimatedContainer animation="fade-up" delay={300}>
            <GlassCard>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks you might want to perform</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full justify-start" asChild>
                  <Link to="/events/new">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Create New Tournament
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/events">
                    <Trophy className="mr-2 h-4 w-4" />
                    Manage Tournaments
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/slots">
                    <LayoutGrid className="mr-2 h-4 w-4" />
                    Manage Slots
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/participants">
                    <Users className="mr-2 h-4 w-4" />
                    View Participants
                  </Link>
                </Button>
              </CardContent>
            </GlassCard>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-up" delay={400}>
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Schedule</CardTitle>
                <CardDescription>Your next tournaments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockEvents
                  .filter(e => e.status === 'upcoming')
                  .map((event, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b last:border-0">
                      <div>
                        <p className="font-medium">{event.title}</p>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/event/${event.id}`}>
                          <span>View</span>
                        </Link>
                      </Button>
                    </div>
                  ))}
              </CardContent>
            </Card>
          </AnimatedContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
