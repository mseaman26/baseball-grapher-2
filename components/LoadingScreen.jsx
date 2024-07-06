// components/LoadingScreen.js
import Image from 'next/image';
import styles from './LoadingScreen.module.css';
import baseballImage from '../public/images/baseball_Icon.png';

const LoadingScreen = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Loading...</h1>
            <div className={styles.throw}>
                <div className={`${styles.loader} ${styles.ball}`}>
                    <Image src={baseballImage} alt="baseball icon" width={40} height={40} className={` ${styles.spin}`} />
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
