import "./styles.css";
import React, { useContext } from "react";
export const theme = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};
const signedInUser = {
  name: "duc"
};
const ThemeContext = React.createContext("light");

// Signed-in user context
const UserContext = React.createContext({
  name: "Guest"
});

function Layout() {
  return (
    <div>
      <Content />
    </div>
  );
}
function ProfilePage(props) {
  return <div>{props.user.name + " , " + props.theme}</div>;
}

// A component may consume multiple contexts
function Content() {
  return (
    <ThemeContext.Consumer>
      {(theme) => (
        <UserContext.Consumer>
          {(signedInUser) => <ProfilePage user={signedInUser} theme={theme} />}
        </UserContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );

  //   const ThemeContext_ = useContext(ThemeContext);
  //   const UserContext_ = useContext(UserContext);

  //   console.log(ThemeContext_, UserContext_);
  //   return <ProfilePage user={UserContext_} theme={ThemeContext_} />;
}

//  khoong quan tâm đến thứ tự lấy

class App extends React.Component {
  render() {
    // App component that provides initial context values
    return (
      <UserContext.Provider value={signedInUser}>
        <ThemeContext.Provider value={theme}>
          <Layout />
        </ThemeContext.Provider>
      </UserContext.Provider>

      //  khoong quan tâm đến thứ tự bọc
    );
  }
}

export default App;
