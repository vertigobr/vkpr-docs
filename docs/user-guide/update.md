---
sidebar_position: 5
---

# Upgrade VKPR CLI


For you to update VKPR with each release that is released, you need to do the following steps:

## Using a example with the VKPR 1.0.20 version

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

If you want to do it in a non-interactive way, you will run the following command:

```bash
# Not specifying a version, the latest is installed
rit update repo --name="vkpr-cli" --version="v.1.0.20"
```

:::danger Take care
  After updating VKPR, it is recommended to always run the `vkpr init` command to avoid problems with new features.
:::