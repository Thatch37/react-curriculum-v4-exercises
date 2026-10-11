//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  //add variables here
  const name = 'Tyrell Hatcher';
  const age = 24;
  const hobbies = ['gaming', 'reading', 'sports'];
  return (
    <div>
      {/* add JSX here */}
      <h1>About Me</h1>
      <p>Hi, I am Tyrell Hatcher and I'm currently learning about React</p>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
