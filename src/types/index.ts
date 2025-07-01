export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: number;
  body: string;
  created_at: string;
  updated_at: string;
}

export interface Post {
  id: number;
  title: string;
  slug: string;
  body: string;
  view: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  user: User;
  comments: Comment[];
}
export interface CreatePostPayload {
  title: string;
  body: string;
  userId: string;
}
