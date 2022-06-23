const db = require("nrc.db");
const { joinVoiceChannel } = require('@discordjs/voice');

module.exports = async(client) => {

  joinVoiceChannel({
channelId: "988435817255018496",
guildId: "988044432332947466",       
adapterCreator: client.guilds.cache.get("988044432332947466").voiceAdapterCreator
    });

  client.user.setStatus("online");
  const aktiviteler = [
    "TheBotlist",
    "Form Sistemli BotList"

  ]
  setInterval(function() {
    var random = Math.floor(Math.random() * (aktiviteler.length - 0 + 1) + 0);

    client.user.setActivity(aktiviteler[random], "");
  }, 2 * 2500); 

  console.log("Ayarlamalar: Durum Ayarlandı!")
  console.log("Ayarlamalar: Aktivite Ayarlandı!")
  
  console.log(" ")



  const kulsayi = []
  client.guilds.cache.forEach((item, i) => {
      kulsayi.push(item.memberCount)
  });
  var toplamkulsayi = 0
  for (var i = 0; i < kulsayi.length; i++) {
      if (isNaN(kulsayi[i])){
          continue;
      }

      toplamkulsayi += Number(kulsayi[i])
  }

  console.log("Bot İstatistiği")
  console.log(`Sunucu Sayısı: ${client.guilds.cache.size}`)
  console.log(`Kullanıcı Sayısı: ${toplamkulsayi}`)
  console.log(`Emoji Sayısı: ${client.emojis.cache.size}`)
  console.log(`Kanal Sayısı: ${client.channels.cache.size}`)

  console.log(" ")

  console.log(`${client.user.tag} olarak Discord'a giriş yaptım. Artık kullanmaya hazırım!`);


}
