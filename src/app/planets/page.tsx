import List from "@/features/planets/organisms/List";
import Layout from "@/features/Layout";
import {IPlanetApiResponse} from "@/features/planets/models";
import {getData} from "@/features/shared/actions/getData";

export default async function Page()
{
    const data = await getData<IPlanetApiResponse[]>('api/planets')

    return (
        <>
            <Layout className={''}>
                <List planets={data}/>
            </Layout>
        </>
  )
}
