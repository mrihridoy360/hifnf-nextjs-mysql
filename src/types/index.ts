import { Session } from 'next-auth';

// Extend the built-in Session type
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username: string;
    };
  }

  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
    username: string;
  }
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  profile_picture: string | null;
  cover_photo: string | null;
  bio: string | null;
  location: string | null;
  website: string | null;
  date_of_birth: string | null;
  created_at: string;
}

export interface Post {
  id: string;
  user_id: string;
  content: string | null;
  image_url: string | null;
  video_url: string | null;
  feeling?: string | null;
  feeling_emoji?: string | null;
  privacy: 'public' | 'friends' | 'private';
  created_at: string;
  updated_at: string;
  // Fields that might be directly on the post from the API
  username?: string;
  first_name?: string;
  last_name?: string;
  profile_picture?: string | null;
  author_id?: string; // Added for compatibility with API responses
  // User object that should contain the user data
  user?: {
    username: string;
    first_name: string;
    last_name: string;
    profile_picture: string | null;
  };
  likes_count?: number;
  dislikes_count?: number;
  comments_count?: number;
  liked_by_user?: boolean;
  disliked_by_user?: boolean;
  user_reaction?: 'like' | 'dislike' | null;
}

export interface Comment {
  id: string;
  post_id: string;
  user_id: string;
  parent_id?: string | null;
  content: string;
  image_url?: string | null;
  created_at: string;
  updated_at: string;
  user?: {
    username: string;
    first_name: string;
    last_name: string;
    profile_picture: string | null;
  };
  likes_count?: number;
  liked_by_user?: boolean;
  replies?: Comment[];
  replies_count?: number;
  mentions?: Mention[];
}

export interface Mention {
  id: string;
  comment_id: string;
  user_id: string;
  created_at: string;
  user?: {
    username: string;
    first_name: string;
    last_name: string;
    profile_picture: string | null;
  };
}

export interface Reaction {
  id: string;
  user_id: string;
  post_id?: string;
  comment_id?: string;
  reaction_type: 'like' | 'dislike';
  created_at: string;
}

export interface Friendship {
  id: string;
  requester_id: string;
  addressee_id: string;
  status: 'pending' | 'accepted' | 'rejected' | 'blocked';
  created_at: string;
  updated_at: string;
  user?: {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    profile_picture: string | null;
  };
}

export interface Message {
  id: string;
  sender_id: string;
  receiver_id: string;
  content: string;
  is_read: boolean;
  created_at: string;
  sender?: {
    username: string;
    first_name: string;
    last_name: string;
    profile_picture: string | null;
  };
}

export interface Notification {
  id: string;
  user_id: string;
  sender_id: string;
  type: 'like' | 'comment' | 'friend_request' | 'message' | 'tag';
  content: string | null;
  reference_id: string | null;
  is_read: boolean;
  created_at: string;
  sender?: {
    username: string;
    first_name: string;
    last_name: string;
    profile_picture: string | null;
  };
}

export interface Group {
  id: string;
  name: string;
  description: string | null;
  creator_id: string;
  privacy: 'public' | 'private';
  cover_photo: string | null;
  created_at: string;
  updated_at: string;
  members_count?: number;
  is_member?: boolean;
  role?: 'admin' | 'moderator' | 'member';
  creator?: {
    username: string;
    first_name: string;
    last_name: string;
    profile_picture: string | null;
  };
}

export interface Page {
  id: string;
  name: string;
  category: string;
  description: string | null;
  creator_id: string;
  profile_picture: string | null;
  cover_photo: string | null;
  created_at: string;
  updated_at: string;
  followers_count?: number;
  is_following?: boolean;
}
