const INITIAL_STATE = {
  activeLesson: null,
  activeModule: null,
  modules: [
    {
      id: 1,
      title: 'Módulo Javascript',
      lessons: [
        { id: 1, title: 'Aula 01 - Constantes e Variáveis' },
        { id: 2, title: 'Aula 02 - Funções' },
        { id: 3, title: 'Aula 03 - Objetos' }
      ]
    },
    {
      id: 2,
      title: 'Módulo ReactJS',
      lessons: [
        { id: 1, title: 'Aula 01 - O que é JSX' },
        { id: 2, title: 'Aula 02 - Estados' },
        { id: 3, title: 'Aula 03 - ContextAPI' }
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_LESSON':
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module
      };
    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarFixed: !state.sidebarFixed };
    default:
      return state;
  }
}
