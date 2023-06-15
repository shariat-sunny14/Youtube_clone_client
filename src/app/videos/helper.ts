export class Video {
    id: number;
    title: string;
    videoUrl: string;
    subscriber: string;
    uploadTime: string;
    views: string;
    author: string;
    url: any;

    constructor(id: number, title: string, videoUrl: string, subscriber: string, uploadTime: string, views: string, author: string) {
        this.id = id;
        this.title = title;
        this.videoUrl = videoUrl;
        this.subscriber = subscriber;
        this.uploadTime = uploadTime;
        this.views = views;
        this.author = author;
    }
}