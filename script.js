document.addEventListener('DOMContentLoaded', () => {
    // Handheld games
    const games = [
        { title: 'Game Boy', year: 1989, system: 'Nintendo', description: 'The iconic handheld console that popularized portable gaming.' },
        { title: 'Game Gear', year: 1990, system: 'Sega', description: 'A color handheld console competing with the Game Boy.' },
        { title: 'PlayStation Portable (PSP)', year: 2004, system: 'Sony', description: 'A powerful handheld console with multimedia capabilities.' },
        { title: 'Nintendo DS', year: 2004, system: 'Nintendo', description: 'A dual-screen handheld with a touchscreen interface.' },
        { title: 'Neo Geo Pocker Colour', year: 1999, system: 'SNK', description: 'A handheld console with a focus on arcade-style games.' },
        { title: 'Game Boy Advance', year: 2001, system: 'Nintendo', description: 'An advanced handheld with a wide library of games.' },
        { title: 'Neo Geo Pocket Color', year: 1999, system: 'SNK', description: 'A handheld console with a focus on arcade-style games.' },
        { title: 'PlayStation Vita', year: 2011, system: 'Sony', description: 'A handheld console with a vibrant OLED screen and extensive game library.' },
    ];

    games.sort((a, b) => a.year - b.year);

    const handheldTableBody = document.getElementById('handheld-game-table-body');
    if (handheldTableBody) {
        games.forEach(game => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${game.title}</td>
                <td>${game.year}</td>
                <td>${game.system}</td>
                <td>${game.description}</td>
            `;
            handheldTableBody.appendChild(row);
        });
    }

    // Retro consoles
    const consoles = [
        { console: 'Nintendo Entertainment System (NES)', year: 1983, manufacturer: 'Nintendo', description: 'Revolutionized the gaming industry with iconic titles.' },
        { console: 'Famicom', year: 1983, manufacturer: 'Nintendo', description: 'The Japanese version of the NES, a cultural phenomenon in Japan.' },
        { console: 'Famicom Disk System', year: 1986, manufacturer: 'Nintendo', description: 'An add-on for the Famicom that used floppy disks for expanded storage.' },
        { console: 'PC Engine', year: 1987, manufacturer: 'NEC', description: 'A compact console with a strong library of arcade-style games.' },
        { console: 'PC Engine Duo', year: 1991, manufacturer: 'NEC', description: 'Combined the PC Engine and CD-ROM² into a single console.' },
        { console: 'Sega Mega Drive', year: 1988, manufacturer: 'Sega', description: 'Known for its fast-paced games and Sonic the Hedgehog.' },
        { console: 'Super Nintendo Entertainment System (SNES)', year: 1990, manufacturer: 'Nintendo', description: 'Known for its advanced graphics and iconic games.' },
        { console: 'Sega Saturn', year: 1994, manufacturer: 'Sega', description: 'Known for its 2D and early 3D gaming capabilities.' },
        { console: 'PlayStation', year: 1994, manufacturer: 'Sony', description: 'Introduced 3D gaming and CD-based games.' },
        { console: 'Nintendo Switch', year: 2017, manufacturer: 'Nintendo', description: 'Hybrid console offering both handheld and docked gaming experiences.' }
    ];

    consoles.sort((a, b) => a.year - b.year);

    const consoleTableBody = document.getElementById('console-table-body');
    if (consoleTableBody) {
        consoles.forEach(console => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${console.console}</td>
                <td>${console.year}</td>
                <td>${console.manufacturer}</td>
                <td>${console.description}</td>
            `;
            consoleTableBody.appendChild(row);
        });
    }


    // Arcade racing games
    const racingGames = [
        { title: 'Daytona USA 2', year: 1998, system: 'Model 3', description: 'High-speed arcade racing' },
        { title: 'Scud Race', year: 1996, system: 'Model 3', description: 'Exotic cars and vibrant tracks.' },
        { title: 'Emergency Call Ambulance', year: 1999, system: 'Model 3', description: 'Race to save lives as an ambulance driver.' },
        { title: 'Outrun 2 SP SDX', year: 2006, system: 'Sega Lindbergh', description: 'Modernized classic with enhanced gameplay.' },
        { title: 'Mario Kart Arcade GP', year: 2005, system: 'Triforce', description: 'Kart racing with Mario and friends.' }
    ];

    // Sort racing games by year
    racingGames.sort((a, b) => a.year - b.year);

    // Get the table body element
    const racingTableBody = document.getElementById('racing-game-table-body');

    // Generate table rows dynamically
    if (racingTableBody) {
        racingGames.forEach(game => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${game.title}</td>
                <td>${game.year}</td>
                <td>${game.system}</td>
                <td>${game.description}</td>
            `;
            racingTableBody.appendChild(row);
        });
    }


  
        // Bar-top arcade machines
        const bartopMachines = [
            { machine: 'Neo-Geo MDF', screen: '19 Inch', players: 2, capabilities: '2D Classics (Up to Neo-Geo / CPS2)' },
            { machine: 'Windjammers', screen: '22 Inch', players: 2, capabilities: '3D Arcade Games (Up to Naomi / Atomiwave)' }
        ];
    

        // Get the table body element
        const bartopTableBody = document.getElementById('bartop-table-body');
    
        // Generate table rows dynamically
        if (bartopTableBody) {
            bartopMachines.forEach(machine => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${machine.machine}</td>
                    <td>${machine.screen}</td>
                    <td>${machine.players}</td>
                    <td>${machine.capabilities}</td>
                `;
                bartopTableBody.appendChild(row);
            });
        }

      
            // Light-gun games
            const lightGunGames = [
                { title: 'Time-Crisis 2', year: 1997, system: 'Namco System 23', description: 'Fast-paced arcade shooter with co-op gameplay.' },
                { title: 'Time-Crisis 3', year: 2002, system: 'Namco System 246', description: 'Expanded weapon system and intense action.' },
                { title: 'Ninja Assault', year: 2000, system: 'Namco System 246', description: 'Action-packed ninja-themed light-gun game.' },
                { title: 'Virtua Cop', year: 1994, system: 'Sega Model 2', description: 'Revolutionary 3D light-gun shooter.' },
                { title: 'Virtua Cop 2', year: 1995, system: 'Sega Model 2', description: 'Sequel with improved graphics and gameplay.' },
                { title: 'Confidential Mission', year: 2000, system: 'Sega NAOMI', description: 'Spy-themed light-gun game with co-op mode.' },
                { title: 'The House of the Dead 2', year: 1998, system: 'Sega NAOMI', description: 'Zombie shooter with branching storylines.' }
            ];
        
            // Sort light-gun games by year
            lightGunGames.sort((a, b) => a.year - b.year);
        
            // Get the table body element
            const lightGunTableBody = document.getElementById('light-gun-table-body');
        
            // Generate table rows dynamically
            if (lightGunTableBody) {
                lightGunGames.forEach(game => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${game.title}</td>
                        <td>${game.year}</td>
                        <td>${game.system}</td>
                        <td>${game.description}</td>
                    `;
                    lightGunTableBody.appendChild(row);
                });
            }
        });









    




















