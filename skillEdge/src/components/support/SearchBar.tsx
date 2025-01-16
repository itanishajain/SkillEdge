import { useState } from "react";
import {
  Command as CommandPrimitive,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { faqData } from "@/data/faq";
import { ScrollArea } from "@/components/ui/scroll-area";

export function SearchBar() {
  const [query, setQuery] = useState("");

  const allQuestions = faqData.flatMap((category) =>
    category.items.map((item) => ({
      ...item,
      category: category.category,
    }))
  );

  const filteredQuestions = query
    ? allQuestions.filter(
        (item) =>
          item.question.toLowerCase().includes(query.toLowerCase()) ||
          item.answer.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="relative w-full max-w-2xl mx-auto border border-gray-700 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative group">
        <div className="absolute left-3 top-3 flex items-center gap-2 text-muted-foreground">
        </div>
        <CommandPrimitive className="w-full">
          <CommandInput
            placeholder="Search help articles..."
            className="h-auto pl-5"
            value={query}
            onValueChange={setQuery}
          />
          {query && (
            <div className="relative">
              <ScrollArea className="absolute w-full glass-effect rounded-xl premium-shadow mt-2 max-h-[300px]">
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  {filteredQuestions.map((item, index) => (
                    <CommandGroup key={index} heading={item.category} className="px-2">
                      <CommandItem className="p-3 rounded-lg hover:glass-effect transition-all duration-200">
                        <div className="space-y-1">
                          <p className="font-medium text-white">{item.question}</p>
                          <p className="text-sm text-gray-400 line-clamp-2">
                            {item.answer}
                          </p>
                        </div>
                      </CommandItem>
                    </CommandGroup>
                  ))}
                </CommandList>
              </ScrollArea>
            </div>
          )}
        </CommandPrimitive>
      </div>
    </div>
  );
}