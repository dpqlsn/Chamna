import '../App.css';
import '../index.css';
import '../font/BMKkubulimTTF.woff'
import logo from '../pic/chamna.jpg';

function Landing(){
    return(
        <>
        <div className='logo'>
            <img src = {logo} width='109px'/>
            <div className='slogan'>참된 나를 추억하다</div>
        </div>
        </>
    )
}

export default Landing;