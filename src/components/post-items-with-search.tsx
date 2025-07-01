"use client";

import { useEffect, useState } from "react";
import SearchBar from "@/components/search-bar";
import PostItems from "@/components/post-items";
import { coreClient } from "@/services/core.service";
import { Post } from "@/types";

export default function PostItemsWithSearch() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [filtered, setFiltered] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        coreClient.getPosts().then((data) => {
            setPosts(data);
            setFiltered(data);
            setLoading(false);
        });
    }, []);

    const handleSearch = (query: string) => {
        const filteredData = posts.filter((post: any) =>
            post.title.toLowerCase().includes(query.toLowerCase())
        );
        setFiltered(filteredData);
    };

    if (loading) {
        return <p>در حال بارگذاری پست‌ها...</p>;
    }

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <PostItems posts={filtered} />
        </>
    );
}
