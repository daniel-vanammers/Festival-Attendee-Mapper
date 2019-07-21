const connection = require('./connection')

function getMarkerLocations(db = connection) {
    return db('marker_locations').select()
}

function addMarkerLocation(coords, db = connection) {
    return db('geolocation').insert(coords)
}

module.exports = {
    getMarkerLocations,
    addMarkerLocation
}