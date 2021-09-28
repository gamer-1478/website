// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/
import firebase from './firebase';

const API_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing?market=IN'
const spotifyDoc = firebase.firestore().collection('spotify').doc('spotify');

export default async function handler() {
  let Fdoc = await spotifyDoc.get()
  if (Fdoc.exists) {
    Fdoc = await Fdoc.data()
    if (Fdoc.hasOwnProperty('created') && Fdoc.created + Fdoc.data_.expires_in > Date.now() / 1000) {
      let response = new Promise(async (resolve, reject) => {
        try {
          await fetch(API_ENDPOINT, {
            "method": "GET",
            "headers": { "Authorization": "Bearer " + Fdoc.data_.access_token }
          }).then((result) => { resolve(result.json());})
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
        spotifyDoc.set({
          created: Date.now() / 1000,
          data_: await PstResp
        })
      })
      return {
        statusCode: 200,
        body: JSON.stringify({
          data: PstResp
        })
      }
    }
  }
  else {
    spotifyDoc.set({
      created: Date.now() / 1000,
      "refresh_token": "AQAzF4RMZtfQ4in661xLV7s560JGveHFnvFvGqt5MxDXNenv4h7PN3-_gZsE0yQKDE1LwpuQyJ5s-hpMFgwV3ja1N8wRXbGy_ZtOmnPRiTqmt-n8BPzRuLvQGkAS4RC4I4w",
      data_: {
        "access_token": "BQAuVvQlcfBhIPmb0CmGopVL7MprN2SIh_G08FoMMS72xX5dtT15fi7Qm3ngLcDeSZw_nXqNNgxOBpNxEOtEVQnA0_oFlNJZmcVsEiSPGc6fzwlYzYvThBid_hJ929YRsrUS-IKfllTiNDX3r6qH6dx2huDoZNmZPD59ax5GdK3it2No6Rtoy7s",
        "token_type": "Bearer",
        "expires_in": 3600,
        "scope": "user-read-playback-state user-read-currently-playing user-read-email user-read-private"
      }
    })
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Data Didn't exist, just added it." })
    }
  }
}
