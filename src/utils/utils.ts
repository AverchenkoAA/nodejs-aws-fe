import { LOGINPAGEURL } from "constants/cognito";

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatAsPrice = (price: number) => priceFormatter.format(price);

export function useAWSCognitoAuth() {

    const token = getToken("id_token");

    if (!token) {
        window.location.replace(LOGINPAGEURL);
    } else {
        localStorage.setItem('authorization_token', token)
    }
}

function getToken(tokenType: string) {
    let url = new URL(window.location.href);
    let token = '';

    url.hash.substr(1).split('&')
        .some((keyValue) => {
            let keyValues = keyValue.split('=');

            if (keyValues[0] === tokenType) {
                token = keyValues[1];
                return true;
            }

            return false;
        });

    return token;
}
