'use client'

import ListFilm from "@/features/films/organisms/List";
import Layout from "@/features/Layout";
import React, {useEffect, useState} from "react";
import {config} from "@/config/api";
import Loading from "@/features/shared/atoms/Loading";
import {IFilmApiResponse} from "@/features/films/models";

export default function Page()
{
    const [data, setData] = useState<IFilmApiResponse[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        fetch(`${config.urlBase}/api/films`)
            .then(response =>
            {
                if (!response.ok)
                {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
        })
        .then(data => {
            const sortedData = data?.data.sort((a: any, b: any) => a.episodeUd - b.episodeUd);
            setData(sortedData);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Layout className={''}>
                { loading && <Loading /> }
                { !loading && <ListFilm films={data}/> }
            </Layout>
        </>
  )
}
