module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '823d6e44a700aa048aa750e8c924c977'),
  },
});
