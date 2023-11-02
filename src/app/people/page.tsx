'use client'

import ListPeople from "@/features/people/organisms/ListPeople";
import Layout from "@/features/Layout";
import React, {useEffect, useState} from "react";
import Filter from "@/components/Filter";
import {config} from "@/config/api";
import Loading from "@/features/shared/atoms/Loading";
import {IPeopleApiResponse} from "@/features/people/models";
import {ValueMouseEvent} from "@/features/shared/models";

interface PeopleResponse
{
    data: IPeopleApiResponse[];
}

export default function Page()
{
    const [data, setData] = useState<PeopleResponse>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('');

    const handleFilterChange = (event: ValueMouseEvent) =>
    {
        setFilter(event.target.value);
    };

    const clearFilter = () =>
    {
        setFilter('');
    };

    useEffect(() =>
    {
        fetch(`${config.urlBase}/api/people`)
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

    const filteredCharacters = data?.data.filter((character: IPeopleApiResponse) => filter === '' || character.gender === filter);

    return (
        <>
            <Layout className={''}>
                <Filter handleFilterChange={handleFilterChange} clearFilter={clearFilter}></Filter>
                { loading && <Loading /> }
                { !loading && <ListPeople people={filteredCharacters}/> }
            </Layout>
        </>
  )
}
