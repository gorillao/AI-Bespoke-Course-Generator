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
        return redirect('/gallery')
    }
    const course = await prisma.course.findUnique({
        where:{
            id:courseId,

        },
        include:{
            units:{
                include:{
                    chapters:true
                },
            },
        },
        
})
if (!course){
    return redirect('/create')
}
return (
    <div className="flex flex-col items-start max-w-xl mx-auto my-16"> 
    <h5 className='text-sm uppercase text-secondary-foreground/60'>
        Course Name
 