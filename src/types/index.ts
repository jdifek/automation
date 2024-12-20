export interface Post {
  id: string;
  content: string;
  platforms: Platform[];
  scheduledDate: string;
  status: 'draft' | 'scheduled' | 'published';
  media?: string[];
}

export type Platform = 'instagram' | 'tiktok' | 'vk' | 'telegram';

export interface Analytics {
  likes: number;
  comments: number;
  shares: number;
  reach: number;
  engagement: number;
}

export interface AutoResponse {
  id: string;
  trigger: string;
  response: string;
  platform: Platform;
  isActive: boolean;
}