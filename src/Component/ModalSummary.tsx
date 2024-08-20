import React from 'react'

type ModalProp = {
    onClose: () => void,  
}
export const ModalSummary = ({onClose}:ModalProp) => {
  return (
    <div className='w-screen h-full absolute inset-0 bgx-[#171717]' >
        all the best
    </div>
  )
}
