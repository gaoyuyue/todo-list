import React from 'react'
import FilterLink from "../containers/FilterLink";
import {VisibilityFilters} from "../actions";

const Footer = () => (
    <p>
        <span>Show:</span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETE</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
    </p>
);

export default Footer;