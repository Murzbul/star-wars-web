'use client'

import ListCharacter from "@/features/ListCharacter";
import Layout from "@/features/Layout";
import {useEffect, useState} from "react";
import Filter from "@/components/Filter";
import {config} from "@/config/api";
import Loading from "@/features/shared/atoms/Loading";

export default function Page()
{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('');
    const handleFilterChange = (event) =>
    {
      setFilter(event.target.value);
    };

    const clearFilter = () =>
    {
      setFilter('');
    };

    useEffect(() => {
        fetch(`${config.urlBase}/api/people`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
          })
          .then(data => setData(data))
          .catch(error => setError(error))
          .finally(() => setLoading(false));
      }, []);

    const filteredCharacters = data?.data.filter((character: any) => filter === '' || character.gender === filter);

    return (
        <>
            <Layout className={''}>
                <Filter handleFilterChange={handleFilterChange} clearFilter={clearFilter}></Filter>
                { loading && <Loading /> }
                { !loading && <ListCharacter characters={filteredCharacters}/> }
            </Layout>
        </>
  )
}
