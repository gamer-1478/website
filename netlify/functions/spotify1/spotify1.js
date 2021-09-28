// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch')
const API_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing?market=IN'

exports.handler = async function () {
  let response = new Promise(async (resolve, reject) => {
    try {
      await fetch(API_ENDPOINT, {
        "method": "GET",
        "headers": { "Authorization": "Bearer AQCuFNFkpWtHQU8OmMC6tJzUR8rlQKxMJaRQ3MCpZixry8sLKnpw_eLq9sU1UU-dlz5HSs6PR5asSuB9f91DFwpP2Sj2Z7D5tpKTLAB-KEBMZv5yoKmQbSQ2YVhCMGFRC8PPmg-1BRRbhoqIG7Sup9Zt1haSxblO-R5vpBFH_kzoTLamx_wkPPywXNjuJPe2WpP_w0j03alw2k29eeqLFJ9I3jCg9ptPWFTyqLP7SUQ6oXBDOBNHi-zb6vlUhAs" }
      }).then((result) => { resolve(result.json()) })
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
