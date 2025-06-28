import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [isLogin, SetIsLogin] = useState(false);
  const [userName, setUserName] = useState(null);

  return (
    <AuthContext.Provider
      value={{ isLogin, SetIsLogin, setUserName, userName,  }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
