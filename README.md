# Twitch-Chat-Color-Changer
Updated version of https://github.com/NotNotQuinn/twitch-chat-colorchanger
<details>
  <summary>Use this link for oauth:</summary>
https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=q6batx0epp608isickayubi39itsckt&redirect_uri=https://twitchapps.com/tmi/&scope=analytics:read:extensions+user:edit+user:read:email+clips:edit+bits:read+analytics:read:games+user:edit:broadcast+user:read:broadcast+chat:read+chat:edit+channel:moderate+channel:read:subscriptions+whispers:read+whispers:edit+moderation:read+channel:read:redemptions+channel:edit:commercial+channel:read:hype_train+channel:read:stream_key+channel:manage:extensions+channel:manage:broadcast+user:edit:follows+channel:manage:redemptions+channel:read:editors+channel:manage:videos+user:read:blocked_users+user:manage:blocked_users+user:manage:chat_color+user:manage:whispers+user:read:subscriptions+user:read:follows+channel:manage:polls+channel:manage:predictions+channel:read:polls+channel:read:predictions+moderator:manage:automod+moderator:manage:announcements+moderator:manage:shoutouts+moderator:manage:shield_mode+moderator:manage:chat_messages+channel:manage:moderators+channel:manage:vips+channel:manage:schedule+channel:read:goals+moderator:read:automod_settings+moderator:manage:automod_settings+moderator:manage:banned_users+moderator:read:blocked_terms+moderator:manage:blocked_terms+moderator:read:chatters+moderator:read:chat_settings+moderator:manage:chat_settings+user_read+user_blocks_edit+user_blocks_read+user_follows_edit+channel_read+channel_editor+channel_commercial+channel_stream+channel_subscriptions+user_subscriptions+channel_check_subscription+channel_feed_read+channel_feed_edit&force_verify=true

</details>




Changes your chat color on twitch.tv to random colors, every so often, or optionally in a rainbow!

## Installation
1. Make sure you have NodeJS installed, you can install it here: https://nodejs.org (Apparently need v16... so either install that version first or downgrade with https://github.com/nvm-sh/nvm / https://github.com/coreybutler/nvm-windows.)
2. Either clone the repository if you have git installed, or download the zip file of the code.
![Image showing download button](https://i.imgur.com/ztyR5Mb.png)
2. Open a terminal in the directory the code is in.
3. Run `InstallDependencies.bat` to install dependencies.
4. Edit the contents of the config file to hold your information, there is instructions in the file.
5. Register a chat bot application on https://dev.twitch.tv (top right)
    - For the redirect url, use https://localhost/
    - ![Image showing application registration screen](https://i.imgur.com/yjnI23y.png )
6. Run `Color Changer.bat` to start the program (You can create a shortcut, then put it on your desktop).

## Configuration
- `username`
  - This is your username, it must be in lowercase
  - This must be a `string`
- `oauth`
  - This is an oauth token to login to chat, you can get one here: https://twitchapps.com/tmi/ (you dont need the "oauth:" part)
  - This must be a `string`
- `seconds`
  - This is how often the script will send a new color, you have to keep this in twitch ratelimits. See https://dev.twitch.tv/docs/irc/guide#command--message-limits for more information.
  - Just dont set it super low basicly, 10 seconds is as low as I would go. Its good to keep in mind that if you plan on spamming, you can only spam up to 20 messages per 30 seconds without mod/vip and this will be part of that. (if you go over you wont be able to send any messages in channels you arent a sub/mod/vip in for about 30 mins)
  -  This must be a `number`
- `usePrimeColors`
  - If this is set to `true`, it will use prime colors, otherwise it uses the basic twitch colors.
  - Requires Prime Gaming, or Twitch Turbo, they both give access to extended colors.
  - This must be a `bool` (`true` or `false`)
- `useRainbow`
  - Does NOTHING if `usePrimeColors` is `false`
  - If this is set to `true`, it will send a color from the rainbow and go through it.
  - This must be a `bool` (`true` or `false`)
- `rainbowSpeed`
  - This is how much the hue of the rainbow changes every color.
  - Negative numbers will go through the rainbow backwords.
  - This must be a `number`
- `rainbowStartHue`
  - This is an offset added to the color's hue before the first color is sent.
  - This must be a `number`
- `onlyChangeColorOnMessageSent`
  - If this is `true` your color will only change when you send a message, but the script will only see messages in the list of channels to check, seen below.
  - This must be a `bool` (`true` or `false`)

Also to note: 
- `channels.txt`
  - every line in this file will be a channel that the script joins (if you have it set up that way.) Lines starting with a '#' are ignored, and so are empty lines.

## Use

### Chat commands

This script has a few chat commands. They will only respond in your channel to avoid "adding bots" to peoples chats that they dont want. Only you can use these commands. The commands:

- `"toggleColor"`
  - Turn color on/off
- `"addColor"`
  - adds the channel to the channels that change color
    for example: "`addColor justin`" will add `justin` to the channels text file and join it.
- `"removeColor"`
  - removes the channel from channels that change color
    for example: "`removeColor justin`" will remove `justin` from the channels text file and part it.
- `"setSpeed"`
  - sets the speed of the rainbow transition
    for example: "`setSpeed 10`" will set `rainbowSpeed` in config to 10.
