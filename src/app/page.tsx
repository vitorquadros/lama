import Image from 'next/image';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts Agency.</h1>
        <p className={styles.description}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate animi in dolor
          quibusdam magni temporibus?
        </p>
        <div className={styles.buttons}>
          <button className={styles.button} type="button">
            Learn More
          </button>
          <button className={styles.button} type="button">
            Contact
          </button>
        </div>

        <div className={styles.brands}>
          <Image src="/brands.png" alt="Brands" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/hero.gif" alt="Hero" fill className={styles.heroImg} />
      </div>
    </div>
  );
};

export default Home;
