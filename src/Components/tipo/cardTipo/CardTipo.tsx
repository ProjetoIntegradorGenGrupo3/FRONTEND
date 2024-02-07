import { Link } from "react-router-dom";
import Tipo from "../../../models/Tipo";

interface CardTipoProps {
  tipo: Tipo;
}

function CardTipo({ tipo }: CardTipoProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-escuro text-claro font-bold text-2xl">
        Material
      </header>

      <p className="p-8 text-3xl bg- h-full bg-medio">{tipo.descricao}</p>

      <div className="flex">
        <Link
          to={`/editarTipo/${tipo.id}`}
          className="w-full font-semibold text-escuro bg-azmedio hover:bg-escuro hover:text-claro flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarTipo/${tipo.id}`}
          className="bg-escuro  text-claro hover:bg-azmedio hover:text-escuro w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardTipo;
