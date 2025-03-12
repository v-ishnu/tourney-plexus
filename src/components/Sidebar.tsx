
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Home, LayoutGrid, Settings, Trophy, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const sidebarItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/events', label: 'Tournaments', icon: Trophy },
    { path: '/slots', label: 'Slots', icon: LayoutGrid },
    { path: '/participants', label: 'Participants', icon: Users },
    { path: '/calendar', label: 'Calendar', icon: Calendar },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <SidebarComponent className={cn(className)}>
      <SidebarHeader className="flex items-center h-16 px-6 border-b border-sidebar-border">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-tournament-blue text-white p-1 rounded-md">
            <Trophy className="h-5 w-5" />
          </div>
          <span className="font-semibold text-lg">Tourney Plexus</span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="py-6">
        <SidebarMenu>
          {sidebarItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton asChild active={isActive(item.path)}>
                <Link to={item.path} className="sidebar-menu-item">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-6 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground">
          <p>Tourney Plexus v1.0</p>
          <p className="mt-1">© 2023 All rights reserved</p>
        </div>
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;
