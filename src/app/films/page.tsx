import ListFilm from "@/features/films/organisms/List";
import Layout from "@/features/Layout";
import {IFilmApiResponse} from "@/features/films/models";
import {getData} from "@/features/shared/actions/getData";

export default async function Page()
{
    const data = await getData<IFilmApiResponse[]>('api/films')

    return (
        <>
            <Layout className={''}>
                <ListFilm films={data}/>
            </Layout>
        </>
  )
}
