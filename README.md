# Favorite Movies 

 ![Project Image](img/favoriteMovies.png)

 > Share with us your favorites movies

 ---
## Demo
 ![Project Image](movies.gif)

 ### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [Author Info](#author-info)

---

## Description

MovieApp is a small application created with the intentions of putting in practice the new react-hooks update. The idea is to search your favorites movies, it will render an array of 8 movie objects matching the title of your movie. There's a like button that will save the movie to local storage. Favorites movies componets will get the data from local Storage, component where you can also delete the movie if you do not longer like it. When you click on a poster movie on your Like page it will take you to a wikipidia page with the information of the movie you cliked on.

#### Technologies

- React 
- JavaScript 
- Local Storage
- Material-UI

---

## How To Use

#### Installation 

- `git clone https://github.com/castillojuan1000/movieApp.git`
- `npm install`
- `npm start`

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