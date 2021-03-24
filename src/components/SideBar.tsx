import React, {useEffect, useState} from "react";
import '../styles/sidebar.scss'
import {Button} from "./Button";
import {GenreResponseProps} from "./types";
import {api} from "../services/api";

interface SideBarProps {
    selectedGenreId: number;
    onClick: (id: number) => void;
}

export function SideBar(props: SideBarProps) {

    const { selectedGenreId, onClick} = props;

    const [genres, setGenres] = useState<GenreResponseProps[]>([]);

    useEffect(() => {
        api.get<GenreResponseProps[]>('genres').then(response => {
            setGenres(response.data);
        });
    }, []);

    return (
        <nav className="sidebar">
            <span>Watch<p>Me</p></span>
            <div className="buttons-container">
                {genres.map(genre => (
                    <Button
                        key={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => onClick(genre.id)}
                        selected={selectedGenreId === genre.id}
                    />
                ))}
            </div>
        </nav>
    )
}
