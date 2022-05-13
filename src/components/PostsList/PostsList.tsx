import React, { FC, useState } from 'react';
import PostItems from '../PostItems/PostItems';
import Pagination from '../Pagination/Pagination';
import SearchPanel from '../SearchPanel/SearchPanel';
import { postsPerPage } from '../../constants';
import './postsList.css';

const PostsList: FC = () => {
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPost = items.slice(firstPostIndex, lastPostIndex);

    return (
        <div className="postsListContainer">
            <SearchPanel setItems={setItems} />
            <PostItems items={currentPost} />
            {items.length ? (
                <Pagination
                    totalPosts={items.length}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            ) : (
                <span className="notFoundText">Posts not found...</span>
            )}
        </div>
    );
};

export default PostsList;
