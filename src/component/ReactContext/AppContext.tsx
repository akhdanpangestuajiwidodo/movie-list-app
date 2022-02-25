import React from "react";

interface ContextState {
  title: string | null;
  genre: string | null;
  gambar: string | null;
}

const AppContext = React.createContext({} as ContextState);

export default AppContext;
