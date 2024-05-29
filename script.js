const teamMembers = [
    {
        name: 'Artemi Panarin',
        img: '/imgs/apanarin.webp',
        age: 32,
        active: true,
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
        active: true,
        position: 'Center',
        skills: ['Speed', 'Stick Handling', 'Passing'],
        strengths: 'Speed',
        weaknesses: 'Defense',
        biography: 'Connor Andrew McDavid is a Canadian professional ice hockey centre and captain of the Edmonton Oilers of the National Hockey League. The Oilers selected him first overall in the 2015 NHL Entry Draft. McDavid currently wears #97 for the Edmonton Oilers.'
    },
    {
        name: 'Rick Nash',
        img: '/imgs/rnash.jpg',
        age: 39,
        active: false,
        position: 'Winger',
        skills: ['Size', 'Puck Control', 'Shooting'],
        strengths: 'Size',
        weaknesses: 'Skating',
        biography: 'Richard Nash is a Canadian former professional ice hockey player who serves as the director of player development for the Columbus Blue Jackets of the National Hockey League.'
    },
    {
        name: 'Cale Makar',
        img: '/imgs/cmakar.jpg',
        age: 25,
        active: true,
        position: 'Defenseman',
        skills: ['Shooting', 'Passing', 'Hockey IQ'],
        strengths: 'Hockey IQ',
        weaknesses: 'Size',
        biography: 'Cale Douglas Makar is a Canadian professional ice hockey defenceman for the Colorado Avalanche of the National Hockey League. He was selected with the fourth overall pick by the Avalanche in the 2017 NHL Entry Draft.'
    },
    {
        name: 'Quinn Hughes',
        img: '/imgs/qhughes.jpg',
        age: 24,
        active: true,
        position: 'Defenseman',
        skills: ['Stick Handling', 'Agility', 'Passing'],
        strengths: 'Speed',
        weaknesses: 'Shoting',
        biography: 'Quintin Hughes is an American professional ice hockey defenseman and captain of the Vancouver Canucks of the National Hockey League. Hughes was drafted seventh overall by the Canucks in the 2018 NHL Entry Draft. Before the draft, he was considered a top prospect. '
    },
    {
        name: 'Wayne Gretzky',
        img: '/imgs/wgretzky.jpg',
        age: 63,
        active: false,
        position: 'Winger',
        skills: ['Shooting', 'Passing', ' Stick Handling'],
        strengths: 'Hockey IQ',
        weaknesses: 'Size',
        biography: 'Wayne Douglas Gretzky CC is a Canadian former professional ice hockey player and former head coach. He played 20 seasons in the National Hockey League for four teams from 1979 to 1999, retiring at the age of 38.'
    },
    {
        name: 'Patrice Bergeron',
        img: '/imgs/pbergeron.jpg',
        age: 38,
        active: false,
        position: 'Center',
        skills: ['Size', 'Shooting', 'Stick Handling'],
        strengths: 'Faceoffs',
        weaknesses: 'Speed',
        biography: 'Patrice Bergeron-Cleary is a Canadian former professional ice hockey centre who played 19 seasons in the National Hockey League, all with the Boston Bruins. He served as team captain from 2021 until his retirement in 2023.'
    },
    {
        name: 'Nikita Kucherov',
        img: '/imgs/nkucherov.jpg',
        age: 30,
        active: true,
        position: 'Winger',
        skills: ['Passing', 'Hockey IQ', 'Stick Handling'],
        strengths: 'Shooting',
        weaknesses: 'Defense',
        biography: 'Nikita Igorevich Kucherov is a Russian professional ice hockey right winger and alternate captain for the Tampa Bay Lightning of the National Hockey League.'
    },
    {
        name: 'Adam Fox',
        img: '/imgs/afox.jpg',
        age: 26,
        active: true,
        position: 'Defenseman',
        skills: ['Edge Work', ' Shooting', ' Passing'],
        strengths: 'Hockey IQ',
        weaknesses: 'Size',
        biography: 'Adam Fox is an American professional ice hockey defenseman and alternate captain for the New York Rangers of the National Hockey League. Fox was selected by the Calgary Flames, 66th overall, in the 2016 NHL Entry Draft.'
    },
    {
        name: 'Brian Leetch',
        img: '/imgs/bleetch.jpg',
        age: 56,
        active: false,
        position: 'Defenseman',
        skills: ['Dribbling', ' Shooting', ' Passing'],
        strengths: 'Ball Control',
        weaknesses: 'Heading Ability',
        biography: 'Brian Joseph Leetch is an American former professional ice hockey defenseman who played 18 National Hockey League seasons with the New York Rangers, Toronto Maple Leafs, and Boston Bruins. He has been called one of the top defensemen in NHL history. Leetch accumulated many individual honors during his 18-year career.'
    },
    {
        name: 'Igor Shesterkin',
        img: '/imgs/black-ranger.webp',
        age: 36,
        active: true,
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

// Active / Inactive

let string

if(member.active === true) {
    string = 'Yes'
}else if(member.active === false) {
    string = 'No'
}

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
                    <p><strong>Active:</strong> ${string}</p>
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