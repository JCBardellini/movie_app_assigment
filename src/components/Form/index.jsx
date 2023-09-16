import React from 'react'
import { useState } from 'react'
import './index.css'

const Form = ({movie}) => {

    const [formData, setFormData] = useState(
      {searchTerm: ""}
      )
    console.log(movie);

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      movie(formData.searchTerm)
    };

    
  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={formData.searchTerm}/>
            <input type="submit" value="submit" />
        </form>
    </div>
    </>
  )
}

export default Form