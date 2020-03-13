import React from 'react';

const NavList = ({ pages,activePage,newRoute }) => {
  return (
    <ul id="topnav">
      {
        
          
        pages.map((page, i) => {
          return (
            <li
            id="projects"
            key={i}
            className={activePage === page
                ? "active "
                : "active"
            }
          >

          {
            
          // <a href={page} onClick={this.newRoute}>
          // {page}
          //   </a>

          }

          
          </li>
            // <NavLink
            //   // key={i}
            //   // id={robots[i].id}
            //   // name={robots[i].name}
            //   // email={robots[i].email}
            //   />
          );
        })
      }
      </ul>
  );
}

export default NavList;