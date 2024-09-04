import Image from 'next/image';
import styles from './contact.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact us'
};

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/contact.png" alt="Contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and surname" />
          <input type="text" placeholder="Email address" />
          <input type="text" placeholder="Phone number (optional)" />
          <textarea cols={30} rows={10} placeholder="Message" />
          <button type="button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
