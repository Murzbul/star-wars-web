'use client'

import Layout from "@/features/Layout";
import React, {useEffect, useState} from "react";
import {config} from "@/config/api";
import Loading from "@/features/shared/atoms/Loading";
import {IFilmApiResponse} from "@/features/films/models";
import FilmDetail from "@/features/films/organisms/FilmDetail";

interface PageProps
{
    params: { id: string }
}

interface FilmDetailResponse
{
    data: IFilmApiResponse;
}

export default function Page({ params }: PageProps)
{
    const [data, setData] = useState<FilmDetailResponse>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        fetch(`${config.urlBase}/api/films/${params.id}`)
            .then(response =>
            {
                if (!response.ok)
                {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    });

    return (
        <>
            <Layout className={''}>
                { loading && <Loading /> }
                { !loading && <FilmDetail detail={data?.data}/> }
            </Layout>
        </>
  )
}
