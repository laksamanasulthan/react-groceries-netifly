import React from 'react'

function Footer({ length }) {
  
    const today = new Date();
  
    return (
    <footer>
        <p>{length} list {length === 1 ? 'item' : 'items'}</p>
        <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer