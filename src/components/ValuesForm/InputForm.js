import styles from './InputForm.module.css';


export function InputForm(
  { 
    labelName, 
    text, 
    type, 
    name, 
    id, 
    placeholder, 
    value, 
    handleOnChange 
  }
){
  return(
    <div className={styles.input}>
      <label 
        htmlFor={ labelName }
        >
        { text }
      </label>

      <input 
        type={ type } 
        name={ name } 
        id={ id } 
        placeholder={ placeholder } 
        onChange={ handleOnChange }
        value={ value }
        />
    </div>
  )
}