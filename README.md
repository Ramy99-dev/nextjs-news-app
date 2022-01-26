# News App


### Description
Web application to get all news on any topic .<br/>
using NextJS to : 
- perform Server Side Rendering and Static Site Generation
- connect to redis local database
- fetch data news Api
- create api end point
Redis Local Database .
Auth0 for authentification .



### Technologies


 <img  alt="next" width="30px" src="https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png" />  &nbsp;  <img  alt="react" width="30px" src="https://grafikart.fr/uploads/icons/redis.svg" /> &nbsp;
<img  alt="solidity" width="60px" src="https://www.drupal.org/files/project-images/brand%20evolution_logo_Auth0_black.png" />

To run locally : 
- Prerequisite :  Install redis locally or use redis-cloud .

- Web : <br/>
1. Run  ```npm install```  to install React dependecies
2. Create .env.local file to configure auth0 and redis:
```
# A long, secret value used to encrypt the session cookie
AUTH0_SECRET='LONG_RANDOM_VALUE'
# The base url of your application
AUTH0_BASE_URL='http://localhost:3000'
# The url of your Auth0 tenant domain
AUTH0_ISSUER_BASE_URL='https://YOUR_AUTH0_DOMAIN.auth0.com'
# Your Auth0 application's Client ID
AUTH0_CLIENT_ID='YOUR_AUTH0_CLIENT_ID'
# Your Auth0 application's Client Secret
AUTH0_CLIENT_SECRET='YOUR_AUTH0_CLIENT_SECRET'

# Database
REDIS_URL=http://localhost:6379
``` 
Follow this repository for more details : https://github.com/auth0/nextjs-auth0 <br/>
3. Run  ```npm run build .``` <br/>
4. Run  ```npm start``` <br />

### Demo 

