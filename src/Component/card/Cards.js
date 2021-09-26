import React, { useEffect, useState } from 'react'
import Carditem from './Carditem'
import './Cards.css'
import CardJSON from './CardsJson';

async function returnJsonExtracted() {
    var testArray = []
    var newCardJSON = CardJSON();
    newCardJSON.reverse()
    var prodLen = newCardJSON.length
    var i = 0

    var NewtestArray = new Promise((resolve, reject) => {
        while (i < prodLen) {
            i += 3
            testArray.push(newCardJSON.splice(0, 3))

            if (i >= prodLen - 1) {
                resolve(testArray)
            }
            else {
                resolve(testArray)
            }
        }
    }).then(res => { return res })
    return await NewtestArray;
}

function Cards() {

    const [isLoaded, setIsLoaded] = useState(false);
    const [shows, setShows] = useState([]);

    useEffect(() => {
        async function abcd() {
            var test = await returnJsonExtracted()
            setShows(await test)
            setIsLoaded(true)
        };
        abcd()
    }, [])

    return (
        <div className='cards' id='projects'>
            <h1>Check out my projects</h1>
            <div className='cards__container'>
                {isLoaded ? Array.from(shows).map((el, ind) => {
                    return (
                        <ul key={ind} className="cards__items">{
                            Array.from(el).map((el2, inc) => {
                                return (
                                    <Carditem
                                        key={inc}
                                        img_src={el2.img_src}
                                        text={el2.text}
                                        label={el2.label}
                                        path={el2.path}
                                        source={el2.source}
                                        deploy={el2.deploy} />
                                )
                            })
                        }
                        </ul>
                    )
                }) : <h1>Loading</h1>}
            </div>
        </div>
    );
}

export default Cards