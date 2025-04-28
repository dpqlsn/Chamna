import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../index.css';
import loading from '../pic/Loading.png';
import loading2 from '../pic/Loading2.png';
import loading3 from '../pic/Loading3.png';
import { useState, useEffect } from 'react';

function Loading() {
    const navigate = useNavigate();
    const [currentImage, setCurrentImage] = useState(loading);

    useEffect(() => {
        const images = [loading, loading2, loading3];
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % images.length;
            setCurrentImage(images[index]);
        }, 500); 

        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        navigate('/Main');
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className='wrapper'>
                <div className='logo'>
                    <img src={currentImage} width='276px' height='114px' alt="Loading" />
                    <div className='slogan'>Loading</div>
                </div>
            </div>
        </div>
    );
}

export default Loading;