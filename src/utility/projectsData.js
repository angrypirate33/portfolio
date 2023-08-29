
import blackjackImage from '../images/blackjack.png'
import catalelogsImage from '../images/catalelogs.png'
import HarleyFinderImage from '../images/harley-finder.png'

export const projects = [
    {
        title: 'Blackjack',
        description: 'A full stack MERN application that allows for guest play or  user signup. Tracks the player\'s bankroll over time as well as complete hand history.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        image: blackjackImage
    },
    {
        title: 'Catalelogs',
        description: 'A full stack Django application using a PostgreSQL database. Search an API for the beer of your choice, view its information, and add it to one of your catalelogs',
        technologies: ['Django', 'Python', 'PostgreSQL', 'Materialize'],
        image: catalelogsImage
    },
    {
        title: 'Harley Finder',
        description: 'A single page web application with a database of over 1500 Harley-Davidson motorcycles. Search my year range and/or model, create motorcycle wishlists, and add motorcycles you\'re interested in to your wishlist.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
        image: HarleyFinderImage
    }
]