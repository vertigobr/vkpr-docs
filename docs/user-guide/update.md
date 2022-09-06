---
sidebar_position: 5
sidebar_label: Upgrade the CLI
title: Upgrade the CLI
slug: /upgrade
---

# Upgrade VKPR CLI


For you to update VKPR with each release that is released, you need to do the following steps:

## Using a example with the VKPR v.1.1.0 version

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

If you want to do it in a non-interactive way, you will run the following command:

```bash
# Not specifying a version, the latest is installed
rit update repo --name="vkpr-cli" --version="v.1.1.0"
```

:::danger Take care
  After updating VKPR, it is recommended to always run the `vkpr init` command to avoid problems with new features.
:::