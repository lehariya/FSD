import Card from "./card";
function CardList() {
  const name = "REactJS";
  const college = "SVECW";
  const userobject = {branch: "AIML", Year: "3" };
  const users = ["Elena", "Stefan", "Damon", "Bonnie", "Caroline"];
  const depts = ["Aiml", "aids", "It", "CSE", "ECE"];
  return (
    <div className="container">
      <div className="row">
          {users.map((user, index) => (
            <Card key={index}
              program={name}
              col={college}
              user={userobject}
              userFromArray={user}
              userFromArrays={depts}
            />
          ))}
          {/* <Card program = {name} col = {college} user= {userobject}/> */}
      </div>
    </div>
  );
}
export default CardList;