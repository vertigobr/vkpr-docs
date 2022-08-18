---
sidebar_position: 4
---

# Atualizar CLI do VKPR


Para atualizar o VKPR a cada versão lançada, você precisa seguir as seguintes etapas:

## Usando um exemplo com a versão VKPR 1.0.20

```bash
➜ rit update repo

? Select a repository to update:   [Use arrows to move, type to filter, ? for more help]
  ALL
> vkpr-cli

? Select your new version for "vkpr-cli":  [Use arrows to move, type to filter]
> v.1.0.20
  v.1.0.19
  v.1.0.18
  v.1.0.17
  v.1.0.16
  v1.0.15
  v1.0.14

The "vkpr-cli" repository was updated with success to version "v.1.0.20"
```

Se você quiser fazer isso de maneira não interativa, você executará o seguinte comando:

```bash
# Não especificando uma versão, a mais recente é instalada
rit update repo --name="vkpr-cli" --version="v.1.0.20"
```

:::danger Atenção
  Após atualizar o VKPR, é recomendável sempre executar o comando `vkpr init` para evitar problemas com novos recursos.
:::