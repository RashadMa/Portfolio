import React from 'react';
import { CloseRounded } from '@mui/icons-material';
import { Modal } from '@mui/material';

const ProjectDetails = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <div className='w-full h-full absolute top-0 left-0 flex justify-center overflow-y-scroll transition-all ease-linear bg-[#000000a7]'>
        <div className='max-w-[800px] w-full rounded-2xl mx-12 my-3 h-min black-bg white-tx p-5 flex flex-col relative'>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <img alt='project img' className='w-full object-cover rounded-xl mt-7' src={project?.image} />
          <div className='inter text-2xl font-normal white-tx my-2'>{project?.title}</div>
          <div className='bb flex flex-wrap my-2'>
            {project?.tags.map((tag) => (
              <div className='inter text-sm font-light white-tx m-1 py-1 px-2 rounded-lg'>{tag}</div>
            ))}
          </div>
          <div className='inter text-base font-light white-tx m-1'>{project?.description}</div>
          <div className='flex justify-end mx-0 my-3 gap-3'>
            <a className='w-full text-center text-base font-semibold white-tx px-3 py-4 rounded-lg cursor-pointer hover:underline black-bg' href={project?.github} target='new'>View Code</a>
            <a className='w-full border-white border-[0.1px] text-center text-base font-semibold white-tx px-3 py-4 rounded-lg cursor-pointer hover:underline black-bg' href={project?.webapp} target='new'>View Live App</a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetails;
