import React, { useState } from 'react'
import { Films } from '../../shared/ListOfFilms';
import { useParams } from 'react-router-dom';
import './Detail.scss'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import ModalCase from '../modalcase/ModalCase';

function Detail() {
    const filmName = useParams();
    const film = Films.find(obj => {
        return obj.id == filmName.id;
    });
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(grey[700]),
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[700],
        },
    }));
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='detail-container'>
            <div className='detail-img'>
                <img src={`../${film.img}`} alt='' />
            </div>
            <div className='detail-movie'>
                <div className='detail-header'><h2>{film.title}</h2></div>
                <div className='detail'>
                    <div className='year'><strong>Publisher year:</strong> {film.year}</div>
                    <div className='nation'><strong>Nation:</strong> {film.nation}</div>
                    <div className='type'><strong>Type:</strong> {film.type}</div>
                    <div className='time'><strong>Time:</strong> {film.time}</div>
                    <div className='description'>
                        <strong>Description:</strong><p>{film.info}</p>
                    </div>
                </div>
                <div className='trailer-button'>
                    <ColorButton variant="contained" onClick={() => setIsOpen(true)} >Trailer</ColorButton>
                </div>
            </div>
            {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
        </div>
    )
}

export default Detail