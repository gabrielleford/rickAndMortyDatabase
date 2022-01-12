import { useState } from "react";
import CardMapper from "./CardMapper";

const Cards = (props) => {
    const [pageNum, setPageNum] = useState(2);

    const fetchMore = async () => {
        setPageNum(pageNum + 1);
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${pageNum}`);
        const data = await res.json();
        props.setCharacters([...props.characters, ...data.results]);
        console.log("CHARACTER ARRAY v");
        console.log(props.characters);
    }

    return (
      <div className="container grid grid-4" id="cardDiv">
        <CardMapper characters={props.characters} />
        {pageNum < props.totalPages ? (
          <button id='loadMore' onClick={fetchMore}>Load More</button>
        ) : (
          ""
        )}
      </div>
    );
};

export default Cards;