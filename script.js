const teamMembers = [
    {
        name: 'Artemi Panarin',
        img: '/imgs/apanarin.webp',
        age: 36,
        position: 'Winger',
        skills: ['Stick Handling', ' Shooting', ' Passing'],
        strengths: 'Hockey IQ',
        weaknesses: 'Size',
        biography: 'Artemi Sergeyevich Panarin, nicknamed the "Breadman", or simply "Bread", is a Russian professional ice hockey winger and alternate captain for the New York Rangers of the National Hockey League.'
    },
    {
        name: 'Connor McDavid',
        img: '/imgs/cmcdavid.jpg',
        age: 27,
        position: 'Center',
        skills: ['Speed', 'Stick Handling', 'Passing'],
        strengths: 'Speed',
        weaknesses: 'Defense',
        biography: 'Connor Andrew McDavid is a Canadian professional ice hockey centre and captain of the Edmonton Oilers of the National Hockey League. The Oilers selected him first overall in the 2015 NHL Entry Draft. McDavid currently wears #97 for the Edmonton Oilers.'
    },
    {
        name: 'Rick Nash',
        img: '/imgs/rnash.jpg',
        age: 36,
        position: 'Winger',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Richard Nash is a Canadian former professional ice hockey player who serves as the director of player development for the Columbus Blue Jackets of the National Hockey League.'
    },
    {
        name: 'Cale Makar',
        img: '/imgs/cmakar.jpg',
        age: 36,
        position: 'Defenseman',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Quinn Hughes',
        img: '/imgs/qhughes.jpg',
        age: 27,
        position: 'Defenseman',
        skills: ['Speed', 'Stick Handling', 'Passing'],
        strengths: 'Speed',
        weaknesses: 'Defense',
        biography: 'Connor Andrew McDavid is a Canadian professional ice hockey centre and captain of the Edmonton Oilers of the National Hockey League. The Oilers selected him first overall in the 2015 NHL Entry Draft. McDavid currently wears #97 for the Edmonton Oilers.'
    },
    {
        name: 'Wayne Gretzky',
        img: '/imgs/wgretzky.jpg',
        age: 36,
        position: 'Winger',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Patrice Bergeron',
        img: '/imgs/black-ranger.webp',
        age: 27,
        position: 'Center',
        skills: ['Speed', 'Stick Handling', 'Passing'],
        strengths: 'Speed',
        weaknesses: 'Defense',
        biography: 'Connor Andrew McDavid is a Canadian professional ice hockey centre and captain of the Edmonton Oilers of the National Hockey League. The Oilers selected him first overall in the 2015 NHL Entry Draft. McDavid currently wears #97 for the Edmonton Oilers.'
    },
    {
        name: 'Nikita Kucherov',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Winger',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Adam Fox',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Defenseman',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Brian Lynch',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Defenseman',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Igor Shesterkin',
        img: '/imgs/black-ranger.webp',
        age: 36,
        position: 'Goalie',
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
        card.classList.add('col-lg-4','col-md-6','p-2')

// styling card based on position

        let backgroundColor

        if(member.position === 'Center') {
            backgroundColor = 'red'
        }else if (member.position === 'Winger') {
            backgroundColor = 'blue'
        }else if (member.position === 'Defenseman') {
            backgroundColor = 'yellow'
        }else if (member.position === 'Goalie') {
            backgroundColor = 'green'
        }

        card.style.backgroundColor = backgroundColor

// create a list of skills with <li> tags

const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')
        card.innerHTML = `
            <div class = "card h-100">
                <div class = "card-header text-center"> ${member.name}</div>
                <div class = "card-body">
                    <div class = "text-center">
                    <img class="img-fluid" src="${member.img}">
                    </div>
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