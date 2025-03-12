
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ChevronRight, Layers, Users } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { StatusBadge } from './ui-components';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface EventCardProps {
  id: string;
  title: string;
  date: string;
  participantsCount: number;
  slotsCount: number;
  status: 'upcoming' | 'live' | 'completed' | 'cancelled';
  className?: string;
}

const EventCard: React.FC<EventCardProps> = ({
  id,
  title,
  date,
  participantsCount,
  slotsCount,
  status,
  className,
}) => {
  return (
    <Card className={cn('overflow-hidden card-hover h-full', className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex flex-col">
            <h3 className="font-medium text-lg">{title}</h3>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <Calendar className="h-4 w-4 mr-1.5" />
              <span>{date}</span>
            </div>
          </div>
          <StatusBadge status={status} />
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-secondary rounded-lg p-3">
            <div className="flex items-center mb-1">
              <Users className="h-4 w-4 mr-1.5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Participants</span>
            </div>
            <p className="font-medium">{participantsCount}</p>
          </div>
          <div className="bg-secondary rounded-lg p-3">
            <div className="flex items-center mb-1">
              <Layers className="h-4 w-4 mr-1.5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Slots</span>
            </div>
            <p className="font-medium">{slotsCount}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button asChild variant="ghost" className="w-full justify-between hover:bg-secondary">
          <Link to={`/event/${id}`}>
            <span>View Details</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
