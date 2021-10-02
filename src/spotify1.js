// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
import firebase from './firebase';

const API_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing?market=IN'
const spotifyDoc = firebase.firestore().collection('spotify').doc('spotify');

export default async function handler() {
  let Fdoc = await spotifyDoc.get()

  if (Fdoc.exists) {
    Fdoc = await Fdoc.data()
    if (Fdoc.hasOwnProperty('created') && Fdoc.created + Fdoc.data_.expires_in > Date.now() / 1000) {
      return await GetDataSpot();
    }
    else {
      let PstResp = new Promise(async (resolve, reject) => {
        try {
          await fetch('https://accounts.spotify.com/api/token', {
            "method": "POST",
            "headers": { "Content-Type": "application/x-www-form-urlencoded" },
            "body": [`${encodeURIComponent('grant_type')}=${encodeURIComponent('refresh_token')}`, `${encodeURIComponent('refresh_token')}=${encodeURIComponent(Fdoc.refresh_token)}`, `${encodeURIComponent('client_secret')}=${encodeURIComponent('f782e45e37ea42d3892ed030a1bd363b')}`, `${encodeURIComponent('client_id')}=${encodeURIComponent('0f904065f5114298ac1ed6d10da05e00')}`].join('&')
          }).then(async (response) => {
            resolve(await response.json())
          })
        }
        catch (err) {
          reject({
            statusCode: err.statusCode || 500,
            body: JSON.stringify({
              error: err.message
            })
          })
        }
      }).then((resolve) => { return resolve })
        .catch((reject) => { return reject })
      await PstResp.then(async () => {
        spotifyDoc.update({
          created: Date.now() / 1000,
          data_: await PstResp
        })
      })
      return await GetDataSpot();
    }
  }
}

async function GetDataSpot() {
  let Fdoc = await spotifyDoc.get()
  Fdoc = await Fdoc.data()

  let response = new Promise(async (resolve, reject) => {
    try {
      await fetch(API_ENDPOINT, {
        "method": "GET",
        "headers": { "Authorization": "Bearer " + Fdoc.data_.access_token }
      }).then((result) => { resolve(result.json()); })
      // handle response
    } catch (err) {
      reject({
        statusCode: err.statusCode || 500,
        body: JSON.stringify({
          error: err.message
        })
      })
    }
  }).then((resolve) => { return resolve })
    .catch((reject) => { return reject })

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: await response
    })
  }
}
