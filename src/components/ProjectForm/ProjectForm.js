import styles from './ProjectForm.module.css'
import { InputForm } from '../ValuesForm/InputForm'
import { SelectForm } from '../ValuesForm/SelectForm'
import { SubmitForm } from '../ValuesForm/SubmitForm'

export function ProjectForm({ whatHappen }) {
  return (
    <form className={styles.form}>
      <InputForm 
        labelName="nameProject" 
        text="Project Name" 
        type="text" 
        name="nameProject" 
        id="nameProject" 
        placeholder="Insert the name project" 
        onChange="" 
        value=""
      />
      <InputForm
        labelName="valueBudget" 
        text="Project Value" 
        type="number" 
        name="valueBudget" 
        id="valueBudget" 
        placeholder="Enter the budget amount"
        onChange=""
        value=""
      />
      <SelectForm 
        name="category_id"
        text="Selecione uma Categoria"
      />
      <SubmitForm text={ whatHappen }/>
    </form>
  )
}