import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { IoChevronDown } from "react-icons/io5";

export default function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left pl-5 lg:pl-0 lg:pr-10 ">
            <div>
                <MenuButton className="mr-5 lg:mr-10 flex w-full justify-between rounded-md bg-white dark:bg-darkGray px-2 py-4 text-sm font-semibold text-gray-900 dark:text-white shadow-md  hover:bg-gray-50">
                    Options
                    <IoChevronDown aria-hidden="true" className="ml-5 lg:ml-10 h-5 w-5 text-gray-400 " />
                </MenuButton>
            </div>

            <MenuItems
                transition
                className="absolute right-0 lg:right-10 z-10 mt-2 w-[90%] lg:w-56 origin-top-right rounded-md dark:bg-darkGray bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
                <div className="py-1">
                    <MenuItem>
                        <a
                            href="#"
                            className="  dark:hover:bg-darkBlue block px-4 py-2 text-sm text-gray-700 dark:text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            Account settings
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            className=" dark:hover:bg-darkBlue block px-4 py-2 text-sm text-gray-700 dark:text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            Support
                        </a>
                    </MenuItem>
                    <MenuItem>
                        <a
                            href="#"
                            className="dark:hover:bg-darkBlue block px-4 py-2 text-sm text-gray-700 dark:text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                        >
                            License
                        </a>
                    </MenuItem>
                    <form action="#" method="POST">
                        <MenuItem>
                            <button
                                type="submit"
                                className="dark:hover:bg-darkBlue block w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                                Sign out
                            </button>
                        </MenuItem>
                    </form>
                </div>
            </MenuItems>
        </Menu>
    )
}
