export const USERS = "users";
export const getAlbumsPath = (id) =>{ return `albums?userId=${id}`};
export const getPhotosPath =(id) =>{ return `photos?albumId=${id}`};
export const getPostsPath =(id) =>{ return `posts?userId=${id}`};