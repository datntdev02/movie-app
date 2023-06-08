import React from 'react'
import './ModalCase.css'

function ModalCase({ setIsOpen, film }) {
    return (
        <div className='modal-show' onClick={() => setIsOpen(false)}>
            <div id='modal1' className='modal' style={{ display: 'block', top: '48%' }}>
                <span className='close-btn' onClick={() => setIsOpen(true)}>x</span>
                <div className='modal-content'>
                    <iframe
                        width='854px' height='480px'
                        src={film.clip}
                        title={film.title}
                        frameborder="0"
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}

export default ModalCase