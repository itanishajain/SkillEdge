import React from 'react';
import { format } from 'date-fns';
import { Bookmark, MapPin, Trophy, Users, Calendar } from 'lucide-react';
import { Hackathon } from '@/types/job';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Card, CardContent, CardFooter, CardHeader } from './ui/Card';

interface HackathonCardProps {
  hackathon: Hackathon;
  onSave: (id: string) => void;
  isSaved: boolean;
}

const formatPrize = (amount: number, currency: string) => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  });
  return formatter.format(amount);
};

const HackathonCard: React.FC<HackathonCardProps> = ({ hackathon, onSave, isSaved }) => {
  const isUpcoming = new Date(hackathon.startDate) > new Date();
  const isOngoing = new Date(hackathon.startDate) <= new Date() && new Date(hackathon.endDate) >= new Date();
  const daysLeft = Math.ceil(
    (new Date(hackathon.startDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200 bg-zinc-900/50 border-zinc-800">
      <CardHeader className="flex flex-row items-start space-x-4 pb-4">
        <img
          src={hackathon.image}
          alt={`${hackathon.name} banner`}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg line-clamp-1 text-zinc-100">{hackathon.name}</h3>
              <p className="text-sm text-zinc-400">{hackathon.organizer}</p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onSave(hackathon.id)}
                    className={isSaved ? 'text-purple-500' : 'text-zinc-400'}
                  >
                    <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isSaved ? 'Remove from saved' : 'Save hackathon'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-zinc-300">
            <Trophy className="h-4 w-4 text-purple-500" />
            <span>{formatPrize(hackathon.prizePool, hackathon.currency)} in prizes</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-300">
            <Users className="h-4 w-4 text-purple-500" />
            <span>{hackathon.participants} participants</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-300">
            <MapPin className="h-4 w-4 text-purple-500" />
            <span>{hackathon.mode}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {hackathon.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              {tech}
            </Badge>
          ))}
          {hackathon.techStack.length > 4 && (
            <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              +{hackathon.techStack.length - 4}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-4 border-t border-zinc-800">
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-zinc-400" />
          <span className="text-sm text-zinc-400">
            {format(new Date(hackathon.startDate), 'MMM d')} - {format(new Date(hackathon.endDate), 'MMM d, yyyy')}
          </span>
        </div>
        <div className="flex gap-2">
          {isUpcoming && (
            <Badge variant="default" className="bg-green-500/10 text-green-400 border-green-500/20">
              Upcoming
            </Badge>
          )}
          {isOngoing && (
            <Badge variant="default" className="bg-blue-500/10 text-blue-400 border-blue-500/20">
              Ongoing
            </Badge>
          )}
          {hackathon.featured && (
            <Badge variant="default" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
              Featured
            </Badge>
          )}
          {isUpcoming && daysLeft <= 7 && (
            <Badge variant="destructive" className="bg-red-500/10 text-red-400 border-red-500/20">
              {daysLeft} day{daysLeft !== 1 ? 's' : ''} left
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default HackathonCard;