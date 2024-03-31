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
             