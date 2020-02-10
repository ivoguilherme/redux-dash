import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CourseActions from '../../store/actions/course';

const List = ({
  state,
  module,
  dispatch,
  activeModule,
  activeLesson,
  toggleLesson
}) => {
  useEffect(() => {
    const activeLocal = JSON.parse(
      localStorage.getItem('currentModuleAndLesson')
    );

    if (activeLocal) {
      const { activeModule, activeLesson } = activeLocal;
      toggleLesson(activeModule, activeLesson);
    }
  }, []);

  useEffect(() => {
    if (activeModule && activeLesson) {
      const currentModuleAndLesson = JSON.stringify({
        activeModule: activeModule,
        activeLesson: activeLesson
      });
      localStorage.setItem('currentModuleAndLesson', currentModuleAndLesson);
    }
  }, [activeModule, activeLesson]);

  return (
    <li className='sidebar__list-item'>
      <div className='sidebar-sublist'>
        <h3 className='sidebar-sublist__title'>{module.title}</h3>
        <ul className='sidebar-sublist__list'>
          {!!module.lessons &&
            module.lessons.map(lesson => (
              <li key={lesson.id} className='sidebar-sublist__list-item'>
                <button onClick={() => toggleLesson(module, lesson)}>
                  {lesson.title}
                </button>
              </li>
            ))}
        </ul>
      </div>
    </li>
  );
};

const mapStateToProps = state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(List);
