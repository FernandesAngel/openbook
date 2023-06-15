export interface UserProps {
  nome: string;
  usuario: string;
  senha: string;
}

export interface CredentialProps {
  email: string;
  senha: string;
}
export interface AuthState {
  id: string;
  name: string;
  usuario: string;
  token: string;

}

export interface AuthContextData {
  data: AuthState;
  loading: boolean;
  signIn: (credentials: CredentialProps) => Promise<void>;
  signOut: () => void;
  signUp: (user: UserProps) => Promise<boolean>;
  settingData: (dataUser: AuthState) => void;
  authError: boolean;
  signUpError: string;
}
