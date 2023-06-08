import React, { useState } from 'react'
import { Films } from '../../shared/ListOfFilms';
import { useParams } from 'react-router-dom';
import './Detail.css'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import ModalCase from '../modalcase/ModalCase';

function Detail() {
    const filmName = useParams();
    const film = Films.find(obj => {
        return obj.id == filmName.id;
    });
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[700]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[500],
        },
    }));
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='detail-container'>
            <div className='detail-main'>
                <img src={`../${film.img}`} alt='' />
                <div className='movie-detail'>
                    <div><h2>{film.title}</h2></div>
                    <div className='detail-year'><strong>Publisher year:</strong> {film.year}</div>
                    <div className='detail-nation'><strong>Nation:</strong> {film.nation}</div>
                    <div className='detail-type'><strong>Type:</strong> {film.type}</div>
                    <div className='detail-time'><strong>Time:</strong> {film.time}</div>
                    <div className='detail-description'>
                        <strong>Description:</strong><p>{film.info}</p>
                    </div>
                    <div className='button-group row'>
                        <div className='trailer-button col'>
                            <ColorButton variant="contained" onClick={() => setIsOpen(true)} >Trailer</ColorButton>
                        </div>
                        <div className='watch-button col'>
                            <ColorButton variant="contained">Watch</ColorButton>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <ModalCase setIsOpen={setIsOpen} film={film} />}
        </div>
    )
}

export default Detail