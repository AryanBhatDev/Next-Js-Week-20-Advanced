

export default async function PostPage({params}:{params:{
    postId:number[]
}}){
    const paramsIds = (await params).postId;

    return <div>
        post page {JSON.stringify(paramsIds)}
    </div>
}