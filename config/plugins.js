module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    "strapi-google-auth": {
      enabled: true,
    },
    // ...
  });


  /*
  731603658902-0s8k902krt57sv5vj2d63dmotfhi37q0.apps.googleusercontent.com  clienid
  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 secret
  https://strapi-backend-ljqq.onrender.com/auth/google/callback



  450355080277-3qogqbo7907uf567fbqtru8rj8taqnrl.apps.googleusercontent.com
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

  
  * */