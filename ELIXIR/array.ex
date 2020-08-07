# ----------------------- QUESTÃO 07 -----------------------

# Usando recursividade, calcule a soma de
# todos os valores de um array de reais.

defmodule Questoes.Q7 do
  @doc """
    Enviando uma tupla de numeros floters iremos somar todos os numeros dela
    e retorna o seu tamanho
  """
  
  def array(tuple, 0) do
    0
  end

  def array(tuple, length) do
    elem(tuple, length-1) + array(tuple, length-1)
  end
end