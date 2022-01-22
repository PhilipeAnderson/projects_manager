import { InputStyles } from './styles.js';

export function InputForm({ name, text, type, placeholder, handleOnChange, value }){
  return(
    <InputStyles>
      <label htmlFor={ name }>{ text }:</label>
      <input 
        type={ type } 
        name={ name } 
        id={ name } 
        placeholder={ placeholder } 
        onChange={ handleOnChange }
        value={ value }
        />
    </InputStyles>
  )
}