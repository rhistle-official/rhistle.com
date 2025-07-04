export interface post {
    id: number;
    title: string;
    content: string;
    image?: NoticeFile[];
    files?: NoticeFile[];
    createdAt: string;
    updatedAt?: string;
  }
  
  export interface NoticeFile extends File {
    id: number;
    originalName: string;
    saveName: string;
  }