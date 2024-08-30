import React, { useState, createContext, useContext } from "react";

// Create the context
const AuthorContext = createContext();

// Provide the context
export const AuthorProvider = ({ children }) => {
  const [author, setAuthor] = useState(null);

  return (
    <AuthorContext.Provider value={{ author, setAuthor }}>
      {children}
    </AuthorContext.Provider>
  );
};

// Custom hook to use the Author context
export const useAuthor = () => {
  const context = useContext(AuthorContext);

  if (!context) {
    throw new Error("useAuthor must be used within an AuthorProvider");
  }

  return context;
};
