import { SelectStyles } from './styles.js';

export function SelectForm({ text, name, options, handleOnChange, value }){
  return(
    <SelectStyles>
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
    </SelectStyles>
  )
}