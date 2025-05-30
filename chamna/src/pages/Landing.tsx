import { useNavigate } from 'react-router-dom';
import '../App.css';
import '../index.css';
import logo from '../pic/chamna.jpg';

function Landing() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/loading');
    };

    return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
            <div className='wrapper' style={{ flexDirection: 'column' }}>
                <img src={logo} width='109px' style={{ marginBottom: '20px' }} />
                <div className='slogan'>참된 나를 추억하다</div>
            </div>
        </div>
    );
}

export default Landing;
