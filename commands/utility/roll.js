const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('roll')
        .setDescription('Rolls random number from 1 to selected number (Default is 100).')
        .addIntegerOption(option =>
            option
                .setName('number')
                .setDescription('Specify a max number you want to roll to.')),
    async execute(interaction) {
        const inputNumber = interaction.options.getInteger('number');
        if (inputNumber == null) {
            var num = 100;
        } else {
            var num = (inputNumber >= -100000 && inputNumber <= 100000) ? inputNumber : 100;
        }
        var rollNum = Math.floor(Math.random() * num) + 1;
        await interaction.reply(`${interaction.user.username} rolls ${rollNum} point(s)!`);
    },
};