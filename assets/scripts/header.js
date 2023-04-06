import React from 'react';

export const Header = ({ title, section }) => <header>
    <span>{title} </span><span>&#10230;</span><span> {section}</span>
</header>;