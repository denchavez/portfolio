import {
  Ecommerce,
  Pokedex,
  QuizApp,
  ToDo,
  HTMLIcon,
  CSSIcon,
  JSIcon,
  TypescriptIcon,
  ReactIcon,
  MovieApp,
  WeatherApp
} from './images/index';

const ProjectData = [
  {
    id: 1,
    title: 'E-Commerce',
    subtitle: 'HTML, CSS, JavaScript',
    link: 'https://denchavez.github.io/library-react/',
    image: Ecommerce,
  },
  {
    id: 2,
    title: 'Weather App',
    subtitle: 'HTML, CSS, JavaScript',
    link: 'https://denchavez.github.io/weather-app/',
    image: WeatherApp,
  },
  {
    id: 3,
    title: 'Pokedex',
    subtitle: 'HTML, CSS, JavaScript',
    link: 'https://denchavez.github.io/pokedex/',
    image: Pokedex,
  },
  {
    id: 4,
    title: 'Quiz App',
    subtitle: 'HTML, CSS, JavaScript',
    link: 'https://denchavez.github.io/quiz-app/',
    image: QuizApp,
  },
  {
    id: '5',
    title: 'To Do',
    subtitle: 'HTML, CSS, JavaScript',
    link: 'https://denchavez.github.io/todo-list/',
    image: ToDo,
  },
  {
    id: '6',
    title: 'Movie App',
    subtitle: 'HTML, CSS, JavaScript',
    link: 'https://denchavez.github.io/movie-app/',
    image: MovieApp
  }
];

const SkillData = [
  {
    id: 1,
    name: 'HTML',
    image: HTMLIcon,
  },
  {
    id: 2,
    name: 'CSS',
    image: CSSIcon,
  },
  {
    id: 3,
    name: 'JavaScript',
    image: JSIcon,
  },
  {
    id: 4,
    name: 'TypeScript',
    image: TypescriptIcon,
  }, 
  {
    id: 5,
    name: 'React',
    image: ReactIcon,
  }
]

export { ProjectData, SkillData }