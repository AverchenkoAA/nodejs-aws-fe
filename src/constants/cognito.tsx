const COGNITO = {
  CLIENT_ID: 'hr6pfs5qgjganenah88ivbp0i',
  DOMAIN: 'https://pizza-user-pool-domain.auth.eu-west-1.amazoncognito.com',
  REDIRECT_URL: 'https://dwgz1q98lr4ie.cloudfront.net/admin/products',
};

export const LOGINPAGEURL = `${COGNITO.DOMAIN}/login?client_id=${COGNITO.CLIENT_ID}&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=${COGNITO.REDIRECT_URL}`;
