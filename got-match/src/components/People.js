import { data } from "../data";

function People(props) {
  let peopleNames = data.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
  }, []);
  return (
    <ul className='person flex wrap center'>
      {peopleNames.map((person) => {
        return (
          <li
            onClick={() => {
              props.updatePerson(person.name);
            }}
            // className={`${props.activePerson === person.name ? "active" : ""}`}
          >
            <p
              className={`${
                props.activePerson === person.name ? "active" : ""
              }`}
            >
              {person.name}
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default People;
