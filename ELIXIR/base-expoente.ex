# ----------------------- QUESTÃO 03 -----------------------

# Implemente uma função recursiva que,
# dados dois números inteiros x e n, calcula o
# valor de xn.

defmodule Questoes.Q3 do
  @doc """
    O numero X será multiplicado por ele mesmo N vezes
  """
  def base(x, 0) do
    1
  end

  def base(x, y) do
    x * base(x, y-1)
  end
end