import React, { FC } from 'react';
import PostsList from '../PostsList/PostsList';
import Header from '../Header/Header';

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
