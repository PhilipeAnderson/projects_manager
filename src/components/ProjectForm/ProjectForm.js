import { useState, useEffect } from 'react';

import styles from './ProjectForm.module.css';
import { InputForm } from '../ValuesForm/InputForm';
import { SelectForm } from '../ValuesForm/SelectForm';
import { SubmitForm } from '../ValuesForm/SubmitForm';

export function ProjectForm({ handleSubmit, whatHappen, projectData }) {

  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      },
    })
    .then(resp => resp.json())
    .then(data => {
      setCategories(data);
    })
    .catch(err => console.log(err))
  }, []);

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(project)
  }

  function handleChange(e){
    setProject({
      ...project, 
      [e.target.name]: e.target.value
    })
  }
  
  function handleCategory(e){
    setProject({
      ...project, 
      category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text
      }
    })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <InputForm 
        labelName="nameProject" 
        text="Project Name" 
        type="text" 
        name="nameProject" 
        id="nameProject" 
        placeholder="Insert the name project" 
        handleOnChange={handleChange} 
        value={project.name ? project.name : ''}
      />
      <InputForm
        labelName="valueBudget" 
        text="Project Value" 
        type="number" 
        name="valueBudget" 
        id="valueBudget" 
        placeholder="Enter the budget amount"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <SelectForm 
        name="category_id"
        text="Select a Category"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitForm text={ whatHappen }/>
    </form>
  )
}