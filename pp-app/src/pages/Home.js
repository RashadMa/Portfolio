import React, { useState } from 'react'
import Hero from '../components/heroSection'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Experience from '../components/experience'
import ProjectDetails from '../components/ProjectDetails'

const Home = () => {
      const [openModal, setOpenModal] = useState({ state: false, project: null });
      return (
            <>
                  <Hero />
                  <Skills />
                  <Projects openModal={openModal} setOpenModal={setOpenModal} />
                  <Experience />
                  {openModal.state &&
                        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                  }
            </>
      )
}

export default Home