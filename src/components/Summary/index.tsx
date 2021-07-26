import * as S from "./styles";

export function Summary() {
  return (
    <S.ContainerB>
      <header>
        <p>Filtros:</p>
      </header>

      <select>
        <option value="">Todos</option>
        <option value="PENDENTE">Pendente</option>
        <option value="CONCLUIDO">Concluido</option>
        <option value="CANCELADO">Cancelado</option>
      </select>
    </S.ContainerB>
  );
}
