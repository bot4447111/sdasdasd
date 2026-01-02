module.exports = {
    name: 'help',
    description: 'List all available commands',
    async execute(message, args, client) {
        const commands = Array.from(client.commands.values());

        let helpMessage = '```\n';
        helpMessage += '╭─[ ROXY+ COMMANDS ]─╮\n\n';

        // Group commands by category
        const categories = {
            'Music': ['play', 'stop', 'skip', 'queue'],
            'Utility': ['help', 'ping']
        };

        for (const [category, cmdNames] of Object.entries(categories)) {
            helpMessage += `${category}:\n`;
            cmdNames.forEach(cmdName => {
                const cmd = commands.find(c => c.name === cmdName);
                if (cmd) {
                    helpMessage += `  • ${cmd.name.padEnd(10)} - ${cmd.description}\n`;
                }
            });
            helpMessage += '\n';
        }

        helpMessage += '╰──────────────────────────────────╯\n```';

        message.reply(helpMessage);
    }
};
