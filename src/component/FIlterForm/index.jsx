import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

FilterForm.propTypes = {
    onSubmit: PropTypes.func,
};

FilterForm.defaultProps = {
    onSubmit: null,
}

function FilterForm(props) {
    const { onSubmit } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);
    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }
        if (!onSubmit) return;
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                title_like: e.target.value,
            };
            onSubmit(formValues);
        }, 300)

    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
        </form>
    );
}

export default FilterForm;