import React from 'react'

const YouTubeReview = () => {
    return (
        <div className='bg-white m-3 p-5 rounded'>
            <h4 className='font-semibold'>Share your reviews</h4>
            <form action="" className='my-5'>
                <div>
                    <label htmlFor="improve" className='block text-gray-700 mb-2'>How we can improve?</label>
                    <textarea name="improve" id="improve" placeholder='Enter information briefly!' className='bg-gray-200 w-full outline-none px-4 py-2 rounded'></textarea>
                </div>
                <div>
                    <button type="button" className='px-4 py-2 rounded bg-orange-500 hover:bg-orange-600  text-white'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default YouTubeReview;