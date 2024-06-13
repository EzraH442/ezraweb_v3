import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const initialWasmStore = { wasm: undefined };

export const WASMContext = createContext(initialWasmStore);

const Spinner = () => <div>spinner</div>;

const WASMContextProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [store, setStore] = useState(initialWasmStore);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.Module) {
        setStore({ wasm: window.Module });
        console.log("Loaded WASM Module!");

        clearInterval(interval);
        return;
      }

      console.log("Loading WASM Module...");
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <WASMContext.Provider value={store}>
      {store.wasm ? children : <Spinner />}
    </WASMContext.Provider>
  );
};

const useWASM = () => useContext(WASMContext);
export { WASMContextProvider, useWASM };
