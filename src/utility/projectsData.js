
import blackjackImage from '../images/blackjack.png'
import catalelogsImage from '../images/catalelogs.png'
import HarleyFinderImage from '../images/harley-finder.png'

export const projects = [
    {
        title: 'Blackjack',
        description: `<span class="project-summary">A full stack MERN application that allows account creation and guest play.</span>
        <ul class="project-bullets">
            <li>Tracks player's bankroll across sessions.</li>
            <li>Tracks hand history; inlcuding scores, cards, and wager amount to be viewed by the player as desired.</li>
            <li>Responsive design provides desktop, tablet, and mobile views.</li>
        </ul>`,
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        image: blackjackImage,
        deployUrl: '',
        githubUrl: 'https://github.com/angrypirate33/mern-blackjack'
    },
    {
        title: 'Catalelogs',
        description: `<span class="project-summary">A full stack Django application using a PostgreSQL database.</span>
        <ul class="project-bullets">
            <li>Implements "Sign in with Google", so users authenticate with their Google account.</li>
            <li>Utilizes the catalog.beer API so users can search over 60,000 beers.</li>
            <li>Users can create "beer playlists" to keep track of their favorite brews.</li>
        </ul>`,
        technologies: ['Django', 'Python', 'PostgreSQL', 'Materialize'],
        image: catalelogsImage,
        deployUrl: 'https://catalelogs.fly.dev/',
        githubUrl: 'https://github.com/angrypirate33/catalelogs'
    },
    {
        title: 'Harley Finder',
        description: `<span class="project-summary">A single page web application with a database of over 1500 Harley-Davidson motorcycles.</span> 
        <ul class="project-bullets">
            <li>Features auto-complete search suggestions.</li>
            <li>Search by year range and/or model.</li>
            <li>View and compare motorcycle specifications.</li>
        </ul>`,
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        image: HarleyFinderImage,
        deployUrl: 'https://harley-finder.onrender.com/',
        githubUrl: 'https://github.com/angrypirate33/harley-finder'
    }
]