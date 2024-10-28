import {Menu, MenuItems, MenuButton, Transition} from '@headlessui/react'
import React, {Fragment} from 'react'
import {IoMenu} from 'react-icons/io5'
import DropdownMenuItem from './DropdownMenuItem'

interface Props {
  tags: string[]
}

export default function DropdownMenu({tags}: Props){
  return (
  <Menu as="div" className="relative inline-block text-left">
  <div>
    <MenuButton
      aria-label="menu"
      className="inline-flex justify-center rounded-md border border-zinc-400 dark:border-zinc-700 px-2 py-2 text-sm font-medium shadow-sm hover:bg-orange-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 transition-all">
      <IoMenu className="h-5 w-5"/>
    </MenuButton>
  </div>
</Menu>
  )
}
