export interface Blog {
    id: number;
    thumbnailUrl: string;
    title: string;
    content: string;
    creationDate: Date;
    likes: number;
    dislikes: number;
    comments: string[];
}

export interface Comment {
    userComment: string;
    date: string;
}