import React, {useState} from 'react'

const Form = props => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addCharacter({
      name: name,
      job: job
    })
    setName('')
    setJob('')
  }

  return(
    <form style={{width: '50%', margin: 'auto'}}>
      <label htmlFor="name">Name</label>
      <input 
        type='text' name="name"
        value={name} onChange={e => setName(e.target.value)} />

      <label htmlFor="job">Job</label>
      <input
        type='text' name="job"
        value={job} onChange={e => setJob(e.target.value)} />
      <button onClick={handleSubmit}>SAVE</button>
    </form>
  )
}

export default Form