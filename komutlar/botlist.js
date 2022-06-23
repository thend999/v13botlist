const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json")
const db = require("nrc.db")
const {MessageActionRow, MessageButton} = require("discord.js")
module.exports = {
    calistir: async(client, message, args) => {

    if(message.author.id !== message.guild.ownerId) return message.reply(`Bu komudu kullanmak için yetkin yok`)
		const menu = new Discord.MessageEmbed()
		.setColor("000000")
		.setTitle("TheCode #Botlist")
		.setDescription(` **Selamlar Değerli Üyelerimiz!
		Sizlere Botunuzu Ekleyebilmek İçin Ne Yapmanız
		Gerektiğini Anlatmak Üzere Burdayım
		Alttaki Butona Basın Gerekli Yerleri Doğru Şekilde
		Doldurun Ve Formu Gönderin
		Yapmanız Gerekenler Sadece Bunlar.**
		
		**İyi Günler Dileriz !** `)

		const row = new MessageActionRow()
		.addComponents(
		new MessageButton()
		.setCustomId('bot-başvuru')
		.setLabel('Bot Ekle')
		.setEmoji("🤖")
		.setStyle('SECONDARY'),
		
		);
		message.channel.send({
			embeds: [menu], components: [row]
		});


},

name: "botlist",
description: "",
aliases: [],
kategori: "",
usage: "",
}