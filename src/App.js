import "./App.css";
import Profile from "./Profile/profile";
import image from "./Profile/avatar.jpg";
import ActionLink from "./Profile/alert";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "auto",
        width: "min-content",
      }}
    >
      <Profile
        img={image}
        fullName="Haythem Smirani"
        bio={`*****************
      **********************
      ************************`}
        profession="Student"
      />
      <ActionLink />
    </div>
  );
}

export default App;
