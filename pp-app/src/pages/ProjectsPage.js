import React, { useEffect } from 'react'
import { projects } from '../data/constants'

const ProjectsPage = () => {
      useEffect(() => {
            window.scrollTo(0, 0)
      }, [])
      return (
            <div className='min-h-screen md:sticky md:top-0 white-tx pb-6 p-4'>
                  <div className='container mx-auto'>
                        <div className='flex pt-20 flex-wrap sticky top-0 black-bg gap-2'>
                              <p className="white-tx text-sm font-normal">personal projects</p>
                              <div className="w-full h-[0.1px] mt-2 border-div"></div>
                        </div>
                        <div className='gray-tx pt-5 lg:w-1/2 lg:block hidden font-light text-base'>
                              You can look at the sample projects I developed for the purpose of gaining experience and expertise using different technologies from here.
                        </div>
                        <div div className="md:flex md:flex-wrap gap-10 pt-24 md:text-start text-center" >
                              {
                                    projects
                                          .map((project) => (
                                                <div key={project.id} className="black-bg flex flex-col xl:flex-row gap-12 lg:mb-5 mb-20">
                                                      <div className='xl:basis-1/2 basis-full flex flex-col gap-4'>
                                                            <div className="text-2xl font-medium white-tx">{project.title}</div>
                                                            <div className='gray-tx font-light text-base'>
                                                                  {project.description}
                                                            </div>
                                                            <p>
                                                                  used technologies
                                                            </p>
                                                            <div className="mt-1 flex flex-wrap justify-center md:justify-start gap-3">
                                                                  {project.tags?.map((tag, index) => (
                                                                        <span className="text-xs font-light white-tx" key={index}>{tag}</span>
                                                                  ))}
                                                            </div>
                                                            <div className='flex md:justify-start justify-center mx-0 my-3 gap-3'>
                                                                  <a className='text-center text-sm font-normal white-tx px-3 py-3 rounded-lg cursor-pointer hover:underline black-bg' href={project?.github} target='new'>View Code</a>
                                                                  <a className='border-white border-[1px] text-center text-sm font-normal white-tx px-3 py-3 rounded-lg cursor-pointer hover:underline black-bg' href={project?.webapp} target='new'>View Live App</a>
                                                            </div>
                                                      </div>
                                                      <div className='xl:basis-1/2 basis-full'>
                                                            <img alt="/" className="max-w-full h-auto object-center object-cover rounded-2xl" src={project.image} />
                                                      </div>
                                                </div>
                                          ))
                              }
                        </div >
                  </div >
            </div >
      )
}

export default ProjectsPage