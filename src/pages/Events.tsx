
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimatedContainer, PageSubtitle, PageTitle, StatusBadge } from '@/components/ui-components';
import EventCard, { EventCardProps } from '@/components/EventCard';
import CreateEventModal, { EventFormData } from '@/components/CreateEventModal';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

// Mock data
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
  { 
    id: '4', 
    title: 'Summer Showdown', 
    date: 'July 28, 2023', 
    participantsCount: 80, 
    slotsCount: 3, 
    status: 'completed' 
  },
  { 
    id: '5', 
    title: 'Squad Battle Royale', 
    date: 'Aug 30, 2023', 
    participantsCount: 0, 
    slotsCount: 0, 
    status: 'upcoming' 
  },
  { 
    id: '6', 
    title: 'Esports Championship', 
    date: 'Sep 05, 2023', 
    participantsCount: 0, 
    slotsCount: 0, 
    status: 'upcoming' 
  },
];

const Events: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredEvents = mockEvents.filter(event => {
    if (activeTab === 'all') return true;
    return event.status === activeTab;
  });
  
  const handleCreateEvent = (data: EventFormData) => {
    console.log('Creating event:', data);
    toast.success('Tournament created successfully!');
    setModalOpen(false);
  };
  
  return (
    <div className="container p-4 lg:p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <AnimatedContainer>
          <PageTitle>Tournaments</PageTitle>
          <PageSubtitle>Manage your BGMI tournaments</PageSubtitle>
        </AnimatedContainer>
        
        <AnimatedContainer animation="fade-in" delay={200}>
          <Button onClick={() => setModalOpen(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Create Tournament
          </Button>
        </AnimatedContainer>
      </div>
      
      <AnimatedContainer animation="fade-up" delay={100}>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full sm:w-auto grid-cols-4 mb-6">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value={activeTab} className="mt-0">
            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event, index) => (
                  <AnimatedContainer key={event.id} animation="fade-up" delay={150 + index * 50}>
                    <EventCard {...event} />
                  </AnimatedContainer>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">No tournaments found</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  You don't have any {activeTab !== 'all' ? activeTab : ''} tournaments yet. 
                  Create your first tournament to get started.
                </p>
                <Button onClick={() => setModalOpen(true)}>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Tournament
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </AnimatedContainer>
      
      <CreateEventModal 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
        onSubmit={handleCreateEvent} 
      />
    </div>
  );
};

export default Events;
