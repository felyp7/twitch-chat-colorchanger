module.exports = {
    
    // this is your username, it must be in lowercase
    username: "felyp8",
    // Use this link for oauth: https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=q6batx0epp608isickayubi39itsckt&redirect_uri=https://twitchapps.com/tmi/&scope=analytics:read:extensions+user:edit+user:read:email+clips:edit+bits:read+analytics:read:games+user:edit:broadcast+user:read:broadcast+chat:read+chat:edit+channel:moderate+channel:read:subscriptions+whispers:read+whispers:edit+moderation:read+channel:read:redemptions+channel:edit:commercial+channel:read:hype_train+channel:read:stream_key+channel:manage:extensions+channel:manage:broadcast+user:edit:follows+channel:manage:redemptions+channel:read:editors+channel:manage:videos+user:read:blocked_users+user:manage:blocked_users+user:manage:chat_color+user:manage:whispers+user:read:subscriptions+user:read:follows+channel:manage:polls+channel:manage:predictions+channel:read:polls+channel:read:predictions+moderator:manage:automod+moderator:manage:announcements+moderator:manage:shoutouts+moderator:manage:shield_mode+moderator:manage:chat_messages+channel:manage:moderators+channel:manage:vips+channel:manage:schedule+channel:read:goals+moderator:read:automod_settings+moderator:manage:automod_settings+moderator:manage:banned_users+moderator:read:blocked_terms+moderator:manage:blocked_terms+moderator:read:chatters+moderator:read:chat_settings+moderator:manage:chat_settings+user_read+user_blocks_edit+user_blocks_read+user_follows_edit+channel_read+channel_editor+channel_commercial+channel_stream+channel_subscriptions+user_subscriptions+channel_check_subscription+channel_feed_read+channel_feed_edit&force_verify=true
    oauth: "Your Oauth Here",
    clientid: "q6batx0epp608isickayubi39itsckt",

    // this is how often the script will send a new color, you have to keep this in twitch ratelimits. 
    // See https://dev.twitch.tv/docs/irc/guide#command--message-limits for more information
    // just dont set it super low basicly, 10 seconds is as low as I would go.
    // just keep in mind that if you plan on spamming, you can only spam up to 20 messages per 30 seconds without mod/vip
    // and this will be part of that. (if you go over you wont be able to send any messages for about 30 mins)
    seconds: 1,
    
    // change to true to have ANY color (needs twitch prime or turbo)
    usePrimeColors: true,
    
    // This will only work if hasPrime is true
    // it will go through all colors in the rainbow, in order.
    useRainbow: true,
    
    // this is by how much the hue will change every color
    // negative numbers will go through the rainbow backwords.
    // at this speed, it will be very slow, almost unnoticable. 
    // but over a few mins it will look cool.
    rainbowSpeed: 11,
    
    // This is for if you want to start the rainbow in the middle or something. 
    // it will increace the hue by this ammount before the first color 
    rainbowStartHue: 0,
    
    // Works really well with rainbow
    // If this is true it will only change your color when you send a message
    // it only checks in the channels you have added though, so dont expect it to work site wide.
    // this is not something we can improve.
    onlyChangeColorOnMessageSent: true,

    
    // Transitions between each color by converting each to HSL (hue, saturation, lightness)
    // And finding the target color's HSL, then slowly transitioning all 3.
    // (active when not empty and using rainbow)
    colorList: [
        // "#B1FCDF",
        // "#8C7F7F",
        // "#FFFF00",
    ]
}
