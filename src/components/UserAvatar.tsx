import { Avatar, AvatarFallback } from './ui/avatar'
import { User } from 'next-auth'
import React from 'react'
import Image from 'next/image'

type Props = {
    user:User
}

const UserAvatar = ({user}: Props) => {
  return (
    <Avatar>
        {user.image?(
            <div className='relative w-full h-full aspect-sq