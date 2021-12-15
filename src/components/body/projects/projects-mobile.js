import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.scss'
import './projects-mobile.css';
import { ProjectData } from '../../../assets/data/projects';
import ProjectCard2 from './project-card2';
import Seprator from '../../common/seprator';
SwiperCore.use({Navigation, Pagination, Scrollbar, A11y });
function ProjectsMobile() {
    const data = ProjectData;
    return (
        <div className='projects-mobile'>
            <Seprator/>
            <div className="section-title">
            <lable >projects</lable>
            </div>
            <div className='cards-container-wrapper-mobile'>
            <Swiper
                spaceBetween={16}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                 {data.map((project)=>{
                    return <SwiperSlide> <ProjectCard2 project={project}/> </SwiperSlide>
                })}
             </Swiper>
            </div>
        </div>
    )
}

export default ProjectsMobile