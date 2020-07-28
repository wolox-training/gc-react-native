export interface CommentsProps {
  id: string;
  name: string;
  img: any;
  comment: string;
}

export interface CommentsData {
  comments: CommentsProps[];
}
