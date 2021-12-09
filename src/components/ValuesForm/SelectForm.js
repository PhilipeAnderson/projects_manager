import styles from './SelectForm.module.css';

export function SelectForm({ text, name, options, handleOnChange, value }){
  return(
    <div className={styles.select}>
      <label htmlFor={ name }>{ text }</label>
      <select 
        name={ name }
        id={ name }
        onChange={ handleOnChange }
        value={ value || ''}
        >
        <option>Select an option</option>
        {options.map(option => (
          <option value={option.id} key={option.id}>{option.name}</option>
        ))};
      </select>
    </div>
  )
}