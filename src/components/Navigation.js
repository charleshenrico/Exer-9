import React from 'react';

const Navigation = ({ menus }) => {
  return (
    <nav>
      <ul>
        {menus.map(menu => (
          <h1 className={menu.name} key={menu.id}>
            <a href={menu.url}>{menu.name}</a>
          </h1>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;