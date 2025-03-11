import { useState } from 'react';
import FormSection from '@/components/FormSection';
import StepList from '@/components/StepList';
import styles from '@/styles/styles.module.css';
import STEPS_DATA from '@/utils/steps_data';

export default function ShynleiPage() {
  const [formState, setFormState] = useState({
    name: '',
    intention: '',
    reality: ''
  });

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <FormSection formState={formState} onUpdate={setFormState} />
      </div>

      <div className={styles.waveDivider}>
        <svg
          className={styles.waveSvg}
          viewBox="70 0 60 500"
          preserveAspectRatio="none"
        >
          <path
            className={styles.wavePath}
            d="M100,0 C200,150 0,350 100,500 L0,500 L0,0 Z"
          />
        </svg>
      </div>

      <div className={styles.rightSection}>
        <StepList steps={STEPS_DATA} />
      </div>
    </div>
  );
}