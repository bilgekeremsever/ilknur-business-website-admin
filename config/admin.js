module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a700dca630f220c1ded220e5cc046200'),
  },
});
