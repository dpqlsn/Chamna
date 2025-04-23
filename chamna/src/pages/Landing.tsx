import '../App.css';
import '../index.css';
import logo from '../pic/chamna.jpg';

function Landing() {
    return (
        <div className='wrapper'>
            <div className='logo'>
                <img src={logo} width='109px' />
                <div className='slogan'>참된 나를 추억하다</div>
            </div>
        </div>
    );
}

export default Landing;