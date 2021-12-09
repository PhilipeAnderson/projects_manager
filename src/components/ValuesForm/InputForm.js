import styles from './InputForm.module.css';


export function InputForm({ name, text, type, placeholder, handleOnChange, value }){
  return(
    <div className={styles.input}>
      <label htmlFor={ name }>{ text }:</label>
      <input 
        type={ type } 
        name={ name } 
        id={ name } 
        placeholder={ placeholder } 
        onChange={ handleOnChange }
        value={ value }
        />
    </div>
  )
}