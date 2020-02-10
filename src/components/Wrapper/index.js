import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Wrapper = ({ state, activeLesson, activeModule, sidebarFixed }) => {
  const [currentModuleAndLesson, setCurrentModuleAndLesson] = useState({});

  useEffect(() => {
    const activeLocal = JSON.parse(
      localStorage.getItem('currentModuleAndLesson')
    );

    if (activeLocal) {
      setCurrentModuleAndLesson(activeLocal);
    }
  }, []);

  return (
    <div className={`wrapper ${sidebarFixed ? '' : 'wrapper--full'}`}>
      <h1>
        {activeLesson
          ? activeLesson.title
          : currentModuleAndLesson.activeLesson}
      </h1>
      <strong>
        {activeModule
          ? activeModule.title
          : currentModuleAndLesson.activeModule}
      </strong>
      <h2>
        {!activeModule &&
          !Object.entries(currentModuleAndLesson).length &&
          'Selecione uma aula e comece agora mesmo!'}
      </h2>
    </div>
  );
};

const mapStateToProps = state => ({
  state,
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
  sidebarFixed: state.sidebar.isFixed
});

export default connect(mapStateToProps)(Wrapper);
