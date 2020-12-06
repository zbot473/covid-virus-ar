# Ecoit Biohackathon Submission

## Steps:

1. Run these commands in the root of the repository
```
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
```
1. run `npm i`
2. run `npm run build`
3. run `node server/index.js`
4. Open the server on a phone, port 8443. Ignore the errors for HTTPS.
