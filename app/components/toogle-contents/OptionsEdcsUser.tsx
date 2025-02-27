import React from 'react'
import { EdcsUsersOptionsImage, RedRoundedCheckImage, RoundedCheckImage } from '../SvgImages'

const OptionsEdcsUser = () => {
  return (
    <section className='space-y-4'>
        <div>
            <EdcsUsersOptionsImage className=''/>
        </div>
        <div className='w-full grid gap-2  md:grid-flow-col mt-4'>
            <section className='w-full'>
                <h1 className='text-red-600 sm:font-bold'>{"HEI Users (Registrars, Admins)"}</h1>
            <ul className='mt-5'>
                <li className='flex items-center justify-items-center text-[13px] '><RedRoundedCheckImage className='m-3'/> {"Submit enrollment data and promotional reports."}</li>
                <li className='flex items-center justify-items-center text-[13px] '><RedRoundedCheckImage className='m-3'/> {"Manage academic programs for CHED approval."}</li>
                <li className='flex items-center justify-items-center text-[13px] '><RedRoundedCheckImage className='m-3'/> {"Track the status of submitted reports."}</li>
            </ul>
            </section>
            <section className='w-full'>

                <h1 className='text-blue-600 sm:font-bold'>{"CHED Regional Users"}dsasd</h1>
            <ul className='mt-5'>
                <li className='flex items-center justify-items-center text-[13px] '><RoundedCheckImage className='m-3 w-[18px]'/>{"Review and validate HEI data submissions."}</li>
                <li className='flex items-center justify-items-center text-[13px] '><RoundedCheckImage className='m-3 w-[18px]'/>{"Approve or request revisions on reports and programs."}</li>
                <li className='flex items-center justify-items-center text-[13px] '><RoundedCheckImage className='m-3 w-[18px]'/>{"Monitor enrollment trends and generate insights."}</li>
                
            </ul>
            </section>
        </div>
    </section>
  )
}

export default OptionsEdcsUser