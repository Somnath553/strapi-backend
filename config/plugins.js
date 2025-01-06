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
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.gmail.com', // Specify Gmail's SMTP host
          port: 587, // Port for STARTTLS
          secure: false, // Use STARTTLS (secure: false)
          auth: {
            user: env('SMTP_USER'), // Your Gmail address
            pass: env('SMTP_PASSWORD'), // Your Gmail app password
          },
          pool: true,
          logger: true,
          debug: true,
          maxConnections: 10000,
        },
        settings: {
          defaultFrom: env('SMTP_USER'),
          defaultReplyTo: env('SMTP_USER'),
        },
      },
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