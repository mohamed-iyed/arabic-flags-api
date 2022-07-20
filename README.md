# world-flags-in-arabic-api

## how to use
### send request to:
https://arabic-flags-api.herokuapp.com/ => get the countries flags images with their name in arabic and in english
<br />
https://arabic-flags-api.herokuapp.com/:imageType/:countryName => imageType can be png, jpg or svg / countryName can be country ISO Alpha-2 code, ISO Alpha-3 code, UN Code, country name in arabic or english or part the country name in both languages

### exemples:
https://arabic-flags-api.herokuapp.com/svg/TN => tunisia svg flag <br />
https://arabic-flags-api.herokuapp.com/png/تونس => tunisia png flag <br />
https://arabic-flags-api.herokuapp.com/png/algeria => algeria png flag <br />
https://arabic-flags-api.herokuapp.com/jpg/الجزائر => algeria jpg flag

## run it localy
```bash
  npm install
  npm run dev
```
