
import Link from 'next/link'

export default async function Posts() {

const response = await fetch('https://jsonplaceholder.typicode.com/posts',
{ 
    next: {
        revalidate: 90
    }
}

)
const posts = await response.json()

  return (
    <div className='flex justify-center items-center font-bold mt-5'>
      <p>Posts page</p>

      <div className="">
        {posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
            <div key={post.id} onc className="flex flex-col bg-gradient-to-br from-transparent
             to-gray-200 rounded-xl p-5 m-5 w-96 h-96
             justify-start items-center text-wrap">
            <p className="text-2xl font-bold">{post.title}</p>
            <p className="text-xl font-thin">{post.body}</p>
            </div>
            </Link>
        ))}
      </div>
    </div>
  )
}