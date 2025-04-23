import '../App.css';
import '../index.css';
import loading from '../pic/Loading.png';

function Loading() {
    return(
        <>
        <div className='wrapper'>
            <div className='logo'>
                <img src={loading} width='276px' height='114px' />
                <div className='slogan'>Loading</div>
            </div>
        </div>
        </>
    )
}

export default Loading;