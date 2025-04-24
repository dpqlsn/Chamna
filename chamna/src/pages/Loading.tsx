import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../index.css';
import loading from '../pic/Loading.png';

function Loading() {
    const navigate = useNavigate();

    const handleClick = () => {
    navigate('/Main');

    };
    return(
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className='wrapper'>
                <div className='logo'>
                    <img src={loading} width='276px' height='114px' />
                    <div className='slogan'>Loading</div>
                </div>
            </div>
        </div>
    )
}

export default Loading;