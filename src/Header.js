import React from 'react'

const Header = ({ title }) => {

  return (
    <header>
        <h1>{title}</h1>
    </header>
    // <div>Header</div>
  )
}

Header.defaultProps = {
    title: 'Default Title'
}

export default Header