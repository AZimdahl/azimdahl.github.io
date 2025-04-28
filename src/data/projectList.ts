import kritterProfile from '../assets/projects/kritter/profile.webp';
import kritterSignup from '../assets/projects/kritter/signup.webp';
import kritterProfileEdit from '../assets/projects/kritter/profile-edit.webp';
import rainyjourneyTitle from '../assets/projects/rainyjourney/title.webp';
import rainyjourneyFlower from '../assets/projects/rainyjourney/flower.webp';
import rainyjourneyLava from '../assets/projects/rainyjourney/lava.webp';
import rainyjourneySplit from '../assets/projects/rainyjourney/split.webp';
import colorCodedTitle from '../assets/projects/colorcoded/title.webp';
import colorCodedDemo from '../assets/projects/colorcoded/demo.webp';
import galacticHeroDemo from '../assets/projects/galactichero/demo.webp';
import galacticHeroBoss from '../assets/projects/galactichero/boss.webp';
import galacticHeroLvl1 from '../assets/projects/galactichero/lvl1.webp';
import galacticHeroTiers from '../assets/projects/galactichero/tiers.webp';

type Project = {
  id: string;
  name: string;
  date: string;
  thumbnail: string;
  link: string;
  linkText: string;
  filters: string[];
  summary: string;
  description: string[][];
  imgs: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 'kritter',
    name: 'Social App: Kritter',
    date: 'January 2020',
    thumbnail: kritterProfile,
    link: 'https://github.com/AZimdahl/socialapp-starter',
    linkText: 'A link to the source code can be found on the GitHub repo linked here:',
    filters: ['web', 'fe'],
    summary: '',
    description: [
      [
        'Kritter is the minimum viable product for a social application for our capstone project in the Kenzie Academy front end developer course, in which we built a social application from scratch using JavaScript\'s React framework. We decided on using the Material-UI framework for the appearance of our application.',
      ],
      [
        'I held the position of scrum master in this project. I created the repo and the create-react-app scaffold for the project. I also performed code review and made sure a QA check was performed before merging code. I also set up all of the API calls for the features we planned to implement.',
        'One of the features I did was allowing the user to sign up, creating a account, or log in using a created account. Once the account was created or the the user logged in, the page would automatically redirect the user to the profile page using React\'s routing.',
      ],
      [
        'On the profile page, I built the user info section and created the blueprint for a future feature: the “suggested users” section. With another team member getting the comments section working with viewing the comments of other users, I used the usernames to create a link that routed to those users\' profiles.',
        'Lastly, I built the feature of being able to update the user\'s info, such as their display name and the status message. Once the user enters a password, the change would show immediately on the page.',
      ],
    ],
    imgs: [
      kritterSignup,
      kritterProfile,
      kritterProfileEdit,
    ],
  },
  {
    id: 'rainyjourney',
    name: 'Rainy Journey!',
    date: 'November 2015',
    thumbnail: rainyjourneyTitle,
    link: 'https://www.dropbox.com/home/Game%20Design/RainyJourney',
    linkText: 'Linked below, the gold release of Rainy Journey! can be found, as well as the final build notes and the GDD for the game.',
    filters: ['game'],
    summary: '',
    description: [
      [
        'Rainy Journey! is a platformer about a rain droplet who has lost its family to the hands of an angry orc shaman. In an effort to return the family together and seek revenge on the shaman, the player must make his/her way through the levels in search of each lost member of the family. With each member located, the player earns new abilities that the player will need in order to make it through to the end. What makes Rainy Journey! different is the way the player must appropriately use the different states of matter while managing against the environment, weather, and different zones of temperature.',
      ],
      [
        'While I made an effort to aid each of the other three team members with their tasks as much and as often as needed in this four month project, my primary role was dealing with major programming of the overall game. My major focus was on creating code (and improving existing code), in a manner that made everything work as flawlessly as possible, but also in a way that could be easily and quickly modified in the program. The major problems I faced revolved around communication among different scripts. I was able to solve the most imperative and game breaking issues with maintaining use with state machines and data models. Using the state machines, I was able to more easily control how the player used interactions and when they were able to.',
      ],
      [
        'My most proud feature was the player split/absorb feature that allows the player to split itself at any time in the game (as long as the player has gained the ability), at the cost of half of its current health, but also reabsorbing that split clone. The clones had to be used at certain points to complete puzzles in the game, but they also served as a checkpoint in case the player\'s avatar lost all its health.',
      ]
    ],
    imgs: [
      rainyjourneyFlower,
      rainyjourneyLava,
      rainyjourneySplit,
    ],
  },
  {
    id: 'colorcoded',
    name: 'Color Coded',
    date: 'July 2015',
    thumbnail: colorCodedTitle,
    link: 'https://www.dropbox.com/home/game%20design/ColorCoded/Game%20Build',
    linkText: 'Linked below is the Gold release of Color Coded.',
    filters: ['game'],
    summary: '',
    description: [
      [
        'Color Coded was one of my favorite projects, because I had the most fun designing and balancing it. Co-designed with one other designer, it was one of simple design, but from the effort we put into it\'s balance, it became a fun and addicting game. The title of the game was the starting point for this project. I used that to further come up with the idea of a puzzle game using colors. I finished with the idea that the player must make all the colors match. From these, we built the game. My partner took control of visual feedback to the player, as we communicated what was necessary, while I focused on making the game work in a way that made sense and focused on the learning curve the player will have to go through to finish the game.',
      ],
      [
        'With the game being simple in design, we were able to focus on an appropriate difficulty curve that rose and fell with the testing player\'s interest in the game. It took a lot of trial and error, and playtesting to get to the current Gold release (linked above). Being able to focus on the learning curve players need to go through was a valuable lesson I took from this project. I can now use this knowledge towards properly assigning difficulties in more advanced games.'
      ]
    ],
    imgs: [
      colorCodedTitle,
      colorCodedDemo,
    ],
  },
  {
    id: 'galactichero',
    name: 'Galactic Hero',
    date: 'July 2015',
    thumbnail: galacticHeroDemo,
    link: 'https://www.dropbox.com/home/Game%20Design/GalacticHero',
    linkText: 'Linked below is a Dropbox folder of the executable and the Unity Project. You will be able to see my code and how I put everything together. The project was designed in Unity 4, but has since been updated to Unity 5.3.5. With that said, some code is obsolete, but the project is fully functioning, so I have not made any adjustments to the code.',
    filters: ['game'],
    summary: '',
    description: [
      [
        'Galactic Hero is one of my most monumental projects since it is the one where I learned and began to enjoy the art of scripting. The project was a four-week project that was created alongside lessons associated with the learning of the scripting language. Each week\'s progress goal had four tiers of features. In order to move to the next tier of progress in the project for the week, the previous tier had to have its requirements completed and functioning properly. The tier system is designed as a standard for all those taking part in the project.',
      ],
      [
        'Each progressive tier was, of course, more difficult than the previous and required more research and problem solving. The first tier was provided in the teaching lessons and it was up to me to learn how to expand beyond that into each of the next tiers. The second tier was required to be completed, the third was expected, and the fourth was recommended. As I learned more about scripting with C#, I willingly pushed myself to achieve the higher tiers\' requirements. With each new challenge, I learned new functions and systems to solve the problems I was faced with.',
      ],
      [
        'With this project, I not only learned the bulk of how to read, write, and understand code language, but, most of all, I learned how to figure out how to solve problems related to code. I earned a lot of personal reward in these skills gained and have found myself pushing my limits of my scripting knowledge in later projects.',
      ]
    ],
    imgs: [
      galacticHeroLvl1,
      galacticHeroTiers,
      galacticHeroBoss,
    ],
  },
];