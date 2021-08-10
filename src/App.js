import "./App.css";
import Profile from "./Profile/profile";
import image from "./Profile/avatar.jpg";
import ActionLink from "./Profile/alert";



function App() {
  const handleName = (fullName) => alert(` Hello there it's ${fullName}`);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        marginTop:"5%",
        width: "min-content",
      }}
    >
      <Profile
        img={image}
        fullName= "Haythem Smirani"
        bio={`Why are you asking ?!!`}
        profession="Student"
        handleName={handleName}
      />
      <ActionLink />
    </div>
  );
}

export default App;
