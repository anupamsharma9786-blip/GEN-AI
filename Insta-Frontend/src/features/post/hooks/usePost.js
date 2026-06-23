import { getFeed } from "../services/post.api";
import { useContext, useEffect } from "react";
import { PostContext } from "../post.context";


export const usePost = () =>{

    const context = useContext(PostContext)

    const { post, setPost, loading, setLoading, feed, setFeed} = context;

    const handleGetFeed = async () => {
        setLoading(true)
        const data = await getFeed()
        setFeed(data.posts)
        setLoading(false)
    }

    return { loading, feed, handleGetFeed, post}



}