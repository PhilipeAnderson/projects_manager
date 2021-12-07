import styles from './SelectForm.module.css';

export function SelectForm(
  { 
    selectName,
    text,
    name,
    id,
    options,
    handleOnChange,
    value
  }){
  return(
    <div className={styles.select}>
      <label htmlFor={ selectName }>{ text }</label>
      <select name={ name } id={ id }>
        <option>Selecione uma opção</option>
      </select>
    </div>
  )
}