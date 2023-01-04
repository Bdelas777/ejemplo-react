export function Greeting() {
  function add(x, y) {
    return x + y;
  }
  return (
    <div>
      <h1>{add(10, 5)}</h1>
    </div>
  );
}

export function UserCard() {
  return <h1> UserCard</h1>;
}
