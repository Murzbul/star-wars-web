import ListStarship from "@/features/starship/organisms/ListStarship";
import Layout from "@/features/Layout";
import {IStarshipApiResponse} from "@/features/starship/models";
import {getData} from "@/features/shared/actions/getData";


export default async function Page()
{
    const data = await getData<IStarshipApiResponse[]>('api/starships')

    return (
        <>
            <Layout className={''}>
                { <ListStarship starships={data}/> }
            </Layout>
        </>
  )
}
