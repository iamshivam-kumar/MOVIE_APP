import React from "react";
import "./movieContent.css";
import Button from "./Button";

const MovieContent = ({movie}) => {
  return (
    <>
      <div className={`content ${movie.active? 'active': undefined}`}>
        <img src={movie.titleImg} alt="Movie-title" className="movie-title" />
        <h4>
          <span>{movie.type}</span>
          <span>{movie.year}</span>
          <span>
            <i>{movie.ageLimit}</i>
          </span>
          <span>{movie.category}</span>
          <br/>
          <span>{movie.length}</span>  
        </h4>
        <div className="button">
          <Button
            icon={<ion-icon name="bookmark-outline"></ion-icon>}
            name="BOOK"
            color="#ff3700"
            bgColor="white"
          />

          <Button icon={<ion-icon name="add-outline"></ion-icon>}  name='MY LIST' /> 
        </div>
      </div>
    </>
  );
};

export default MovieContent;