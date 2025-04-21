
export default async function Nums({params}:{params:Promise<{
    nums:number[]
}>}){
    const paramsIds = (await params).nums;

    return <div>
        nums page {JSON.stringify(paramsIds)}
    </div>
}