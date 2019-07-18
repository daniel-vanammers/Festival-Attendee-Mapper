
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('geolocation').del()
    .then(function () {
      // Inserts seed entries
      return knex('geolocation').insert([
        {id: 1, latitude: '42.4535', longitude: '174.3434', user:'goku'},
        {id: 2, latitude: '42.5435', longitude: '174.2456', user:'vegeta'},
        {id: 3, latitude: '42.5644', longitude: '173.4343', user:'gohan'},
        {id: 4, latitude: '41.3433', longitude: '173.3433', user:'trunks'}
      ]);
    });
};