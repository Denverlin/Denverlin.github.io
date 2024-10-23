import Vue from 'vue'
import Vuex from 'vuex'
import axiosInstance from "@/api/index.js";
import {getAlbumsPath, getPhotosPath, getPostsPath, USERS} from "@/api/routes.js"


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        users: [],
        albums: [],
        photos: [],
        posts: []
    },

    mutations: {
        setUsers(state, users) {
            state.users = users;
        },
        setAlbums(state, albums) {
            state.albums = albums
        },
        setPhotos(state, photos) {
            state.photos = photos
        },
        setPosts(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        fetchUsers({commit}) {

            return axiosInstance.get(USERS)
                .then(request => {
                    commit("setUsers", request.data)
                })
                .catch(error => console.log(error))
        },
        fetchAlbums({commit}, id) {
            return axiosInstance.get(getAlbumsPath(id))
                .then(request => {

                    commit("setAlbums", request.data)
                })
                .catch(error => console.log(error))
        },
        fetchPhotos({commit}, albumId) {
            return axiosInstance.get(getPhotosPath(albumId))
                .then(request => {
                    commit("setPhotos", request.data)
                })
                .catch(error => console.log(error))
        },
        fetchPosts({commit}, userId) {
            return axiosInstance.get(getPostsPath(userId))
                .then(request => {
                    commit("setPosts", request.data)
                })
                .catch(error => console.log(error))
        },


    },

})
