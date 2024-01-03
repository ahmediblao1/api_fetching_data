import PostDetails from "@/app/components/postDetails"
import { Suspense } from "react"



export default async function postDetailsPage({ params }) {
    const postId = params.postid
    return (
        <div className='flex justify-center items-center font-bold'>
            <p>post Details</p>
            <Suspense fallback="loading...">
            <PostDetails postid={postId} />
            </Suspense>
        </div>
    )
}

