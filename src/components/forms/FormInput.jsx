import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({ type, name, id, placeholder = 'Enter Field', register }) => {
    return (
        <input type={type} name={name} id="improve" placeholder={placeholder}
            className='bg-gray-200 w-full outline-none px-4 py-2 rounded' {...register} />
    )
}

FormInput.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
}

export default FormInput;