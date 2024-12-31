"use client";

import TextArea from '@/components/forms/TextArea';
import React from 'react'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from "zod";

const formSchema = z.object({
    content: z.string().min(3).max(200),
    improve: z.string().min(3).max(200),
});

const YouTubeReview = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema)
    });

    const sendToFirebase = (data) => {
        console.log(data);
    }

    return (
        <div className='bg-white m-3 p-5 rounded'>
            <h4 className='font-semibold'>Share your reviews</h4>
            <form action="" className='my-5 space-y-4' onClick={handleSubmit(sendToFirebase)}>
                <div>
                    <TextArea label="What do you think about the youtube content?" name="content" id="content" placeholder="Explain briefly!" register={register('content')} error={errors.content} />

                    <TextArea label="How we can improve?" name="improve" id="improve" placeholder='Enter information briefly!' register={register('improve')} error={errors.improve} />
                </div>
                <div>
                    <button type="submit" className='px-4 py-2 rounded bg-orange-500 hover:bg-orange-600  text-white'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default YouTubeReview;