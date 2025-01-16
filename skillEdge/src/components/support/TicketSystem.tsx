import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SupportTicket } from "@/types/support";

export function TicketSystem() {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const createTicket = (data: Partial<SupportTicket>) => {
    const newTicket: SupportTicket = {
      id: Math.random().toString(36).substr(2, 9),
      subject: data.subject || "",
      description: data.description || "",
      status: "open",
      priority: data.priority || "medium",
      createdAt: new Date(),
    };
    setTickets([newTicket, ...tickets]);
    setIsOpen(false);
    toast.success("Ticket created successfully!", {
      description: `Ticket #${newTicket.id} has been created and assigned to our support team.`,
    });
  };

  const updateTicketStatus = (ticketId: string, newStatus: SupportTicket['status']) => {
    setTickets(tickets.map(ticket => 
      ticket.id === ticketId 
        ? { ...ticket, status: newStatus }
        : ticket
    ));
    toast.success("Ticket status updated successfully!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-xl font-semibold">Support Tickets</h3>
          <p className="text-sm text-gray-400">Track and manage your support requests</p>
        </div>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button>Create New Ticket</Button>
          </DialogTrigger>
          <DialogContent className="bg-black text-white">
            <DialogHeader>
              <DialogTitle>Create Support Ticket</DialogTitle>
              <DialogDescription className="text-gray-400">
                Describe your issue and we'll help you resolve it.
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                createTicket({
                  subject: formData.get("subject") as string,
                  description: formData.get("description") as string,
                  priority: formData.get("priority") as "low" | "medium" | "high",
                });
              }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium">Subject</label>
                <Input name="subject" required className="bg-secondary border-gray-700" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <Textarea 
                  name="description" 
                  required 
                  className="bg-secondary border-gray-700 min-h-[100px]" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Priority</label>
                <Select name="priority" defaultValue="medium">
                  <SelectTrigger className="bg-secondary border-gray-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-black border-gray-700">
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">
                Submit Ticket
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border border-gray-800 rounded-lg overflow-hidden">
        <ScrollArea className="max-h-[500px]">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-secondary/5">
                <TableHead className="text-gray-400">ID</TableHead>
                <TableHead className="text-gray-400">Subject</TableHead>
                <TableHead className="text-gray-400">Status</TableHead>
                <TableHead className="text-gray-400">Priority</TableHead>
                <TableHead className="text-gray-400">Created</TableHead>
                <TableHead className="text-gray-400">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-400">
                    No tickets found. Create one to get started.
                  </TableCell>
                </TableRow>
              ) : (
                tickets.map((ticket) => (
                  <TableRow key={ticket.id} className="hover:bg-secondary/5">
                    <TableCell className="font-mono text-sm">{ticket.id}</TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {ticket.subject}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          ticket.status === "resolved"
                            ? "secondary"
                            : ticket.status === "in-progress"
                            ? "outline"
                            : "default"
                        }
                      >
                        {ticket.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          ticket.priority === "high"
                            ? "destructive"
                            : ticket.priority === "medium"
                            ? "outline"
                            : "default"
                        }
                      >
                        {ticket.priority}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm">
                      {ticket.createdAt.toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <Select
                        defaultValue={ticket.status}
                        onValueChange={(value) => 
                          updateTicketStatus(ticket.id, value as SupportTicket['status'])
                        }
                      >
                        <SelectTrigger className="w-[130px] bg-secondary border-gray-700">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-gray-700">
                          <SelectItem value="open">Open</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
}