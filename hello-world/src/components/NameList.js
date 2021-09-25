import React from 'react'
import Person from './Person'

function NameList() {

  const names = ['a','b','c','c']

  const nameList = names.map((name,idx) => <h2 key={idx}>{name}</h2> )

  const names2 = [{
    id: 1,
    name: 'a',
    age: 11,
    skill: 'x'
  },
  {
    id: 2,
    name: 'b',
    age: 22,
    skill: 'y'
  },
  {
    id: 3,
    name: 'b',
    age: 33,
    skill: 'z'
  }]

  // const personList = names2.map(person => <Person key={person.id} person={person} />)

  return (
    <div>
      {
        nameList
      }
    </div>
  )
}

export default NameList
