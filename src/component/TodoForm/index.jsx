import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');
    const handleValueChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        if (onSubmit) {
            const formValues = {
                title: value,
            };
            onSubmit(formValues);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange} />
        </form>
    );
}

export default TodoForm;