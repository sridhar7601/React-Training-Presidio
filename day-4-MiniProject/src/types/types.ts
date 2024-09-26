// types as a single file to provide interface for profile where ever used
export interface Profile {
    id: number;
    type: 'groom' | 'bride';
    name: string;
    age: number;
    occupation: string;
    location: string;
    isLiked: boolean;  
  }