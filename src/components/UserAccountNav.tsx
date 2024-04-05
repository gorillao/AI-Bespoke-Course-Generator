'use client'

import React from 'react'
import { Button } from './ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu'
//import { UserInfo } from 'os'
//import { AdapterUser } from 'next-auth/adapters'
import { User } from 'next-auth'
import { signOut } from 'next-auth/react'
import { LogOut } from 'lucide-react'
import UserAvatar from './UserAvatar'
//import { userAgent } from 'next/server'


type Props = {
    user:User
}

const UserAccountNav = ({user}: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            <UserAvatar user={user}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">