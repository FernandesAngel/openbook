import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from "react";
import { getStorage, settingStorage } from "../../utils/storage";
import { api } from "../../services/api";
import { AuthContextData, AuthState, CredentialProps, UserProps } from "./interfaces";


interface AuthProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProps) {
  const [data, setData] = useState({} as AuthState);
  const [authError, setAuthError] = useState(false);
 const [signUpError, setSignUpError] = useState("");
  const [loading, setLoading] = useState(false);

  const settingData = useCallback((dataUser: AuthState): void => {
    const {token, usuario, id, name} = dataUser;
    settingStorage({token, usuario, id, name});

    api.defaults.headers.common.Authorization = dataUser.token;

    setData(dataUser);
  }, []);

  useEffect(() => {
    function loadStorageData(): void {
      const dataStorage = getStorage();

      if (dataStorage) {
        const dataParse = JSON.parse(dataStorage);

        api.defaults.headers.common.Authorization = dataParse.token;

        settingData(dataParse);
      }
    }
    loadStorageData();
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  const signIn = useCallback(
    async (credentials: CredentialProps): Promise<void> => {
      try {
        setLoading(true);

        const response = await api.post('usuarios/logar', credentials);

        settingData(response.data);
      } catch (error) {
        setAuthError(true);
      } finally {
        setLoading(false);
      }
    },
    [ settingData],
  );

  const signUp = useCallback(
    async (user: UserProps) => {
      setLoading(true);
      try {

        await api.post('/usuarios/cadastrar', user);

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
    localStorage.removeItem("user:userToken");
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
        settingData,
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
