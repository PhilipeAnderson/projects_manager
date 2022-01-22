import { useState, useEffect } from 'react';

import { FormStyles } from './styles.js';
import { InputForm } from '../ValuesForm/InputForm/InputForm';
import { SelectForm } from '../ValuesForm/SelectForm/SelectForm';
import { SubmitForm } from '../ValuesForm/SubmitForm/SubmitForm';

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
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e){
    setProject({
      ...project, 
      [e.target.name]: e.target.value
    });
  };
  
  function handleCategory(e){
    setProject({
      ...project, 
      category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text
      }
    });
  };

  return (
    <FormStyles onSubmit={ submit }>
      <InputForm
        type="text"
        text="Project Name"
        name="name"
        placeholder="Insert the name project"
        handleOnChange={handleChange}
        value={project.name ? project.name : ''}
      />
      <InputForm
        type="number"
        text="Project Value"
        name="budget"
        placeholder="Enter the budget amount"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ''}
      />
      <SelectForm
        text="Select a Category"
        name="category_id"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ''}
      />
      <SubmitForm text={ whatHappen }/>
    </FormStyles>
  )
}