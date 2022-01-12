import CardDisplay from "./CardDisplay";

const CardMapper = (props) => {
  return (
    <>
      {props.characters.map((character, index) => {
        return (
          <div key={index}>
            <CardDisplay character={character} />
          </div>
        );
      })}
    </>
  );
};

export default CardMapper;