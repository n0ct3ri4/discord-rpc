# Discord RPC Generator

```
Custom Rich-Presence-Card maker.
```

## Get started!

- Create an application from the [Discord Developer Portal](https://discord.com/developers/applications).
- Upload some images in **Rich Presence** > **Art Assets** section.
- Enter a configuration in `config.json` file.
- Start the program :
  - Linux / MacOS : `START/linux_mac.sh`
  - Windows : `START/windows.bat`

## Configuration

- `AppID` : Your Discord application ID.
- `LargeImage` : Your RPC large image name.
- `LargeText` : The text that is displayed when you hover the large image.
- `SmallImage` : Your RPC Small image name.
- `SmallText` : The text that is displayed when you hover the large image.
- `Details` : The main label of your RPC.
- `State` : A simple State field to show in what state your activity is. (in-dev, waiting for..., etc.)
