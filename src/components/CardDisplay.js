import { useState } from "react";
import ToggleButton from "./ToggleButton";

const CardDisplay = (props) => {
    const [active, setActive] = useState(false);
    const [boxShadow, setBoxShadow] = useState('none');
    const [charInfo, setCharInfo] = useState('0');
    let styles = {
        card: {
            boxShadow: boxShadow
        },
        charInfo: {
            maxHeight: charInfo
        }
    }

    const renderButton = () => {
        if (active) {
            switch(props.character.status) {
                case 'Alive': setBoxShadow('3px 3px 10px 1px rgba(128, 255, 109, 0.5), -3px -3px 10px 1px rgba(128, 255, 109, 0.8)')
                break;

                case 'Dead': setBoxShadow('3px 3px 10px 1px rgba(244, 67, 54, 0.8), -3px -3px 10px 1px rgba(244, 67, 54, 0.8)')
                break;

                case 'unknown': setBoxShadow('3px 3px 10px 1px rgba(255, 217, 102, 0.5), -3px -3px 10px 1px rgba(255, 217, 102, 0.8)')
                break;

                default: setBoxShadow('none');
            }
            setCharInfo(`400px`);

            return(
                <>
                    <button className='btn' onClick={toggleActive}>Collapse</button>
                </>
            )
        } else {
            setBoxShadow('none');
            setCharInfo('0');
            return (
                <>
                    <button className='btn' onClick={toggleActive}>More Info</button>
                </>
            )
        }
    }

    const toggleActive = () => {
        if (active) {
            setActive(false);
        } else {
            setActive(true);
        }
    }

    return (
        <div style={styles.card} className='card'>
            <img
            src={props.character.image}
            alt={`${props.character.name} from Rick and Morty`}
            />
            <p className='id'>{props.character.id}</p>
            <h3>{props.character.name}</h3>
            <div style={styles.charInfo} className="charInfo">
                <p><b>Gender</b>: {props.character.gender}</p>
                <p><b>Location</b>: {props.character.location.name}</p>
                <p><b>Origin</b>: {props.character.origin.name}</p>
                <p><b>Species</b>: {props.character.species}</p>
                <p><b>Status</b>: {props.character.status}</p>
            </div>
            {<ToggleButton renderButton={renderButton} />}
        </div>
    );
}

export default CardDisplay;