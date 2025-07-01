import AppContainer from '@/components/app-container'
import PostCreation from '@/components/post-creation'
import { Metadata } from 'next'
import Link from 'next/link'
import React, { Suspense } from 'react'

const Page = async () => {
    return (
        <AppContainer>
            <div className=" min-h-screen py-10">
                <div className="flex justify-between">

                    <h1 className="font-bold text-xl mb-4">ایجاد پست جدید</h1>
                    <Link href={'/'}>بازگشت</Link>
                </div>
                <PostCreation />

            </div>
        </AppContainer>
    )
}

export default Page

export const metadata: Metadata = {
    title: 'ایجاد پست جدید',
}