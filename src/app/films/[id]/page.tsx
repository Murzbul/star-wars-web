import Layout from "@/features/Layout";
import {config} from "@/config/api";
import Loading from "@/features/shared/atoms/Loading";
import {IFilmApiResponse} from "@/features/films/models";
import FilmDetail from "@/features/films/organisms/FilmDetail";
import {getData} from "@/features/shared/actions/getData";

interface PageProps
{
    params: { id: string }
}

export default async function Page({ params }: PageProps)
{
    const data = await getData<IFilmApiResponse[]>(`api/films/${params.id}`)

    return (
        <>
            <Layout className={''}>
                <FilmDetail detail={data}/>
            </Layout>
        </>
  )
}
