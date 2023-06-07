import styles from './Button.module.css';

export const Button = ({ handleButton }) => {
  return (
    <div className={styles.loadmore}>
      <button className={styles.Button} onClick={() => handleButton()}>
        Load more
      </button>
    </div>
  );
};
