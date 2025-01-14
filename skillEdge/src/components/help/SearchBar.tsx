import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

export function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className="w-full justify-start text-muted-foreground h-14 text-lg"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-5 w-5" />
        Search for help...
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type to search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Popular Articles">
            <CommandItem>Reset Password</CommandItem>
            <CommandItem>Update Billing Information</CommandItem>
            <CommandItem>Track Order Status</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}