import React from 'react';
import Container from '../Container';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserMenu from './UserMenu';

const NavBar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border[1px]'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Logo/>
            <SearchBar/>
            <UserMenu/>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default NavBar;
