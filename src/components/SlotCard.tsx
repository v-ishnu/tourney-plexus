
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Edit, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SlotCardProps {
  id: string;
  name: string;
  time: string;
  maxParticipants: number;
  currentParticipants: number;
  onEdit?: (id: string) => void;
  className?: string;
}

const SlotCard: React.FC<SlotCardProps> = ({
  id,
  name,
  time,
  maxParticipants,
  currentParticipants,
  onEdit,
  className,
}) => {
  const isFilled = currentParticipants >= maxParticipants;
  const fillPercentage = (currentParticipants / maxParticipants) * 100;
  
  return (
    <Card className={cn('overflow-hidden card-hover', className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-base">{name}</h3>
          {isFilled && (
            <span className="text-xs font-medium px-2 py-0.5 bg-tournament-red/10 text-tournament-red rounded-full">
              Full
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-2 space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1.5" />
          <span>{time}</span>
        </div>
        
        <div className="space-y-1.5">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Participants</span>
            <span>{currentParticipants}/{maxParticipants}</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full",
                isFilled ? "bg-tournament-red" : "bg-tournament-blue"
              )}
              style={{ width: `${fillPercentage}%` }}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full justify-center hover:bg-secondary"
          onClick={() => onEdit?.(id)}
        >
          <Edit className="h-4 w-4 mr-1.5" />
          <span>Edit Slot</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SlotCard;
