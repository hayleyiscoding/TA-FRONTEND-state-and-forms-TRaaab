import { data } from "../data";

function HouseNames(props) {
  let houseNames = data.map((house) => house.name);
  return (
    <ul className='person flex wrap center'>
      {houseNames.map((house) => {
        return (
          <li
            onClick={() => props.updateHouse(house)}
            // className={`${props.activeHouse === house ? "active" : ""}`}
          >
            <p className={`${props.activeHouse === house ? "active" : ""}`}>
              {house}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default HouseNames;
