import React from 'react';

interface HeaderInterface {
  title: string
}

const Header: React.FC<HeaderInterface> = () => {
  return (
    <header>
      <h1>Logo</h1>
    </header>
  )
}

export default Header;