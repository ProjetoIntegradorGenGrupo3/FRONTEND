import Tipo from "./Tipo";
import Usuario from "./Usuario";

export default interface Post {
  id: number;
  data: string;
  conteudo: string;
  localidade: string;
  foto: string;
  tipo: Tipo | null;
  usuario: Usuario | null;
}