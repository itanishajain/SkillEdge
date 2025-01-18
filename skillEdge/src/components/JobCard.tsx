import React from 'react';
import { format } from 'date-fns';
import { Bookmark, MapPin, Building2, Clock, Briefcase } from 'lucide-react';
import { Job } from '@/types/job';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/Card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface JobCardProps {
  job: Job;
  onSave: (id: string) => void;
  isSaved: boolean;
}

const formatSalary = (min: number, max: number, currency: string) => {
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  });
  return `${formatter.format(min)} - ${formatter.format(max)}`;
};

const JobCard: React.FC<JobCardProps> = ({ job, onSave, isSaved }) => {
  const isNew = new Date(job.postedDate) >= new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
  const daysLeft = Math.ceil(
    (new Date(job.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="flex flex-row items-start space-x-4 pb-4">
        <img
          src={job.logo}
          alt={`${job.company} logo`}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg line-clamp-1">{job.title}</h3>
              <p className="text-sm text-muted-foreground">{job.company}</p>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onSave(job.id)}
                    className={isSaved ? 'text-primary' : 'text-muted-foreground'}
                  >
                    <Bookmark className={`h-5 w-5 ${isSaved ? 'fill-current' : ''}`} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isSaved ? 'Remove from saved' : 'Save job'}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1">
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>
              {job.location.city}, {job.location.state}, {job.location.country}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Building2 className="h-4 w-4" />
            <span>{formatSalary(job.salary.min, job.salary.max, job.salary.currency)}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Briefcase className="h-4 w-4" />
            <span>{job.experienceLevel} · {job.workMode}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.skills.slice(0, 4).map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
          {job.skills.length > 4 && (
            <Badge variant="secondary">+{job.skills.length - 4}</Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            Posted {format(new Date(job.postedDate), 'MMM d, yyyy')}
          </span>
        </div>
        <div className="flex gap-2">
          {isNew && (
            <Badge variant="default" className="bg-green-500">New</Badge>
          )}
          {job.featured && (
            <Badge variant="default" className="bg-blue-500">Featured</Badge>
          )}
          {daysLeft > 0 && daysLeft <= 7 && (
            <Badge variant="destructive">
              {daysLeft} day{daysLeft !== 1 ? 's' : ''} left
            </Badge>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCard;