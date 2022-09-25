import Subjects from './Subjects';
import Classrooms from './Classrooms';

import './SchoolDatas.scss';
export default () =>
   <div className="school-datas-container">
      <div className="subjects"><Subjects /></div>
      <div className="classrooms"><Classrooms /></div>
   </div>