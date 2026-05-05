export default function Temp({ bool, id, arr, name, number, email }) {
  //   console.log(props);
  //   const name = props.name;
  //   const number = props.number;
  //   const email = props.email;
  return (
    <div className="template">
      <h1>Name={name}</h1>
      <p>user={String(bool)}</p>
      <p>arr={arr.join(", ")}</p>
      <p>id={id}</p>
      <p>Number={number}</p>
      <p>email={email}</p>
    </div>
  );
}
