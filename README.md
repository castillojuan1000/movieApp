# Favorite Movies 

 ![Project Image](img/favoriteMovies.png)

 > Share with us your favorites movies

 ---

 ### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [API](#api-resources)
- [Author Info](#author-info)

---

## Description

MovieApp is an application created with React and local storage. The idea is to search your favorite movies and save them. When you type in a name of a movie in the search bar, it will render a list of movies that you can save to local storage. After you save them, you can revisit them by clicking the favorite movies link. 



#### Technologies

- React 
- JavaScript 
- Local Storage
- Material-UI

### Demo
 ![Project Image](movies.gif)

---

## How To Use

#### Installation 

- clone this repo to your desktop `git clone https://github.com/castillojuan1000/movieApp.git`
- run `npm install` to install dependencies
- run `npm start` to start the application

### API Resources 

- GET /movies

example: [https://www.omdbapi.com/?s=man&apikey=57c3c48f](https://www.omdbapi.com/?s=man&apikey=57c3c48f)

response body: 

```javascript 
{
    "Search": [
        {
            "Title": "Iron Man",
            "Year": "2008",
            "imdbID": "tt0371746",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
        },
        {
            "Title": "Iron Man 3",
            "Year": "2013",
            "imdbID": "tt1300854",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg"
        },
        {
            "Title": "Iron Man 2",
            "Year": "2010",
            "imdbID": "tt1228705",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_SX300.jpg"
        },
        {
            "Title": "Man of Steel",
            "Year": "2013",
            "imdbID": "tt0770828",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTk5ODk1NDkxMF5BMl5BanBnXkFtZTcwNTA5OTY0OQ@@._V1_SX300.jpg"
        },
        
    
    "totalResults": "9903",
    "Response": "True"
}

```
--- 

## Author Info
 - LinkedIn [LinkedIn](https://www.linkedin.com/in/juan-m-castillo-355403186/)
 - Website [JuanCastillo](https://juancastillo.dev/)

 [Back To The Top](#favorite-movies)