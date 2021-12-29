# SG Sistemas extensão para o visual studio code para o desenvolvimento com Harbour and xHarbour

Suporte apenas para Windows no momento.

## Funções

- Exportação do arquivo atual para o servidor de complilação.
- Exportação do branch atual para o servidor de complilação .
- Visualização dos índices.
- Compilação de projetos Fivewin por atalho.

## Configurações da extensão.
 A extensão tem as seguintes configurações:

* `Caminho servidor Harbour-Ubuntu`: Caminho do servidor (230) no seu mapeamento atual na raiz.
* `Caminho servidor xHarbour      `: Caminho do servidor (231) no seu mapeamento atual na raiz.
* `Caminho servidor Harbourx64    `: Caminho do servidor (232) no seu mapeamento atual na raiz.
* `Caminho servidor Harbourx86    `: Caminho do servidor (233) no seu mapeamento atual na raiz.
* `Caminho servidor Extra         `: Caminho do servidor (222) no seu mapeamento atual na raiz.

* `Repositório`: Caminho do seu repositório trunk atual, na raiz.

## Problemas conhecidos

- Sem suporte para Linux, a não ser pela função de pegar os índices.
- Não é dado parse no chave_indices, por enquanto foi feita a geração de um indices.json até encontrar uma solução plausível.
- A lista de produtos compilados irá virar um GIST com um JSON com as configs onde cada um poderá dar fork e trocar a lista e adicionar da sua forma os projetos. Existirá um gist default com todas as linhas de compilação.
- Documentações incompletas.

## Credits

- [Caio Vega](https://github.com/CaioVegaSG).



