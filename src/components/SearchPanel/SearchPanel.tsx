import React, { FC, useEffect, useState } from 'react';
import { Button, AutoComplete, notification } from 'antd';
import axios from 'axios';
import { IData, ISearchPanel, ISearchOptions } from '../../types';
import './searchPanel.css';

const SearchPanel: FC<ISearchPanel> = ({ setItems }) => {
    const [value, setValue] = useState('');
    const [options, setOptions] = useState([]);
    const [postsData, setPostsData] = useState([]);
    const [searchOptions, setSearchOptions] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data = [] } = await axios.get('https://jsonplaceholder.typicode.com/posts');

            if (data.length) {
                const autoCompleteItems = data.map(({ title, id }: IData) => ({ value: title, id }));

                setItems(data);
                setPostsData(data);
                setOptions(autoCompleteItems);
                setSearchOptions(autoCompleteItems);
            }
        }
        fetchPosts();
    }, []);

    const onSelect = (selectedOption: string) => {
        const findItem = postsData.find(({ title }) => title === selectedOption);

        setItems(findItem ? [findItem] : []);
    };

    const onOpen = (key: string) => {
        setItems(postsData);
        notification.close(key);
    };

    const onSearch = (searchText: string) => {
        setSearchOptions(options.filter(({ value }: ISearchOptions) => value.includes(searchText)));
        setItems(postsData.filter(({ title }: ISearchOptions) => title.includes(searchText)));
    };

    const onChange = (data: string) => setValue(data);

    const onClose = () => setItems(postsData);

    const openNotification = () => {
        const key = `open${Date.now()}`;
        const btn = (
            <Button
                type="primary"
                size="small"
                onClick={() => onOpen(key)}
            >
                Confirm
            </Button>
        );

        notification.open({
            message: 'Notification Title',
            description: value,
            onClose,
            btn,
            key,
        });
    };

    return (
        <div className="autoCompleteContainer">
            <AutoComplete
                placeholder="Search posts..."
                className="autoComplete"
                value={value}
                options={searchOptions}
                onSelect={onSelect}
                onChange={onChange}
                onSearch={onSearch}
            />
            <Button
                disabled={!value}
                onClick={() => {
                    openNotification()
                    setValue('')
                }}
            >
                Send
            </Button>
        </div>
    );
};

export default SearchPanel;
