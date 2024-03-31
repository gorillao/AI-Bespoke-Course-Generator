'use client'
import React from 'react'
import { Form, FormField, FormItem, FormLabel, FormControl } from './ui/form'
import { createChaptersSchema } from '@/validators/course'
import {z} from "zod";
import {useForm} from "react-hook-form"

import {zodResolver} from '@hookform/resolvers/zod'
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { Plus, Trash } from 'lucide-react';
import {motion, AnimatePresence}from 'framer-motion'
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useToast } from './ui/use-toast';
import { useRouter } from 'next/navigation';



type Props = {};

type Input= z.infer<typeof createChaptersSchema>

const CreateCourseForm = (props: Props) => {
  const router=useRouter();
  const {toast}=useToast()
  const {mutate:createChapters, isLoading}=useMutation({
    mutationFn: async({title,units}:Input)=>{
        const response=await axios.post('/api/course/createChapters', {title,units})
        return response.data

    }
  })
  const form=useForm<Input>({
        resolver:zodResolver(createChaptersSchema),
        defaultValues:{
            title:'',
            units:['','','']
        }
    })

  function onSubmit(data:Input){
        if (data.units.some(unit=>unit==='')){
            toast({
                title:"error",
                description:"please fill all the units",
                variant:"destructive",

            })
            return;
        }
        createChapters(data,{
            onSuccess:({course_id})=>{
                toast({
                    title:"success",
                    description:"course created successfully",
                })
                router.push(`/create/${course_id}`)

            },
            onError:(error)=>{
                console.error(error)
                toast({
                    title:"Error",
                    description:"Something went wrong",
                    variant:"destructive",
                })
            }
        })
    }
  form.watch();
  

  return (
    <div className='w-full'>
        <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className='w-full mt-4'>
            <FormField
            control={form.control}
            name='title'
            render={({field})=>{
                return(<FormItem className="flex flex-col items-start w-full sm:items-center flex-row">
                    <FormLabel className="flex-[1] text-xl">
                        Title
                    </FormLabel>
                    <FormControl className="flex-[6]">
                        <Input
                        placeholder="Enter the main topic of the course"
                        {...field}/>
                    </FormControl>
                </FormItem>
                )
            }}/>
            <AnimatePresence>
                           