import AppContainer from '@/components/app-container'
import PostDetails from '@/components/post-details'
import { Metadata } from 'next'
import Link from 'next/link'
import React, { Suspense } from 'react'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}
const Page = async ({ params }: PageProps) => {
    const { slug } = await params

    return (
        <AppContainer>
            <div className=" min-h-screen py-10">
                <div className="flex justify-between">

                    <h1 className="font-bold text-xl mb-4">جزئیات پست</h1>
                    <Link href={'/'}>بازگشت</Link>
                </div>
                <Suspense fallback={<p>درحال بارگذاری پست...</p>}>
                    <PostDetails slug={slug} />
                </Suspense>
            </div>
        </AppContainer>
    )
}

export default Page
export const metadata: Metadata = {
  title: 'جزئیات پست',
}