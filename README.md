# arabic-flags-api

## how to use
### send request to:
https://arabic-flags-api.herokuapp.com/ => get the countries flags images with their name in arabic and in english
https://arabic-flags-api.herokuapp.com/:imageType/:countryName => imageType can be png, jpg or svg / countryName can be country ISO Alpha-2 code, ISO Alpha-3 code, UN Code, country name in arabic or english or part the country name in both languages

### exemples:
https://arabic-flags-api.herokuapp.com/svg/TN => tunisia svg flag
https://arabic-flags-api.herokuapp.com/png/تونس => tunisia png flag
https://arabic-flags-api.herokuapp.com/png/algeria => algeria png flag
https://arabic-flags-api.herokuapp.com/jpg/الجزائر => algeria jpg flag

## run it localy
```bash
  npm install
  npm run dev
```
