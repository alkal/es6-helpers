const channel = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'Max',premium:true},
    {name:'Cooking channel',premium:false},
    {name:'WOBI',premium:false}
 ];
 const user = {
    name:'Francis',
    premium:true,
    premiumChannels:function(){
        // GET THE PREMIUM CHANNELS IS "PREMIUM" IS true
        const premiumChannelsArray=channel.filter(function(channel){
            return channel.premium==true;
        })

        return premiumChannelsArray;
    },
    channels:function(){
        const channelsArray=channel.filter(function(channel){
            return channel.premium==false;
        })

        return channelsArray;
    }
 }
 console.log(user.premiumChannels())
 // brings HBO and MAX
 console.log(user.channels())
 // brings LIFE, COOCKING CHANNEL AND WOBI