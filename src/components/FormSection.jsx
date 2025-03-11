import styles from '../styles/formSection.module.css';
import Header from './Header';

export default function FormSection({ formState, onUpdate }) {
  const handleInputChange = (field) => (e) => {
    onUpdate(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section className={styles.formSection} >
      <img src='images/image 2.png' className={styles.logo} />
      <div className={styles.backgroundContainer}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
      </div>
      <Header/>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.title} >Nom et prénom :</label>
        <input
          type="text"
          id="name"
          value={formState.name}
          onChange={handleInputChange('name')}
          placeholder="Jeal"
          required
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.title}>Mon intention :</label>
        <span className={styles.subSubTitle}>L’intention, l’objectif de ce Shynlei</span>
        <input
          value={formState.intention}
          onChange={handleInputChange('intention')}
          placeholder="Mon"
          rows="3"
          required
        />
      </div>
      <div className={styles.test}></div>

     
    </section>
  );
}