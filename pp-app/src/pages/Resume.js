import React from 'react'
import { Link } from 'react-router-dom';
import { Bio, experiences } from '../data/constants';
import TranslateIcon from '@mui/icons-material/Translate';

const Resume = () => {
      return (
            <div className='min-h-screen md:sticky md:top-0 white-tx pb-6 p-4'>
                  <div className='container mx-auto'>
                        <div className='flex pt-20 flex-wrap sticky top-0 black-bg gap-2'>
                              <p className="white-tx text-sm font-normal">curriculum vitae</p>
                              <div className="w-full h-[0.1px] mt-2 border-div"></div>
                        </div>
                        <div className='py-5'>
                              <div className='flex justify-between'>
                                    <p className='gray-tx  lg:w-1/2 lg:block hidden font-light text-base'>
                                          {Bio.description}
                                    </p>
                                    <div className='flex gap-3'>
                                          <TranslateIcon />
                                          {Bio.languages.map(lang => (
                                                <p key={lang}>{lang}</p>
                                          ))}
                                    </div>
                              </div>
                        </div>
                        <Link to={Bio.resume} target='new' className='border-white border-[1px] text-center text-sm font-normal white-tx px-3 py-2 rounded-lg cursor-pointer hover:underline black-bg'>
                              go to resume
                        </Link>

                        <div className='flex flex-wrap pt-24 gap-20'>
                              {experiences?.map(exp => (
                                    <div key={exp.id} className='flex basis-full justify-between'>
                                          <div className='flex flex-wrap flex-col basis-4/12'>
                                                <p className='flex'>
                                                      {exp.company}
                                                </p>
                                                <Link to={exp.website} target='new' className='max-w-max hover:text-[rgb(235,235,235)] font-light text-base gray-tx hover:underline'>
                                                      see website
                                                </Link>
                                          </div>
                                          <div className='flex flex-wrap flex-col basis-8/12'>
                                                <div className='flex justify-between'>
                                                      <h1>
                                                            {exp.role}
                                                      </h1>
                                                      <p className=''>
                                                            {exp.date}
                                                      </p>
                                                </div>
                                                <p className='flex gray-tx font-light text-base'>
                                                      {exp.desc}
                                                </p>
                                          </div>
                                    </div>
                              ))}
                        </div>
                  </div>
            </div>
      )
}

export default Resume