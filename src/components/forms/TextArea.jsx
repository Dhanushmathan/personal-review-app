import React from 'react'
import PropTypes from 'prop-types'

const TextArea = ({ name, id, label, placeholder, register, error }) => {
    return (
        <div>
            <label htmlFor={id} className='block text-gray-700 mb-2'>{label}</label>
            <textarea name={name} id={id} placeholder={placeholder}
                className='bg-gray-200 w-full outline-none px-4 py-2 rounded' {...register} ></textarea>
            {error && <small className='text-red-600 font-semibold' >{error.message}</small>}
        </div>
    )
}

TextArea.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    register: PropTypes.object,
    error: PropTypes.object,
};

export default TextArea;