const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Rolls random number from 1 to selected number. (Default is 100)')
        .addIntegerOption(option =>
            option
                .setName('number')
                .setDescription('Specify a max number you want to roll to.')),
    async execute(interaction) {
        var num = interaction.options.getInteger('number') ?? 100;
        var roll_num = Math.floor(Math.random() * num) + 1;
        await interaction.reply(`${interaction.user.username} rolls ${roll_num} points(s)`);
    },
};