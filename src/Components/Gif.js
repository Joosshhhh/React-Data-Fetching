import React from 'react';
import PropTypes from 'prop-types';

const Gif = props => (
    <li className="gif-wrap">
        <img src={props.url} alt=""/>
    </li>
);

Gif.propTypes = {
    url: PropTypes.string.isRequired
};
export default Gif;