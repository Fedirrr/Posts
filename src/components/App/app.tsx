import React, { FC } from 'react';
import PostsList from '../../../../Posts-main/src/components/PostsList/PostsList';
import Header from '../../../../Posts-main/src/components/Header/Header';
import './app.css'
const App: FC = () => {
    return (
        <div className="wrapper">
            <div className="content">
                <Header/>
                <PostsList/>
            </div>
        </div>
    );
};

export default App;
