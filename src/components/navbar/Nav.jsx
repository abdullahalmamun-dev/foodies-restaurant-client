import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <Navbar fluid rounded className="bg-[#101418] text-[#FFC] mt-10">
        <Navbar.Brand href="/">
          <img
            src="/logo1.png"
            className="mr-3 md:h-20 h-9 md:w-20"
            alt="Foodies Restaurant Logo"
          />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white uppercase">
Foodies Restaurant          </span> */}
        </Navbar.Brand>
        <div className="flex md:order-2">
          <NavLink to={'/login'} className="bg-[#FFCE6D]">Login</NavLink>
          <Dropdown className="hiddend">
            arrowIcon={false}
            inline  
            label={
              <Avatar
                alt="User settings"
                img=""
                rounded
              />
            }
          
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-[#FFC] text-2xl" href="/">
            Home
          </Navbar.Link>
          <Navbar.Link className="text-[#FFC] text-2xl" href="/AllFoods">All Foods</Navbar.Link>
          <Navbar.Link className="text-[#FFC] text-2xl" href="/gallery">Gallery</Navbar.Link>
          <Navbar.Link className="text-[#FFC] text-2xl" href="/about">About</Navbar.Link>
          <Navbar.Link className="text-[#FFC] text-2xl" href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
