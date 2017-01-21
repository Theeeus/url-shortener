# API Basejump: URL Shortener Microservice


For [Free Code Camp](http://freecodecamp.com) - [API Basejump: URL Shortener Microservice](https://www.freecodecamp.com/challenges/url-shortener-microservice)


### User Stories

1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. When I visit that shortened URL, it will redirect me to my original link.


### Usage

1. Creating a short URL

```
https://floating-eyrie-26991.herokuapp.com/new/https://www.google.com
```
2. Accessing the short URL provided

```
https://floating-eyrie-26991.herokuapp.com/0001
```

### Sample Output

```javascript
{ 
	"original_url":"https://www.google.com", 
	"short_url":"https://floating-eyrie-26991.herokuapp.com/0001" 
}
```

### Live Site
[https://floating-eyrie-26991.herokuapp.com](https://floating-eyrie-26991.herokuapp.com)
