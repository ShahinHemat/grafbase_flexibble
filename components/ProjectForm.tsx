'use client'

import { SessionInterface } from '@/common.types'
import React from 'react'

type Props = {
    type: string,
    session: SessionInterface,

}

const ProjectForm = ({ type, session }: Props) => {
    const handleFormSubmit = (e: React.FormEvent) => {

    }

  return (
    <form onSubmit={handleFormSubmit} className='flexStart form'>

    </form>
  )
}

export default ProjectForm