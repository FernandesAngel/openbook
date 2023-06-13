import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";


interface UserProps {
  email: string | null | undefined;
  name: string;
}

export interface CredentialProps {
  email: string;
  password: string;
}

interface AuthState {
  user: UserProps;
  isLogged: boolean;
}

interface AuthContextData {
  data: AuthState;
  authError: boolean;
  signIn: (credentials: CredentialProps) => Promise<void>;
  signOut: () => void;
  signUp: (credentials: CredentialProps, user: UserProps) => Promise<boolean>;
  signUpError: string;
  loading: boolean;
}

interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProps) {
  const [data, setData] = useState({} as AuthState);
  const [authError, setAuthError] = useState(false);
  const [signUpError, setSignUpError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function loadStorageData(): void {
      const dataStorage = localStorage.getItem(
        import.meta.env.VITE_LOCAL_STORAGE_KEY
      );

      if (dataStorage) {
        const dataParse = JSON.parse(dataStorage);
        setData(dataParse);
      }
    }
    loadStorageData();
  }, []);

  const signIn = useCallback(async (credentials: CredentialProps) => {
    setLoading(true);
    try {


      // setData("a")
      localStorage.setItem(
        import.meta.env.VITE_LOCAL_STORAGE_KEY,
        JSON.stringify("")
      );
      setAuthError(false);
    } catch (error) {
      setAuthError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const signUp = useCallback(
    async (credentials: CredentialProps, user: UserProps) => {
      setLoading(true);
      try {

        setSignUpError("");
        return true;
      } catch (e) {
        setSignUpError(
          "Erro ao cadastrar, verifique suas informações e tente novamente."
        );
        return false;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const signOut = useCallback(() => {
    localStorage.removeItem(import.meta.env.VITE_LOCAL_STORAGE_KEY);
    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        data,
        signIn,
        signOut,
        signUp,
        authError,
        loading,
        signUpError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
export { AuthProvider, useAuth };
