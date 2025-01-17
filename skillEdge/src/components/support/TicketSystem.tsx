import { useState } from "react";
import { useDropzone } from 'react-dropzone';
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
import { SupportTicket } from "@/types/support";
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
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, Image as ImageIcon } from "lucide-react";

interface FileWithPreview extends File {
  preview?: string;
}

export function TicketSystem() {
  const [tickets, setTickets] = useState<SupportTicket[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: (acceptedFiles) => {
      const filesWithPreview = acceptedFiles.map(file => 
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      );
      setFiles(prev => [...prev, ...filesWithPreview]);
    }
  });

  const removeFile = (file: FileWithPreview) => {
    setFiles(files.filter(f => f !== file));
    if (file.preview) {
      URL.revokeObjectURL(file.preview);
    }
  };

  const createTicket = async (data: FormData) => {
    const ticketData = {
      id: Math.random().toString(36).substr(2, 9),
      subject: data.get('subject') as string,
      description: data.get('description') as string,
      status: "open" as const,
      priority: data.get('priority') as "low" | "medium" | "high",
      createdAt: new Date(),
      attachments: files
    };

    // Send email notification
    try {
      const response = await fetch('/api/send-ticket-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticketData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email notification');
      }

      setTickets([ticketData, ...tickets]);
      setIsOpen(false);
      setFiles([]);
      
      toast.success("Ticket created successfully!", {
        description: `Ticket #${ticketData.id} has been created and our team has been notified.`,
      });
    } catch {
      toast.error("Failed to create ticket", {
        description: "Please try again or contact support directly.",
      });
    }
  };

  const updateTicketStatus = async (ticketId: string, newStatus: SupportTicket['status']) => {
    try {
      const response = await fetch('/api/update-ticket-status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ticketId, status: newStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update ticket status');
      }

      setTickets(tickets.map(ticket => 
        ticket.id === ticketId 
          ? { ...ticket, status: newStatus }
          : ticket
      ));
      
      toast.success("Ticket status updated successfully!");
    } catch {
      toast.error("Failed to update ticket status");
    }
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
          <DialogContent className="sm:max-w-[600px] bg-black border-gray-800">
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
                createTicket(formData);
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

              <div className="space-y-2">
                <label className="text-sm font-medium">Attachments</label>
                <div 
                  {...getRootProps()} 
                  className="border-2 border-dashed border-gray-700 rounded-lg p-4 text-center cursor-pointer hover:border-gray-500 transition-colors"
                >
                  <input {...getInputProps()} />
                  <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                  <p className="text-sm text-gray-400">
                    Drag & drop images here, or click to select files
                  </p>
                </div>

                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    <AnimatePresence>
                      {files.map((file) => (
                        <motion.div
                          key={file.name}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex items-center gap-2 bg-secondary/20 rounded-lg p-2"
                        >
                          <ImageIcon className="w-4 h-4 text-gray-400" />
                          <span className="text-sm truncate flex-1">{file.name}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeFile(file)}
                            className="h-6 w-6"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                )}
              </div>

              <Button type="submit" className="w-full">
                Submit Ticket
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="border border-gray-800 rounded-lg overflow-hidden">
        <ScrollArea className="h-[400px]">
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