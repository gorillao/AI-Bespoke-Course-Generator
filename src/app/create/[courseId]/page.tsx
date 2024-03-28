import ConfirmChapters from '@/components/ConfirmChapters'
import { getAuthSession } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { Info } from 'lucide-react'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
    params :{
        courseId: string 
    }
}

const CreateChapters = async ({params:{ courseId}}: Props) => {
    const session = await getAuthSession()
    if (!session?.user){
        return redirect('/gallery