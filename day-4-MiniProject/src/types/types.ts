export interface Profile {
    id: number;
    type: 'groom' | 'bride';
    name: string;
    age: number;
    occupation: string;
    location: string;
    isLiked: boolean;  // Changed from likeCount to isLiked
  }