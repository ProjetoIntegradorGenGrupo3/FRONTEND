import Tipo from "./Tipo";

export default interface Usuario {
  id: number;
  data: string;
  conteudo: string;
  localidade: string;
  foto: string;
  tipo?: Tipo | null;
}