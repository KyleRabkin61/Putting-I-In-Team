const teamMembers = [
    {
        name: 'Lionel Messi',
        position: 'Forward',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Lionel Andrés "Leo" Messi is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. '
    },
    {
        name: 'Lionel Messi Jr.',
        position: 'Midfielder',
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

        // let backgroundColor = 

// create a list of skills with <li> tags

const skillsList = member.skills.map(skill => `<li> ${skill} </li>`).join('')

        card.innerHTML = `
            <div class = "card">
                <div class = "card-header"> ${member.name}</div>
                <div class = "card-body">
                    <p><strong>Position:</strong> ${member.position}</p>
                    <p><strong>Skills:</strong> 
                        <ul>
                            ${skillsList}
                        </ul>
                    </p>
                    <p><strong>Strengths:</strong> ${member.strengths}</p>
                    <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                    <p><strong>Biography:</strong> ${member.biography}</p>
        `
        teamCardsContainer.appendChild(card)
    })
}

window.onload = generateTeamCards()