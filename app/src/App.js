import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './firebase';
import {useState} from 'reinspect';
import {SpellInput} from './SpellInput';

function App() {
    const [spells, setSpells] = useState([], 'Spells State');

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("spells").orderBy('name').get();
            setSpells(data.docs.map(doc => ({...doc.data(), id: doc.id})));
        }

        fetchData()     
    }, []);


  return (
    <React.Fragment> 
        <ul>
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