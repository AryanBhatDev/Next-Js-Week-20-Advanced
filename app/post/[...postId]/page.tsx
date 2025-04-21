

export default async function PostPage({params}:{params:Promise<{
    postId:number[]
}>}){
    const paramsIds = (await params).postId;

    return <div>
        post page {JSON.stringify(paramsIds)}
    </div>
}