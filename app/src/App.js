import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import {useState} from 'reinspect';
import {SpellInput} from './SpellInput';

function App() {
    const [spells, setSpells] = useState([], 'Spells State');
    const [newSpellName, setNewSpellName] = useState('', 'New Spell Name');

    React.useEffect(() => {
        //const fetchData = async () => {

            const db = firebase.firestore();
            // this Updates changes without refresh
            const unsubscribe = db.collection('spells').onSnapshot((snapshot) => {
                const spellsData = [];
                snapshot.forEach(doc => spellsData.push( ({...doc.data(), id: doc.id}) ))
                console.log(spellsData);
                setSpells(spellsData);
            }
            )


            // THIS does not update page, refresh is required to see changes
            // const data = await db.collection("spells").orderBy('name').get();
            // setSpells(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        //}

        //fetchData()     

        return unsubscribe
    }, []);

    const onCreate = () => {
        const db = firebase.firestore();
        db.collection('spells').add({name: newSpellName});
    }

  return (
    <React.Fragment> 
        <ul>
        <input
            value={newSpellName}
            onChange={e => setNewSpellName(e.target.value)}
        />


        <button onClick = {onCreate}> Create </button>
            {spells.map((spell, id) => (
                <li key = {id}>
                <SpellInput spell = {spell}/>
                </li>
            ))}
        </ul>
    </React.Fragment>
  );
}

export default App;


// <ul>
// {spells.map((spell, id) => (
//     <li key = {id}>{spell.name}</li>
// ))}
// </ul>