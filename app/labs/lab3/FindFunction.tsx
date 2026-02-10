export default function FindFunction() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2", "string3"];
  const four = numberArray1.find((a) => a === 4);
  const string3 = stringArray1.find((a) => a === "string3");

  let numberArray2 = [1, 2, 4, 5, 6];
  let stringArray2 = ["string1", "string3"];

  const fourIndex = numberArray2.findIndex((a) => a === 4);
  const string3Index = stringArray2.findIndex((a) => a === "string3");

  return (
    <div id="wd-find-function">
      <h4>Find Function</h4>
      four = {four} <br />
      string3 = {string3} <hr />
      <h4>Second Part (Indices)</h4>
      four = {fourIndex} <br />
      string3 = {string3Index} <br />
    </div>
  );
}
