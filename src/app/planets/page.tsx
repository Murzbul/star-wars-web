'use client'

import React, {useEffect, useState} from "react";

import List from "@/features/planets/organisms/List";
import Layout from "@/features/Layout";
import {config} from "@/config/api";
import Loading from "@/features/shared/atoms/Loading";
import {IPlanetApiResponse} from "@/features/planets/models";

interface PlanetResponse
{
    data: IPlanetApiResponse[];
}

export default function Page()
{
    const [data, setData] = useState<PlanetResponse>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        fetch(`${config.urlBase}/api/planets`)
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
                { !loading && <List planets={data?.data}/> }
            </Layout>
        </>
  )
}
