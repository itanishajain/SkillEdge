export interface Note {
    id: string;
    title: string;
    content: string;
    color: string;
    labels: string[];
    pinned: boolean;
    createdAt: Date;
    updatedAt: Date;
    archived: boolean;
  }