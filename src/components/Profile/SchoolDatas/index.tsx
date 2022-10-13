import Subjects from './Subjects';
import Classrooms from './Classrooms';

import { flex } from '../../../styles';

export default () =>
   <div className={`${flex} flex-col !justify-around w-[100%] md:flex-row md:w-[66%]`}>
      <Subjects />
      <Classrooms />
   </div>