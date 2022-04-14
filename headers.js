module.exports = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
  {
    key: 'Server',
    value: 'The Castle of Dunsinane', // fake value
  },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
];
