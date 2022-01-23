import { handleAuth } from '@auth0/nextjs-auth0';
const getLoginState = (req, loginOptions) => {
    return { basket_id: getBasketId(req) };
  };
export default handleAuth(
    
);