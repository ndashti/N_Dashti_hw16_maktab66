import React from 'react'
import PropTypes from 'prop-types';


export default function List(props) {

  return (
  <>
    <div>{props.title}</div>
  </>
  )
}

List.propTypes = {
  title: PropTypes.string
};