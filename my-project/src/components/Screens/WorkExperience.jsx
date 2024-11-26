import React from 'react'
import GTLogo from '../../assets/GTLogo.jpeg'
import amazonLogo from '../../assets/amazonLogoss.jpg'
import microsoftLogo from '../../assets/microsoftLogo.png'
import QueenMaryUniversityLogo from '../../assets/Queen-Mary-UniversityLogo.png'

const WorkExperience = () => {
    const work_experience =[
        {
            Title_company_name: 'Grant Thornton - Technology Risk Consultant',
            description: 'This is a brief description of my role at Grant Thornton.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nemo, consequatur unde a ipsa aut et tempora aperiam expedita! Eaque illum et ipsum exercitationem? Dignissimos eveniet debitis quisquam voluptates autem?',
            logo: GTLogo
        },

        {
            Title_company_name: 'Amazon - Program Manager',
            description: 'This is a brief description of my role at Grant Thornton.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nemo, consequatur unde a ipsa aut et tempora aperiam expedita! Eaque illum et ipsum exercitationem? Dignissimos eveniet debitis quisquam voluptates autem?',
            logo: amazonLogo
        },

        {
            Title_company_name: 'Microsoft - Technology Internship',
            description: 'This is a brief description of my role at Grant Thornton.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nemo, consequatur unde a ipsa aut et tempora aperiam expedita! Eaque illum et ipsum exercitationem? Dignissimos eveniet debitis quisquam voluptates autem?',
            logo: microsoftLogo
        },

        {
            Title_company_name: 'Grant Thornton - Technology Risk Consultant Internship',
            description: 'This is a brief description of my role at Grant Thornton.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nemo, consequatur unde a ipsa aut et tempora aperiam expedita! Eaque illum et ipsum exercitationem? Dignissimos eveniet debitis quisquam voluptates autem?',
            logo: GTLogo
        },

        {
            Title_company_name: 'Queen Mary University London - Teaching Assistant',
            description: 'This is a brief description of my role at Grant Thornton.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nemo, consequatur unde a ipsa aut et tempora aperiam expedita! Eaque illum et ipsum exercitationem? Dignissimos eveniet debitis quisquam voluptates autem?',
            logo: QueenMaryUniversityLogo
        },

        {
            Title_company_name: 'Queen Mary University London - Student Ambassador',
            description: 'This is a brief description of my role at Grant Thornton.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum nemo, consequatur unde a ipsa aut et tempora aperiam expedita! Eaque illum et ipsum exercitationem? Dignissimos eveniet debitis quisquam voluptates autem?',
            logo: QueenMaryUniversityLogo
        },
    ]



  return (
    <div >
        <div className='container gap-11 mx-10 min-h-[500px] bg-white w-full  '>
        <h2 className='mt-16 text-4xl font-bold'>Work Experience</h2>
            <div className='flex flex-col justify-center items-center text-center md:text-left pt-24 md:p-0 pb-5 bg-white w-full'>
                <div className='grid mdLgrid cols-2'>
                    {work_experience.map((work_experience,index) => (
                        <div className='flex gap-6 items-start my-24'>
                            <img className='rounded-md' src= {work_experience.logo} alt="" height={100} width={100}/>
                                <div className='flex flex-col'>
                                    <h2 className='my-1 font-semibold text-2xl'>{work_experience.Title_company_name}</h2>
                                        <ul className='list-disc pl-5'>
                                            <li className='text-base text-gray-600'>{work_experience.description}</li>
                                        </ul>
                                </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkExperience