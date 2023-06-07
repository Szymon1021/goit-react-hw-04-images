import styles from './ImageFinder.module.css';

export const ImageFinder = props => {
  return (
    <>
      <header className={styles.searchbar}>
        <form onSubmit={props.handleGetRequest} className={styles.searchform}>
          <button type="submit" className={styles.button}>
            <span className={styles.buttonlabel}>Search</span>
          </button>

          <input
            onChange={props.handleInput}
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};
