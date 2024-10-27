import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Nav = () => {
  const { user, signOut } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div>
      <Navbar fluid rounded className="bg-[#101418] text-[#FFC] mt-10">
        <Navbar.Brand href="/">
          <img
            src="/logo1.png"
            className="mr-3 md:h-20 h-9 md:w-20"
            alt="Foodies Restaurant Logo"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          {user ? (
            <Dropdown
              className="bg-[#FFCE6D] text-[#101418] text-xl"
              inline
              label={<img className="rounded-full w-7 mr-2 md:mr-0" src={user.photoURL}></img>}
              arrowIcon={false}
            >
              <Dropdown.Header className="bg-[#FFCE6D] text-[#101418]">
                <span className="block text-lg">
                  {user.displayName || "User"}
                </span>
                <span className="block truncate text-sm font-medium">
                  <span className="font-black">Email:</span> {user.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Item className="hover:bg-[#101418] hover:text-[#FFCE6D]">
                Dashboard
              </Dropdown.Item>
              <Dropdown.Item className="hover:bg-[#101418] hover:text-[#FFCE6D]">
                Settings
              </Dropdown.Item>
              <Dropdown.Item className="hover:bg-[#101418] hover:text-[#FFCE6D]">
                Earnings
              </Dropdown.Item>

              <Dropdown.Item
                className="hover:bg-[#101418] hover:text-[#FFCE6D]"
                onClick={handleSignOut}
              >
                Sign out
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <NavLink
              to={"/login"}
              className="bg-[#FFCE6D] text-[#101418] font-black px-4 py-2 rounded"
            >
              Login
            </NavLink>
          )}
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-[#FFC] text-xl" href="/">
            Home
          </Navbar.Link>
          <Navbar.Link className="text-[#FFC] text-xl" href="/AllFoods">
            All Foods
          </Navbar.Link>
          <Navbar.Link className="text-[#FFC] text-xl" href="/gallery">
            Gallery
          </Navbar.Link>
          <Navbar.Link className="text-[#FFC] text-xl" href="/about">
            About
          </Navbar.Link>
          <Navbar.Link className="text-[#FFC] text-xl" href="/contact">
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
