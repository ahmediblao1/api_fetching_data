import Post from "../components/post"
import Image from 'next/image'
import img from '../bg-3.png'
export const metadata = {
    title: 'articales page',
    description: 'you can find all kind of acadimc articales here',
    }

export default function articales() {
    return (
        <div className='flex justify-center items-center font-bold mt-5'>
        <p>articales</p>
        <Image src={img} alt="Picture of the author" />
        </div>
    )
}