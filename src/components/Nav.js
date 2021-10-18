import React from 'react';


const styles = {
  navStyle: {
    background: 'green',
    justifyContent: 'flex-end',
  },
};


function Nav() {
  return (
    <nav style={styles.navStyle} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Nav;