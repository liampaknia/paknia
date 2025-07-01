import AppContainer from "@/components/app-container";
import PostItems from "@/components/post-items";
import PostItemsWithSearch from "@/components/post-items-with-search";
import SearchBar from "@/components/search-bar";
import { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <AppContainer>
      <div className="min-h-screen py-10">
        <div className="flex justify-between mb-4">
          <h1 className="font-bold text-xl">لیست پست‌ها</h1>
          <Link
            href={"/submission"}
            className="bg-amber-500 cursor-pointer h-max rounded px-4 py-2 text-white"
          >
            ایجاد پست
          </Link>
        </div>

        <PostItemsWithSearch />
      </div>
    </AppContainer>
  );
}
export const metadata: Metadata = {
  title: 'لیست پست‌ها',
}