import axios from "axios";


export default async function Blog({params}:{params:Promise<{
    postId: number
}>}){
    const postId = (await params).postId;
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const data = res.data;
    return <div>
        Blog page {postId}

        <br/>
        title - {data.title}
        body - {data.body}

    </div>
}