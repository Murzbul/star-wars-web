'use client'

import './Card.css';
import { useRouter } from 'next/navigation'
import {config} from "@/config/api";

interface CardProps
{
    id: string;
    title: string;
    episodeUd: string;
    openingCrawl: string;
    releaseDate: string;
}

const Card = (props: CardProps) =>
{
    const { id, title, episodeUd, releaseDate, openingCrawl } = props;
    const router = useRouter()

    return (
    <div className="card_container">
    <h1>{title}</h1>
    <div className="div-card" />
        <div className="extra-detail-card">
            <span>Episode: {episodeUd}</span>
            <span>Release Date: {releaseDate}</span>
            <span className="description">Description: {openingCrawl}</span>
            <button className={"btn-view-more"} type="button" onClick={() => router.push(`/films/${id}`)}>
                View More
            </button>
        </div>
    </div>
    );
};

export default Card;
