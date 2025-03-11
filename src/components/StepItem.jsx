import styles from '../styles/stepList.module.css';

const StepItem = ({ id, icon, text }) => (
  <div className={styles.stepItem}>
    <img src={icon} alt={`Icône étape ${id}`} className={styles.stepIcon} />
    <div className={styles.stepContent}>
      <span className={styles.stepNumber}>{id}.</span>
      <p className={styles.stepText}>{text}</p>
    </div>
  </div>
);

export default StepItem;
