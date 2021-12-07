import styles from './SubmitForm.module.css';


export function SubmitForm({ text }){
  return(
    <div>
      <button className={styles.button}>
        { text }
      </button>
    </div>
  )
}