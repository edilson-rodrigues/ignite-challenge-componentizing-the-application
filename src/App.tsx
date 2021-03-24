import React from 'react';

import {SideBar} from './components/SideBar';
import {Content} from './components/Content';

import './styles/global.scss';

const styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
}

export function App() {
    const [selectedGenreId, setSelectedGenreId] = React.useState(1);

    function handleClickButton(id: number) {
        setSelectedGenreId(id);
    }

    return (
        <div style={styles}>
            <SideBar
                selectedGenreId={selectedGenreId}
                onClick={handleClickButton}
            />
            <Content
                selectedGenreId={selectedGenreId}
            />
        </div>
    )
}
