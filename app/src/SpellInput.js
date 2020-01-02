import React from 'react';
// import {useState} from 'reinspect';
import firebase from './firebase';

export const SpellInput = ({spell}) => {
    // const [name, setName] = useState(spell.name, 'SpellInput State');

    const [name, setName] = React.useState(spell.name);

    const onUpdate = () => {
      const db = firebase.firestore()
      db.collection('spells').doc(spell.id).set({...spell, name})
    }
  
    const onDelete = () => {
      const db = firebase.firestore()
      db.collection('spells').doc(spell.id).delete()
    }

    return (
        <div>
        <input
            value={name}
            onChange={e => {
                setName(e.target.value);
            }}
        />
            <button onClick = {onUpdate}> Update </button>
            <button onClick = {onDelete}> Delete </button>
        </div>
    )
};