
export default async function postDetails( { postid } ) {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 3000);
    })

const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`,
{ 
    next: {
        revalidate: 120
    }
}

)
const posts = await response.json()

    return (
        <div >
        <div className=" flec justify-center items-center bg-gradient-to-br from-transparent
             to-gray-200 rounded-lg w-96 h-96 p-5 m-5 " >
            <p className="text-2xl font-bold">{posts.title}</p>
            <p className="text-xl font-thin">{posts.body}</p>
        </div>
        </div>
    )
}
    