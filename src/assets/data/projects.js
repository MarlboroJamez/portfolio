/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';
import Disney from '../images/projectImg.png';
import Amazon from '../images/utracker.jpg';
import Facebook from '../images/greenctg.jpg';
import Covid from '../images/cointracker.jpg';
import Netflix from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Amazon Clone',
    desc:
      'This is a Amazon Clone from the original website Amazon',
    img: Amazon,
  },
  {
    id: uuidv4(),
    name: 'Facebook Clone',
    desc:
      'This is a Facebook Clone from the original website Facebook.',
    img: Facebook,
  },
  {
    id: uuidv4(),
    name: 'COVID 19 Tracker',
    desc:
      'COVID-19 Tracker, UI/UX view towards live covid stats',
    img: Covid,
  },
  {
    id: uuidv4(),
    name: 'Netflix Clone',
    desc:
      'A Netflix Clone from the original website/application Netflix',
    img: Netflix,
  },
  {
    id: uuidv4(),
    name: 'Disney Clone',
    desc:
      'Disney Plus Clone from the orginal website/application Disney Plus',
    img: Disney,
  },
];

export default projects;
