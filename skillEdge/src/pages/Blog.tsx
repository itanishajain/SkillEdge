import React, { useState } from 'react';
import {
  Search,
  Filter,
  Briefcase,
  Trophy,
  Clock,
  Globe,
  Award,
  Sparkles
} from 'lucide-react';
import JobCard from '@/components/JobCard';
import HackathonCard from '@/components/HackathonCard';
import { Job, JobFilter, SortOption, WorkMode, ViewMode, Hackathon } from '@/types/job';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useJobs } from '@/hooks/useJobs';

const Blog: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('jobs');
  const [filter, setFilter] = useState<JobFilter>('all');
  const [sortBy, setSortBy] = useState<SortOption>('date');
  const [search, setSearch] = useState('');
  const [workMode, setWorkMode] = useState<WorkMode>('all');
  const [country, setCountry] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [savedItems, setSavedItems] = useState<string[]>(() => {
    const saved = localStorage.getItem('savedItems');
    return saved ? JSON.parse(saved) : [];
  });

  const { jobs, hackathons, loading, error } = useJobs(filter, sortBy, search, workMode, country, state, viewMode);
  const items = viewMode === 'jobs' ? jobs : hackathons;

  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const handleSaveItem = (id: string) => {
    setSavedItems((prev) => {
      const newSavedItems = prev.includes(id)
        ? prev.filter((savedId) => savedId !== id)
        : [...prev, id];
      localStorage.setItem('savedItems', JSON.stringify(newSavedItems));
      return newSavedItems;
    });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderHero = () => (
    <div className="text-center py-16 bg-gradient-to-b from-zinc-900 to-background">
      <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        {viewMode === 'jobs' ? 'Find Your Dream Job' : 'Discover Hackathons'}
      </h1>
      <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
        {viewMode === 'jobs' 
          ? 'Explore thousands of job opportunities from top companies worldwide. Find the perfect role that matches your skills and aspirations.'
          : 'Join exciting hackathons, showcase your skills, and compete with talented developers from around the globe. Win prizes and get recognized!'}
      </p>
      <div className="flex justify-center gap-4">
        <Button
          size="lg"
          variant={viewMode === 'jobs' ? 'default' : 'outline'}
          onClick={() => setViewMode('jobs')}
          className="gap-2"
        >
          <Briefcase className="w-5 h-5" />
          Explore Jobs
        </Button>
        <Button
          size="lg"
          variant={viewMode === 'hackathons' ? 'default' : 'outline'}
          onClick={() => setViewMode('hackathons')}
          className="gap-2"
        >
          <Trophy className="w-5 h-5" />
          Explore Hackathons
        </Button>
      </div>
    </div>
  );

  const renderFilters = () => (
    <div className="mb-8 space-y-6 bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {viewMode === 'jobs' ? (
            <>
              <Briefcase className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold text-zinc-100">Job Filters</h2>
            </>
          ) : (
            <>
              <Trophy className="w-5 h-5 text-purple-500" />
              <h2 className="text-xl font-semibold text-zinc-100">Hackathon Filters</h2>
            </>
          )}
        </div>
        <div className="flex items-center gap-2">
          {viewMode === 'jobs' ? (
            <>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setFilter('featured')}
              >
                <Sparkles className="w-4 h-4" />
                Featured Jobs
              </Button>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setWorkMode('remote')}
              >
                <Globe className="w-4 h-4" />
                Remote Jobs
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setFilter('latest')}
              >
                <Clock className="w-4 h-4" />
                Upcoming
              </Button>
              <Button
                variant="outline"
                className="gap-2"
                onClick={() => setFilter('featured')}
              >
                <Award className="w-4 h-4" />
                Featured
              </Button>
            </>
          )}
        </div>
      </div>
      
      <div className="grid gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
          <Input
            type="text"
            placeholder={viewMode === 'jobs' 
              ? "Search jobs by title, company, or skills..."
              : "Search hackathons by name, organizer, or tech stack..."}
            className="pl-10 bg-zinc-900 border-zinc-700 text-zinc-100"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          <Select value={filter} onValueChange={(value) => setFilter(value as JobFilter)}>
            <SelectTrigger className="bg-zinc-900 border-zinc-700 text-zinc-100">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All {viewMode === 'jobs' ? 'Jobs' : 'Hackathons'}</SelectItem>
              <SelectItem value="latest">{viewMode === 'jobs' ? 'Latest' : 'Upcoming'}</SelectItem>
              <SelectItem value="featured">Featured</SelectItem>
              {viewMode === 'jobs' && (
                <SelectItem value="expired">Expired</SelectItem>
              )}
            </SelectContent>
          </Select>
          
          <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
            <SelectTrigger className="bg-zinc-900 border-zinc-700 text-zinc-100">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">
                {viewMode === 'jobs' ? 'Date Posted' : 'Start Date'}
              </SelectItem>
              {viewMode === 'jobs' ? (
                <>
                  <SelectItem value="salary">Salary</SelectItem>
                  <SelectItem value="company">Company</SelectItem>
                  <SelectItem value="deadline">Application Deadline</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="prize">Prize Pool</SelectItem>
                  <SelectItem value="participants">Participants</SelectItem>
                  <SelectItem value="duration">Duration</SelectItem>
                </>
              )}
              <SelectItem value="location">Location</SelectItem>
            </SelectContent>
          </Select>

          {viewMode === 'jobs' && (
            <Select value={workMode} onValueChange={(value) => setWorkMode(value as WorkMode)}>
              <SelectTrigger className="bg-zinc-900 border-zinc-700 text-zinc-100">
                <SelectValue placeholder="Work mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Work Modes</SelectItem>
                <SelectItem value="remote">Remote</SelectItem>
                <SelectItem value="hybrid">Hybrid</SelectItem>
                <SelectItem value="on-site">On-site</SelectItem>
              </SelectContent>
            </Select>
          )}

          <Input
            type="text"
            placeholder="Country"
            className="bg-zinc-900 border-zinc-700 text-zinc-100"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <Input
            type="text"
            placeholder="State"
            className="bg-zinc-900 border-zinc-700 text-zinc-100"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-zinc-950">
        <div className="text-center space-y-4">
          <div className="rounded-full bg-red-500/10 p-4 inline-block">
            <Filter className="w-8 h-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-zinc-100">Error Loading Data</h3>
          <p className="text-zinc-400">{error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      {renderHero()}
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {renderFilters()}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-zinc-900/50 rounded-lg border border-zinc-800 p-6 animate-pulse"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-zinc-800 rounded-lg" />
                  <div className="flex-1">
                    <div className="h-6 bg-zinc-800 rounded w-3/4 mb-2" />
                    <div className="h-4 bg-zinc-800 rounded w-1/2" />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-zinc-800 rounded w-full" />
                  <div className="h-4 bg-zinc-800 rounded w-5/6" />
                  <div className="flex gap-2">
                    <div className="h-6 bg-zinc-800 rounded w-16" />
                    <div className="h-6 bg-zinc-800 rounded w-16" />
                    <div className="h-6 bg-zinc-800 rounded w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="text-center py-12 bg-zinc-900/50 rounded-lg border border-zinc-800">
            <div className="rounded-full bg-zinc-800 p-4 inline-block mb-4">
              {viewMode === 'jobs' ? (
                <Briefcase className="w-8 h-8 text-zinc-400" />
              ) : (
                <Trophy className="w-8 h-8 text-zinc-400" />
              )}
            </div>
            <h3 className="text-xl font-semibold text-zinc-100 mb-2">
              No {viewMode === 'jobs' ? 'jobs' : 'hackathons'} found
            </h3>
            <p className="text-zinc-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentItems.map((item) => (
                viewMode === 'jobs' ? (
                  <JobCard
                    key={item.id}
                    job={item as Job}
                    onSave={handleSaveItem}
                    isSaved={savedItems.includes(item.id)}
                  />
                ) : (
                  <HackathonCard
                    key={item.id}
                    hackathon={item as Hackathon}
                    onSave={handleSaveItem}
                    isSaved={savedItems.includes(item.id)}
                  />
                )
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination className="justify-center">
                <PaginationContent>
                  <PaginationItem>
                    {currentPage > 1 && (
                      <PaginationPrevious
                        onClick={() => handlePageChange(currentPage - 1)}
                      />
                    )}
                  </PaginationItem>
                  
                  {[...Array(totalPages)].map((_, i) => {
                    const page = i + 1;
                    if (
                      page === 1 ||
                      page === totalPages ||
                      (page >= currentPage - 1 && page <= currentPage + 1)
                    ) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationLink
                            onClick={() => handlePageChange(page)}
                            isActive={currentPage === page}
                          >
                            {page}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    } else if (
                      page === currentPage - 2 ||
                      page === currentPage + 2
                    ) {
                      return (
                        <PaginationItem key={page}>
                          <PaginationEllipsis />
                        </PaginationItem>
                      );
                    }
                    return null;
                  })}
                  
                  <PaginationItem>
                    {currentPage < totalPages && (
                      <PaginationNext
                        onClick={() => handlePageChange(currentPage + 1)}
                      />
                    )}
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;