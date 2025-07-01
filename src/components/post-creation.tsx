'use client';

import { coreClient } from '@/services/core.service';
import { CreatePostPayload } from '@/types';
import { nanoid } from 'nanoid';
import React, { useState } from 'react';

const PostCreation = () => {
    const [form, setForm] = useState<CreatePostPayload>({
        title: '',
        body: '',
        userId: nanoid(),
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage(null);

        try {
            await coreClient.createPost(form);
            setStatus('success');
            setMessage('✅ پست با موفقیت ایجاد شد!');
            setForm({ title: '', body: '', userId: nanoid(), });
        } catch (error) {
            console.error(error);
            setStatus('error');
            setMessage('❌ ارسال پست با خطا مواجه شد.');
        }
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-10">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
            >
                <div>
                    <label className="block text-gray-700 mb-1">عنوان پست</label>
                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 mb-1">محتوای پست</label>
                    <textarea
                        name="body"
                        value={form.body}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 resize-none"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition disabled:opacity-50"
                >
                    {status === 'loading' ? 'در حال ارسال...' : 'ارسال پست'}
                </button>

                {message && (
                    <p className={`text-sm mt-2 ${status === 'success' ? 'text-green-600' : 'text-red-500'}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default PostCreation;
