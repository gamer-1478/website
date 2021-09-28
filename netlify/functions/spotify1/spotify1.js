// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const fetch = require('node-fetch')
const API_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing?market=IN'

const handler = async function (event, context) {
  let response = new Promise(async (resolve, reject) => {
    try {
      await fetch(API_ENDPOINT, {
        "method": "GET",
        "Authorization": "Bearer BQD7zLtFuHVpB0A71Pmcme4DC9u3gGEESInayOD4dyk_hAa7nOr0o79FfPka3ru0HGgog4comIvcrg5-SocDhJeVuKo_RrabGeJvvLuUz0nARTL_sY_pCIzQCg5AQ1_azpgbJAXqtCWm7_ZtURKYx8X3ScR3dkYu1hFI",
        "Content-Type": "application/json"
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
  }).then((resolve) => { return resolve }).catch((reject) => { return reject })

  return {
    statusCode: 200,
    body: JSON.stringify({
      data: await response
    })
  }
}

module.exports = { handler }
