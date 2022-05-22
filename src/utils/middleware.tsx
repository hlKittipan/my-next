import Router from 'next/router';
import Cookies from 'js-cookie';

import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_KEY || 'secret';

/*
 * @params {jwtToken} extracted from cookies
 * @return {object} object of extracted token
 */
export function verifyToken(jwtToken: string) {
    try {
        return jwt.verify(jwtToken, SECRET_KEY);
    } catch (e) {
        console.log('e:', e);
        return null;
    }
}

interface Dic {
    [key: string|number]: Object
}

/*
 * @params {request} extracted from request response
 * @return {object} object of parse jwt cookie decode object
 */
export function getAppCookies(req: { headers: { cookie: string; }; }) {
    const parsedItems: (Dic) = {};
    if (req.headers.cookie) {
        const cookiesItems = req.headers.cookie.split('; ');
        cookiesItems.forEach(cookies => {
            const parsedItem = cookies.split('=');
            parsedItems[parsedItem[0]] = decodeURI(parsedItem[1]);
        });
    }
    return parsedItems;
}

/*
 * @params {request} extracted from request response, {setLocalhost} your localhost address
 * @return {object} objects of protocol, host and origin
 */
export function absoluteUrl(req: { headers: { [x: string]: any; }; }, setLocalhost: any) {
    let protocol = 'https:';
    let host = req
        ? req.headers['x-forwarded-host'] || req.headers['host']
        : window.location.host;
    if (host.indexOf('localhost') > -1) {
        if (setLocalhost) host = setLocalhost;
        protocol = 'http:';
    }
    return {
        protocol: protocol,
        host: host,
        origin: protocol + '//' + host,
        url: req,
    };
}

/*
 * @params {none} set action for logout and remove cookie
 * @return {function} router function to redirect
 */
export function setLogout(e: { preventDefault: () => void; }) {
    e.preventDefault();
    Cookies.remove('token');
    Router.push('/');
}