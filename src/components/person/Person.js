import "./Person.css";

const Person = ({ data }) => {
  return (
    <div className="person-main">
      {data.map((person) => {
        const { id, name, age, image } = person;
        return (
          <div className="person-container" key={id}>
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p>{age} years</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Person;
