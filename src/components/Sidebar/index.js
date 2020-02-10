import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import List from './list';

import * as SidebarActions from '../../store/actions/sidebar';

const Sidebar = ({ modules, dispatch, sidebarFixed, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${sidebarFixed ? '' : 'sidebar--hide'}`}>
      <h2 className='sidebar__title'>Lista de Aulas</h2>
      <ul className='sidebar__list'>
        {!!modules.length &&
          modules.map(module => (
            <List key={module.id} module={module} dispatch={dispatch} />
          ))}
      </ul>
      <button
        onClick={() => toggleSidebar(sidebarFixed)}
        className='sidebar__toggle'
      ></button>
    </aside>
  );
};

const mapStateToProps = state => ({
  modules: state.course.modules,
  sidebarFixed: state.sidebar.isFixed
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(SidebarActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
