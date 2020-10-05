import React from 'react'

const TableHeader = ({columns}) => {
  return (
    <thead>
      <tr>
        {columns.map(col => (<td key={col}>{col}</td>))}
      </tr>
    </thead>
  )
}

const TableBody = ({characters, removeCharacter}) => {
  return (
    <tbody>
      {characters.map((character, i) => (
        <tr key={i}>
          <td>{character.name}</td>
          <td>{character.job}</td>
          <td><button onClick={e => removeCharacter(i)}>REMOVE</button></td>
        </tr>
      ))}
    </tbody>
  )
}

const Table = props => {
  const { columns, characters, removeCharacter } = props

  return (
  <div style={{width: '100%'}}>
    <table>
      <TableHeader columns={columns} />
      <TableBody
        characters={characters}
        removeCharacter={removeCharacter} />
    </table>
  </div>
  )
}

export default Table