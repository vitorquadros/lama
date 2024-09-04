import styles from './Spinner.module.css';

interface Props {
  size?: number;
  center?: boolean;
}

const Spinner = (props: Props) => {
  const { size = 48, center = true } = props;

  return (
    <span
      className={styles.loader}
      style={{ height: size, width: size, margin: center ? 'auto' : '0' }}
    />
  );
};

export default Spinner;
