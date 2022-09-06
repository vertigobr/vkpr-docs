---
sidebar_position: 4
sidebar_label: Atualizando
title: Atualizando
slug: /upgrade
---

# Atualizar CLI do VKPR


Para atualizar o VKPR a cada versão lançada, você precisa seguir as seguintes etapas:

## Usando um exemplo com a versão VKPR 1.1.0

```bash
➜ rit update repo

? Select a repository to update:   [Use arrows to move, type to filter, ? for more help]
  ALL
> vkpr-cli

? Select your new version for "vkpr-cli":  [Use arrows to move, type to filter]
> v.1.1.0
  v.1.0.40
  v.1.0.39
  v.1.0.38
  v.1.0.37
  v.1.0.36
  v.1.0.35

The "vkpr-cli" repository was updated with success to version "v.1.1.0"
```

Se você quiser fazer isso de maneira não interativa, você executará o seguinte comando:

```bash
# Não Específicando uma versão, a mais recente é instalada
rit update repo --name="vkpr-cli" --version="v.1.1.0"
```

:::danger Atenção
  Após atualizar o VKPR, é recomendável sempre executar o comando `vkpr init` para evitar problemas com novos recursos.
:::