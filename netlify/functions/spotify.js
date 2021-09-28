const fetch = require('node-fetch')

const API_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing?market=IN'

exports.handler = async () => {
    let response
    try {
        response = await fetch(API_ENDPOINT, {
            "method":"GET",
            "Authorization":"Bearer BQD7zLtFuHVpB0A71Pmcme4DC9u3gGEESInayOD4dyk_hAa7nOr0o79FfPka3ru0HGgog4comIvcrg5-SocDhJeVuKo_RrabGeJvvLuUz0nARTL_sY_pCIzQCg5AQ1_azpgbJAXqtCWm7_ZtURKYx8X3ScR3dkYu1hFI",
            "Content-Type":"application/json"
        })
        // handle response
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({
                error: err.message
            })
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            data: response
        })
    }
}
