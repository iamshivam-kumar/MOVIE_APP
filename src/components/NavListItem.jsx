import React from 'react'
import './navListItems.css'

const NavListItem = ({nav}) => {
  return (
    <li>
      <a href={nav.link}> {nav.name} </a>
    </li>
  );
}

export default NavListItem