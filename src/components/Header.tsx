
import React from 'react';
import { Bell, Menu, Search, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn('w-full h-16 flex items-center justify-between px-4 lg:px-6 border-b border-border bg-white/80 backdrop-blur-sm z-10 sticky top-0', className)}>
      <div className="flex items-center gap-4">
        <SidebarTrigger className="lg:hidden">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Menu className="h-5 w-5" />
          </Button>
        </SidebarTrigger>
        <div className="hidden sm:flex relative max-w-[240px]">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search..." 
            className="pl-9 bg-secondary border-none h-9 focus-visible:ring-1 focus-visible:ring-primary/30"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="rounded-full relative">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-tournament-red rounded-full"></span>
        </Button>
        
        <div className="flex items-center gap-2">
          <Avatar className="h-9 w-9 transition-transform hover:scale-105">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary/10 text-primary">TO</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
