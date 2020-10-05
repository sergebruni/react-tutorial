import React from 'react';
import Table from './Table'
import Form from './Form'

const App = () => {

  const initialState = [
    {
      name: 'Ben', job: 'Janitor'
    }, {
      name: 'Sophia', job: 'Bouncer'
    }, {
      name: 'Penny', job: 'Aspring actress'
    }, {
      name: 'Walter', job: 'Bartender'
    },
  ]

  const [characters, setCharacters] = React.useState(initialState)

  const columns = ['Name', 'Job', '']

  const removeCharacter = index => {
    setCharacters(prevState => prevState.filter((char, i) => i !== index))
  }

  const addCharacter = character => {
    setCharacters([...characters, character])
  }

  return (
    <div className="container">
      <Form addCharacter={addCharacter} />
      <hr></hr>
      <Table
        columns={columns}
        characters={characters}
        removeCharacter={removeCharacter}
      />
    </div>
  );
}

export default App;
