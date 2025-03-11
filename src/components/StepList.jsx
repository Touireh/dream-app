import styles from '../styles/stepList.module.css';
import Button from './Button';
import StepItem from './StepItem';

export default function StepList({ steps }) {
  return (
    <section className={styles.steps}>
      <div className={styles.container}>
        <button className={styles.menuButton} onClick={() => console.log('Menu ouvert')}>
          <img src="/icons/menu.svg" alt="Menu" />
        </button>
      </div>
      <h2 className={styles.sectionTitle}>Votre Shynleï c'est...</h2>
      <p className={styles.sectionSubtitle}>
        7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer le sens, 
        3 interprétations pour vous aider.
      </p>

      <div className={styles.stepsglobal}>
        {steps && steps.length > 0 ? (
          steps.map((step) => (
            <StepItem key={step.id} id={step.id} icon={step.icon} text={step.text} />
          ))
        ) : (
          <p className={styles.emptyMessage}>Aucune étape disponible.</p>
        )}
      </div>
      
      <Button />
    </section>
  );
}
