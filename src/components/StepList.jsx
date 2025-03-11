import styles from '../styles/stepList.module.css';
import Button from './Button';



export default function StepList({ steps }) {
  return (
    <section className={styles.steps}>
      <div className={styles.container}>
      <button className={styles.menuButton} onClick={() => console.log('Menu ouvert')}>
        <img src='icons/menu.svg' alt="Menu" />
      </button>
      </div>
      <h2 className={styles.sectionTitle}>Votre Shynleï c'est...</h2>
      <p className={styles.sectionSubtitle}>
        7 étapes, 2 fiches pour prendre note des rencontres, 1 page pour éclairer le sens, 
        3 interprétations pour vous aider.
      </p>

      <div className={styles.stepsglobal}>
        {steps.map(step => (
          <div key={step.id} className={styles.stepItem}>
            <img 
              src={step.icon} 
              alt={`Icône étape ${step.id}`} 
              className={styles.stepIcon}
            />
            <div className={styles.stepContent}>
              <span className={styles.stepNumber}>{step.id}.</span>
              <p className={styles.stepText}>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
        <div className={styles.test}></div>
      <Button/>
    </section>
  );
}
