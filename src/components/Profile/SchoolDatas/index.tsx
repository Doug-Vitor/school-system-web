import Subjects from './Subjects';
import Classrooms from './Classrooms';

import { flex } from '../../../styles';

export default () =>
   <div className={`${flex} !justify-evenly w-[66%]`}>
      <div className="subjects"><Subjects /></div>
      <div className="classrooms"><Classrooms /></div>
   </div>