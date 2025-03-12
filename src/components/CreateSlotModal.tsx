
import React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ClockIcon } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface CreateSlotModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: SlotFormData) => void;
  eventId: string;
  editMode?: boolean;
  initialData?: SlotFormData;
}

export interface SlotFormData {
  id?: string;
  name: string;
  time: string;
  maxParticipants: string;
  mapType: string;
  matchType: string;
}

const CreateSlotModal: React.FC<CreateSlotModalProps> = ({
  open,
  onOpenChange,
  onSubmit,
  eventId,
  editMode = false,
  initialData,
}) => {
  const defaultFormData: SlotFormData = {
    name: '',
    time: '',
    maxParticipants: '',
    mapType: 'erangel',
    matchType: 'classic',
  };

  const [formData, setFormData] = React.useState<SlotFormData>(initialData || defaultFormData);

  React.useEffect(() => {
    if (initialData && open) {
      setFormData(initialData);
    } else if (!open) {
      setFormData(defaultFormData);
    }
  }, [initialData, open]);

  const handleChange = (field: keyof SlotFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    if (!editMode) {
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData(defaultFormData);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{editMode ? 'Edit Slot' : 'Create New Slot'}</DialogTitle>
            <DialogDescription>
              {editMode 
                ? 'Update the details for this slot.' 
                : 'Add a new slot to your tournament.'}
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="name">Slot Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="e.g., Slot 1, Morning Qualifiers"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="time">Slot Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => handleChange('time', e.target.value)}
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mapType">Map</Label>
                <Select 
                  value={formData.mapType} 
                  onValueChange={(value) => handleChange('mapType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select map" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="erangel">Erangel</SelectItem>
                    <SelectItem value="miramar">Miramar</SelectItem>
                    <SelectItem value="sanhok">Sanhok</SelectItem>
                    <SelectItem value="vikendi">Vikendi</SelectItem>
                    <SelectItem value="livik">Livik</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="matchType">Match Type</Label>
                <Select 
                  value={formData.matchType} 
                  onValueChange={(value) => handleChange('matchType', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="classic">Classic</SelectItem>
                    <SelectItem value="arcade">Arcade</SelectItem>
                    <SelectItem value="tdm">TDM</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-2">
              <Label htmlFor="maxParticipants">Maximum Participants</Label>
              <Input
                id="maxParticipants"
                type="number"
                min="1"
                value={formData.maxParticipants}
                onChange={(e) => handleChange('maxParticipants', e.target.value)}
                placeholder="Enter maximum participants"
                required
              />
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button type="submit">
              {editMode ? 'Update Slot' : 'Create Slot'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateSlotModal;
