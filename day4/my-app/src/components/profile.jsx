export default function Profile() {
  return (
    <div>
      <h1>Ini Profile</h1>
    </div>
  );
}

export function Propics() {
  return (
    <div>
      <h1>Ini Propics</h1>
    </div>
  );
}

export function Lagi(props) {
  return (
    <div>
      <h1>satu lagi</h1>
      <IsiData />
    </div>
  );
}

function IsiData() {
  let arr = ["udin", "petot"];
  return (
    <div>
      {arr.map((val) => (
        <div>{val}</div>
      ))}
    </div>
  );
}
