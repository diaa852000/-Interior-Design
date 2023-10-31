import React from 'react'
import FadeIn from '../../components/FadeIn/FadeIn'
import { services } from '../../fixtures/data'



const Services = () => {
    return (
        <div id='services' className='max-w-[1490px] mx-auto mt-[160px] px-10 flex flex-col xs:flex-row gap-12 xs:gap-6 xs:justify-between w-full'>
            {
                services.map((service, index) => (
                    <FadeIn key={index} delay={0.2} direction={"down"}>
                        <div className='flex flex-col lg:flex-row gap-4 w-full items-center'>
                            <img src={service.icon} alt={service.title} />
                            <div className='flex flex-col gap-1.5'>
                                <h3 className='text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium'>
                                    {service.title}
                                </h3>
                                <h6 className='text-center lg:text-start text-base lg:text-lg text-fontGray font-medium'>
                                    {service.subtitle}
                                </h6>
                            </div>
                        </div>
                    </FadeIn>
                ))
            }
        </div>
    )
}

export default Services