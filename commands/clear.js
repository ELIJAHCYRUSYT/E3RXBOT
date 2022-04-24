module.exports = {
    name: 'clear';
    description: "clear messages!",
    execute(message, args) {
        if(!args[0]) return message.reply("please enter the amount of messages that u want to clear!");
        if(isNan(args[0])) return message.reply("please enter a real number");

        if(args[0] > 100) return message.reply("You cannot delete more that 100 messages!");
        if(args[0] < 1) return message.reply("You must delete atleast one message!");

        await message.channel.messages.fetch({Limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}