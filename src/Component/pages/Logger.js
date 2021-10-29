import React from 'react'
//import { React, useState, useEffect } from 'react'
//import firebase from '../../firebase';
//import axios from 'axios'

//const logCollec = firebase.firestore().collection('logged');

export default function Logger() {

    /*const [logged, setLogged] = useState(false)
    //creating function to load ip address from the API
    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        logCollec.add(res.data).then(async (result) => {
            console.log(result);
            setLogged(true)
        })

    }

    useEffect(() => {
        //passing getData method to the lifecycle method
        getData()

    }, [])*/

    return (
        <div>
            {/*
                logged ? <div>{window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}</div> : <div><p>false</p></div>
            */}
        <div>{window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}</div>
                </div>
    );
}
