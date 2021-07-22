/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';
import Disney from '../images/projectImg.png';
import Amazon from '../images/utracker.jpg';
import Facebook from '../images/greenctg.jpg';
import Covid from '../images/cointracker.jpg';
import Netflix from '../images/cavinimg.jpg';
import LinkedIn from '../images/linkedin.png';

const projects = [
  {
    id: uuidv4(),
    name: 'LinkedIn Clone',
    desc:
      'This is a LinkedIn Clone from the original website LinkedIn.',
    img: LinkedIn,
    link: 'https://linkedin-clone-58b1f.firebaseapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Amazon Clone',
    desc:
      'This is a Amazon Clone from the original website Amazon',
    img: Amazon,
    link: 'https://clone-ea7ee.web.app/',
  },
  {
    id: uuidv4(),
    name: 'Facebook Clone',
    desc:
      'This is a Facebook Clone from the original website Facebook.',
    img: Facebook,
    link: 'https://fb-clone-f05b5.firebaseapp.com/',
  },
  {
    id: uuidv4(),
    name: 'COVID 19 Tracker',
    desc:
      'COVID-19 Tracker, UI/UX view towards live covid stats',
    img: Covid,
    link: 'https://covid-tracker-8cec7.firebaseapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Netflix Clone',
    desc:
      'A Netflix Clone from the original website/application Netflix',
    img: Netflix,
    link: 'https://netflix-clone-5e343.firebaseapp.com/',
  },
  {
    id: uuidv4(),
    name: 'Disney Clone',
    desc:
      'Disney Plus Clone from the orginal website/application Disney Plus',
    img: Disney,
    link: 'https://github.com/MarlboroJamez/ReactJS-Clones/tree/main/disney-plus-clone',
  },
];

export default projects;
