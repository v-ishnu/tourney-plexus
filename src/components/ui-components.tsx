
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const StatusBadge = ({ 
  status, 
  className 
}: { 
  status: 'upcoming' | 'live' | 'completed' | 'cancelled', 
  className?: string 
}) => {
  const statusStyles = {
    upcoming: 'bg-tournament-blue/10 text-tournament-blue',
    live: 'bg-tournament-green/10 text-tournament-green',
    completed: 'bg-muted text-muted-foreground',
    cancelled: 'bg-tournament-red/10 text-tournament-red',
  };

  return (
    <Badge className={cn('rounded-full font-medium px-3', statusStyles[status], className)}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </Badge>
  );
};

export const GlassCard = ({
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof Card>) => {
  return (
    <Card className={cn('glass-card overflow-hidden', className)} {...props}>
      {children}
    </Card>
  );
};

export const ChipButton = ({ 
  children, 
  className, 
  variant = 'default', 
  ...props 
}: React.ComponentPropsWithoutRef<typeof Button> & { 
  variant?: 'default' | 'outline' | 'secondary' 
}) => {
  const variantStyles = {
    default: 'bg-primary/10 text-primary hover:bg-primary/20',
    outline: 'border border-border bg-transparent hover:bg-secondary',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  };

  return (
    <Button 
      className={cn('rounded-full font-medium transition-all', variantStyles[variant], className)} 
      {...props}
    >
      {children}
    </Button>
  );
};

export const AnimatedContainer = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  animation?: 'fade-in' | 'fade-up' | 'scale-in';
  delay?: number;
}) => {
  const styles = {
    'fade-in': 'animate-fade-in',
    'fade-up': 'animate-fade-up',
    'scale-in': 'animate-scale-in',
  };

  return (
    <div 
      className={cn(styles[animation], className)}
      style={{ animationDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

export const PageTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1 className={cn('font-medium text-3xl md:text-4xl tracking-tight mb-2', className)} {...props}>
      {children}
    </h1>
  );
};

export const SectionTitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2 className={cn('font-medium text-xl md:text-2xl tracking-tight mb-1', className)} {...props}>
      {children}
    </h2>
  );
};

export const PageSubtitle = ({ children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn('text-muted-foreground mb-6', className)} {...props}>
      {children}
    </p>
  );
};
