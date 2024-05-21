const teamMembers = [
    {
        name: 'Chris Kreider',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Winger',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Mika Zibanejad',
        img: '/imgs/black-ranger.webp',
        age: 27,
        position: 'Center',
        skills: ['Speed', 'Stick Handling', 'Passing'],
        strengths: 'Speed',
        weaknesses: 'Defense',
        biography: 'Connor Andrew McDavid is a Canadian professional ice hockey centre and captain of the Edmonton Oilers of the National Hockey League. The Oilers selected him first overall in the 2015 NHL Entry Draft. McDavid currently wears #97 for the Edmonton Oilers.'
    },
    {
        name: 'Jack Roslovic',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Winger',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Artemi Panarin',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Winger',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Vincent Trocheck',
        img: '/imgs/black-ranger.webp',
        age: 27,
        position: 'Center',
        skills: ['Speed', 'Stick Handling', 'Passing'],
        strengths: 'Speed',
        weaknesses: 'Defense',
        biography: 'Connor Andrew McDavid is a Canadian professional ice hockey centre and captain of the Edmonton Oilers of the National Hockey League. The Oilers selected him first overall in the 2015 NHL Entry Draft. McDavid currently wears #97 for the Edmonton Oilers.'
    },
    {
        name: 'Alexis Lafreniére',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Winger',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Filip Chytil',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Winger',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Alex Wennberg',
        img: '/imgs/black-ranger.webp',
        age: 27,
        position: 'Center',
        skills: ['Speed', 'Stick Handling', 'Passing'],
        strengths: 'Speed',
        weaknesses: 'Defense',
        biography: 'Connor Andrew McDavid is a Canadian professional ice hockey centre and captain of the Edmonton Oilers of the National Hockey League. The Oilers selected him first overall in the 2015 NHL Entry Draft. McDavid currently wears #97 for the Edmonton Oilers.'
    },
    {
        name: 'Kaapo Kakko',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Winger',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Will Cuylle',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Winger',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Barclay Goodrow',
        img: '/imgs/black-ranger.webp',
        age: 27,
        position: 'Center',
        skills: ['Speed', 'Stick Handling', 'Passing'],
        strengths: 'Speed',
        weaknesses: 'Defense',
        biography: 'Connor Andrew McDavid is a Canadian professional ice hockey centre and captain of the Edmonton Oilers of the National Hockey League. The Oilers selected him first overall in the 2015 NHL Entry Draft. McDavid currently wears #97 for the Edmonton Oilers.'
    },
    {
        name: 'Jimmy Vesey',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Winger',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Cale Makar',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Defensman',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Quinn Hughes',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Defensman',
        skills: ['Dribbling', 'Shooting', 'Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    }
]

function generateTeamCards() {
    const teamCardsContainer = document.getElementById('teamCards')
    
    teamMembers.forEach(member => {
        const card = document.createElement('div')
        card.classList.add('col-md-4')

// styling card based on position

        let backgroundColor

        if(member.position === 'Center') {
            backgroundColor = 'red'
        }else if (member.position === 'Winger') {
            backgroundColor = 'blue'
        }else if (member.position === 'Defensman') {
            backgroundColor = 'yellow'
        }

        card.style.backgroundColor = backgroundColor

// create a list of skills with <li> tags

const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')
        card.innerHTML = `
            <div class = "card h-100">
                <div class = "card-header text-center"> ${member.name}</div>
                <div class = "card-body">
                    <img class="img-fluid" src="${member.img}">
                    <p><strong>Age:</strong> ${member.age}</p>
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Skills:</strong> 
                        <ul>
                            ${skillsList}
                        </ul>
                    </p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
                </div>
            </div>
        `
        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards()