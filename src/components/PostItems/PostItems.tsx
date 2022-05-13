import React, { FC } from 'react';
import { ItemsProps } from '../../types';
import './postItem.css';

const PostItems: FC<ItemsProps> = ({ items }) => {
    return (
        <div>
            <div className="postListWrapper">
                <div className="postItem">
                    {items.map(({ id, title, body }) =>
                        <div
                            key={id}
                            className="postWrapper"
                        >
                            <p>ID: {id}</p>
                            <p>TITLE: {title}</p>
                            <p>BODY: {body}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostItems;
