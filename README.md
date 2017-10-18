# API Basejump: URL Shortener Microservice


For [Free Code Camp](http://freecodecamp.com) - API Basejump: URL Shortener Microservice


### User Stories

1. I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
2. When I visit that shortened URL, it will redirect me to my original link.


### Usage

1. Creating a short URL

	```
	http://localhost:8080/new/https://www.google.com
	```
2. Accessing the short URL provided

	```
	http://localhost:8080/0001
	```

### Sample Output

```javascript
{ 
	"original_url":"https://www.google.com", 
	"short_url":"http://localhost:8080/0001" 
}
```
