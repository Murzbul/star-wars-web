'use client'

import ListStarship from "@/features/starship/organisms/ListStarship";
import Layout from "@/features/Layout";
import React, {useEffect, useState} from "react";
import {config} from "@/config/api";
import Loading from "@/features/shared/atoms/Loading";
import {IStarshipApiResponse} from "@/features/starship/models";

interface StarshipResponse
{
    data: IStarshipApiResponse[];
}

export default function Page()
{
    const [data, setData] = useState<StarshipResponse>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        fetch(`${config.urlBase}/api/starships`)
            .then(response =>
            {
                if (!response.ok)
                {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json();
        })
        .then(data => setData(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <Layout className={''}>
                { loading && <Loading /> }
                { !loading && <ListStarship starships={data?.data}/> }
            </Layout>
        </>
  )
}
