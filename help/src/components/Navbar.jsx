import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
function NavList() {
  return (
    <ul className="my-2  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          to="/"
          className="flex items-center hover:text-emerald  transition-colors"
        >
          الرئيسية
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          to="/cities"
          className="flex items-center hover:text-emerald transition-colors"
        >
          صفحة القرى
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          to="/associations"
          className="flex items-center hover:text-emerald transition-colors"
        >
          صفحة الجمعيات
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          to="/communication"
          className="flex items-center hover:text-emerald transition-colors"
        >
          شروط الخصوصية
        </Link>
      </Typography>

      <Typography as="li" variant="small" className="p-1 font-medium">
        <Link
          to="/addVile"
          className="flex items-center hover:text-emerald transition-colors"
        >
           إضافة دوار
        </Link>
      </Typography>
    </ul>
  );
}

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto fixed top-0 text-rtl w-full rounded-none px-6 py-3">
      <motion.div className="flex items-center justify-betwe900">
        <Typography
          as="a"
          to="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        ></Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </motion.div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
