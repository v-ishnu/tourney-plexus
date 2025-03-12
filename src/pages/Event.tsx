
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Edit, Plus, Share, Trash2, Trophy, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedContainer, PageTitle, StatusBadge } from '@/components/ui-components';
import SlotCard, { SlotCardProps } from '@/components/SlotCard';
import CreateSlotModal, { SlotFormData } from '@/components/CreateSlotModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

// Mock event data
const mockEvent = {
  id: '1',
  title: 'BGMI Pro League Season 3',
  description: 'The premier BGMI tournament featuring top players competing for a prize pool of ₹100,000.',
  date: 'Aug 25, 2023',
  status: 'upcoming' as const,
  type: 'Solo',
  registrationFee: '₹100',
  maxParticipants: 200,
  currentParticipants: 156,
  prizePool: '₹100,000',
};

// Mock slots
const mockSlots: SlotCardProps[] = [
  {
    id: '1',
    name: 'Qualification Round 1',
    time: '10:00 AM',
    maxParticipants: 50,
    currentParticipants: 42,
  },
  {
    id: '2',
    name: 'Qualification Round 2',
    time: '2:00 PM',
    maxParticipants: 50,
    currentParticipants: 50,
  },
  {
    id: '3',
    name: 'Semi Finals',
    time: '6:00 PM',
    maxParticipants: 25,
    currentParticipants: 20,
  },
  {
    id: '4',
    name: 'Finals',
    time: '9:00 PM',
    maxParticipants: 10,
    currentParticipants: 0,
  },
];

const Event: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [slots, setSlots] = useState(mockSlots);
  const [slotModalOpen, setSlotModalOpen] = useState(false);
  const [editingSlot, setEditingSlot] = useState<SlotFormData | undefined>();
  
  // In a real app, you would fetch the event by ID
  const event = mockEvent;
  
  const handleCreateSlot = (data: SlotFormData) => {
    if (data.id) {
      // Edit existing slot
      setSlots(prev => 
        prev.map(slot => 
          slot.id === data.id 
            ? { 
                ...slot, 
                name: data.name, 
                time: data.time, 
                maxParticipants: parseInt(data.maxParticipants)
              } 
            : slot
        )
      );
      toast.success('Slot updated successfully!');
    } else {
      // Create new slot
      const newSlot: SlotCardProps = {
        id: Date.now().toString(),
        name: data.name,
        time: data.time,
        maxParticipants: parseInt(data.maxParticipants),
        currentParticipants: 0,
      };
      setSlots(prev => [...prev, newSlot]);
      toast.success('Slot created successfully!');
    }
    setSlotModalOpen(false);
    setEditingSlot(undefined);
  };
  
  const handleEditSlot = (id: string) => {
    const slot = slots.find(slot => slot.id === id);
    if (slot) {
      setEditingSlot({
        id: slot.id,
        name: slot.name,
        time: slot.time,
        maxParticipants: slot.maxParticipants.toString(),
        mapType: 'erangel', // Default value
        matchType: 'classic', // Default value
      });
      setSlotModalOpen(true);
    }
  };
  
  return (
    <div className="container p-4 lg:p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-2 mb-6">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/events">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <StatusBadge status={event.status} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AnimatedContainer>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <PageTitle>{event.title}</PageTitle>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </div>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-up" delay={100}>
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-up" delay={200}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Tournament Slots</h2>
              <Button size="sm" onClick={() => setSlotModalOpen(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add Slot
              </Button>
            </div>
            
            {slots.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {slots.map((slot, index) => (
                  <AnimatedContainer key={slot.id} animation="fade-up" delay={300 + index * 50}>
                    <SlotCard {...slot} onEdit={handleEditSlot} />
                  </AnimatedContainer>
                ))}
              </div>
            ) : (
              <Card className="p-8 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <LayoutGrid className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">No slots created yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Add slots to your tournament to organize matches.
                  </p>
                  <Button onClick={() => setSlotModalOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Slot
                  </Button>
                </div>
              </Card>
            )}
          </AnimatedContainer>
        </div>
        
        <div className="space-y-6">
          <AnimatedContainer animation="fade-up" delay={150}>
            <Card>
              <CardContent className="p-6 space-y-6">
                <h3 className="font-medium text-lg">Tournament Details</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-medium">{event.type}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Registration Fee</span>
                    <span className="font-medium">{event.registrationFee}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Prize Pool</span>
                    <span className="font-medium">{event.prizePool}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Participants</span>
                    <span className="font-medium">{event.currentParticipants}/{event.maxParticipants}</span>
                  </div>
                  
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Registration</span>
                      <span>{Math.round((event.currentParticipants / event.maxParticipants) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-tournament-blue rounded-full"
                        style={{ width: `${(event.currentParticipants / event.maxParticipants) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-up" delay={250}>
            <Card>
              <CardContent className="p-6">
                <Tabs defaultValue="participants">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="participants">Participants</TabsTrigger>
                    <TabsTrigger value="results">Results</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="participants" className="pt-4">
                    <div className="text-center p-6">
                      <Users className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <h3 className="font-medium mb-1">156 Registered Participants</h3>
                      <p className="text-sm text-muted-foreground">View the full list of registered participants</p>
                      <Button className="mt-4" variant="outline" asChild>
                        <Link to="/participants">View Participants</Link>
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="results" className="pt-4">
                    <div className="text-center p-6">
                      <Trophy className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                      <h3 className="font-medium mb-1">Results Not Available</h3>
                      <p className="text-sm text-muted-foreground">Results will be available after the tournament</p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </AnimatedContainer>
          
          <AnimatedContainer animation="fade-up" delay={350}>
            <Button variant="destructive" className="w-full">
              <Trash2 className="h-4 w-4 mr-2" />
              Cancel Tournament
            </Button>
          </AnimatedContainer>
        </div>
      </div>
      
      <CreateSlotModal 
        open={slotModalOpen}
        onOpenChange={setSlotModalOpen}
        onSubmit={handleCreateSlot}
        eventId={id || ''}
        editMode={!!editingSlot?.id}
        initialData={editingSlot}
      />
    </div>
  );
};

export default Event;
