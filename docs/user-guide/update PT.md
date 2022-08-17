---
sidebar_position: 6
---

# Atualizar CLI do VKPR


Para atualizar o VKPR a cada versão lançada, você precisa seguir as seguintes etapas:

## Usando um exemplo com a versão VKPR 1.0.20

```bash
➜ rit update repo

? Selecione um repositório para atualizar: [Use as setas para mover, digite para filtrar, ? para mais ajuda]
  ALL
> vkpr-cli

? Selecione sua nova versão para "vkpr-cli": [Use as setas para mover, digite para filtrar]
> v.1.0.20
  v.1.0.19
  v.1.0.18
  v.1.0.17
  v.1.0.16
  v1.0.15
  v1.0.14

O repositório "vkpr-cli" foi atualizado com sucesso para a versão "v.1.0.20"
```

Se você quiser fazer isso de maneira não interativa, você executará o seguinte comando:

```bash
# Not specifying a version, the latest is installed
rit update repo --name="vkpr-cli" --version="v.1.0.20"
```

:::danger Take care
  Após atualizar o VKPR, é recomendável sempre executar o comando `vkpr init` para evitar problemas com novos recursos.
:::