import styles from '../styles/styles.module.css';

const Header = () => {
  return (
      <header className={styles.header}>
        <h1 className={styles.title}>Pour commencer…</h1>
        <p className={styles.subtitle}>
          Faire votre Shynlei, jouer avec, c’est l’occasion d’écouter vos rêves, 
          de les partager et de prendre confiance dans votre richesse.
        </p>
      </header>

  
  );
}
export default Header;