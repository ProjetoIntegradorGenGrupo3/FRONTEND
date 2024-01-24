import Post  from "./Post";

export default interface Usuario {
  id: number;
  nome: string;
  email: string;
  foto: string;
  senha: string;
  bio: string;
  contato: string;
  data_nascimento: string;
  Post?: Post | null;
}