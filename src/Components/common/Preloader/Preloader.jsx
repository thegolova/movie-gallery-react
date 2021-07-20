import style from './Preloader.module.css';
import preloaderImg from '../../../assets/images/preloader.svg';

let Preloader = (props) => {
  return (
    <div className={style.preloader}>
      <img src={preloaderImg} alt="preloader"/>
    </div>
  )
}

export default Preloader;