import React from 'react'
import ClimateSenseHomepagePhoneOne from '../../assets/ClimateSenseHomepagePhoneOne.jpg'
import ClimateSenseHomepageTablet from '../../assets/ClimateSenseHomepageTablet.jpg'
import ClimateSenseLoginScreen from '../../assets/ClimateSenseLoginScreen.jpg'
import ClimateSenseBlogDemo from '../../assets/ClimateSenseBlogDemo.mp4'

import FDMWellbeingHomepageOne from'../../assets/FDMWellbeingHomepageOne.jpg'
import FDMWellbeingHomepageTwo from'../../assets/FDMWellbeingHomepageTwo.jpg'
import FDMWellbeingDemo from'../../assets/FDMWellbeingDemo.mp4'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const Projects = () => {
    const projects =[
        {
            Title: 'Climate Sense',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit culpa, sequi sapiente quos recusandae nihil vitae ipsum cumque eos dolorem cupiditate veniam illum expedita non? Qui fugiat earum voluptatibus?',
            additional_pictures: [ClimateSenseHomepagePhoneOne,ClimateSenseHomepageTablet, ClimateSenseLoginScreen, FDMWellbeingHomepageOne, FDMWellbeingHomepageTwo],
        },

        {
            Title: 'Crow Haven',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit culpa, sequi sapiente quos recusandae nihil vitae ipsum cumque eos dolorem cupiditate veniam illum expedita non? Qui fugiat earum voluptatibus?',
            additional_pictures: [ClimateSenseHomepagePhoneOne,ClimateSenseHomepageTablet, ClimateSenseLoginScreen],
        },

        {
            Title: 'FDM Wellbeing Application',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit culpa, sequi sapiente quos recusandae nihil vitae ipsum cumque eos dolorem cupiditate veniam illum expedita non? Qui fugiat earum voluptatibus?',
            additional_pictures: [FDMWellbeingHomepageOne,FDMWellbeingHomepageTwo],
        },

        {
            Title: 'Weather Application (React Native Expo)',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit culpa, sequi sapiente quos recusandae nihil vitae ipsum cumque eos dolorem cupiditate veniam illum expedita non? Qui fugiat earum voluptatibus?',
            additional_pictures: [ClimateSenseHomepagePhoneOne,ClimateSenseHomepageTablet, ClimateSenseLoginScreen],
        },

        {
            Title: 'Weather Application (React JS)',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis velit culpa, sequi sapiente quos recusandae nihil vitae ipsum cumque eos dolorem cupiditate veniam illum expedita non? Qui fugiat earum voluptatibus?',
            additional_pictures: [ClimateSenseHomepagePhoneOne,ClimateSenseHomepageTablet, ClimateSenseLoginScreen],
        },

    ]


    return(
        <div>
            <h2 className='ml-28 mt-16 text-4xl mb-10 font-bold'>Projects</h2>
            <div className='flex justify-center items-center bg-white'>
                <div className='container gap-11 mx-10 min-h-[500px] bg-white w-full'>
                    {projects.map((projects,index) =>(
                        <div >
                            <h2 className='font-semibold text-3xl my-10 text-center justify-items-center'>{projects.Title}</h2>
                            <p className='text-center justify-items-center'>{projects.description}</p>
                            <div className='box'>
                                <Carousel swipeable={true} showIndicators={true} showThumbs={false} showArrows={true}>
                                    <div className='flex w-full'>
                                        {projects.additional_pictures.map((image, imageIndex) => (
                                            <div key={imageIndex}>
                                            <img src={image} alt={`image ${imageIndex}`} 
                                            className="rounded-md w-full h-auto mr-20 img-fluid rounded" style={{maxWidth: '700px', maxHeight:'750px', width: 'auto', height: 'auto'}}/>
                                            </div>
                                        ))}
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects