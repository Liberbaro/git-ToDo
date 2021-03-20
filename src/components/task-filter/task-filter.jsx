import React from 'react';
import PropTypes from 'prop-types';
import './task-filter.css';

function TaskFilter({ filterFunc, activeFilter }) {
  const { filtersList, selectTaskFilter } = filterFunc;
  const filterButtons = filtersList.map(({ label, mainClass }) => {
    const selected = activeFilter === mainClass ? 'selected' : '';
    return (
      <li key={label}>
        <button onClick={() => selectTaskFilter(mainClass)} className={selected} type="button">
          {label}
        </button>
      </li>
    );
  });
  return <ul className="filters">{filterButtons}</ul>;
}

TaskFilter.propTypes = {
  filterFunc: PropTypes.shape({
    countTasksLeft: PropTypes.number.isRequired,
    filtersList: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectTaskFilter: PropTypes.func.isRequired,
  }).isRequired,
  activeFilter: PropTypes.string.isRequired,
};

export default TaskFilter;

// function TaskFilter({ activeFilter, changeFilter }) {
//   // eslint-disable-next-line no-unused-vars
//   const [filtersList, changeFilterList] = useState([{ label: 'All', mainClass: 'all' },
//     { label: 'Active', mainClass: '' },
//     { label: 'Completed', mainClass: 'completed' }]);
//
//   const selectTaskFilter = (label) => {
//     changeFilter((oldList) => {
//       oldList.map((el) => {
//         if (label === 'all') el.display = 'block';
//         else el.display = el.className === label ? 'block' : 'none';
//         return el;
//       });
//     }, () => label);
//   };
//
//   const filterButtons = filtersList.map(({ label, mainClass }) => {
//     const selected = activeFilter === mainClass ? 'selected' : '';
//     return (
//       <li key={label}>
//         <button
//           onClick={() => selectTaskFilter(mainClass)}
//           className={selected}
//           type="button" >
//           {label}
//         </button>
//       </li>
//     );
//   });
//   return <ul className="filters">{filterButtons}</ul>;
// }
//
// TaskFilter.propTypes = {
//   changeFilter: PropTypes.func.isRequired,
//   activeFilter: PropTypes.string.isRequired,
// };
// export default TaskFilter;

// export default class TaskFilter extends Component {
//   static propTypes = {
//     test: PropTypes.func.isRequired,
//     activeFilter: PropTypes.string.isRequired,
//   };
//
//   state = {
//     filtersList: [
//       { label: 'All', mainClass: 'all' },
//       { label: 'Active', mainClass: '' },
//       { label: 'Completed', mainClass: 'completed' },
//     ],
//   };
//
//     selectTaskFilter = (label) => {
//       const { test } = this.props;
//       test((oldList) => {
//         oldList.map((el) => {
//           if (label === 'all') el.display = 'block';
//           else el.display = el.className === label ? 'block' : 'none';
//           return el;
//         });
//       }, () => label);
//     }
//
//     render() {
//       const { filtersList } = this.state;
//       const { activeFilter } = this.props;
//       const filterButtons = filtersList.map(({ label, mainClass }) => {
//         const selected = activeFilter === mainClass ? 'selected' : '';
//         return (
//           <li key={label}>
//             <button
//               onClick={() => this.selectTaskFilter(mainClass)}
//               className={selected}
//               type="button" >
//               {label}
//             </button>
//           </li>
//         );
//       });
//       return <ul className="filters">{filterButtons}</ul>;
//     }
// }

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// // import FilterButton from '../filter-button/filter-button';
// import './task-filter.css';
//
// export default class TaskFilter extends Component {
//   static propTypes = {
//     test: PropTypes.func.isRequired,
//     activeFilter: PropTypes.string.isRequired,
//   };
//
//   state = {
//     filtersList: [
//       { label: 'All', mainClass: 'all' },
//       { label: 'Active', mainClass: '' },
//       { label: 'Completed', mainClass: 'completed' },
//     ],
//   };
//
//     selectTaskFilter = (label) => {
//       const { test } = this.props;
//       test((oldList) => {
//         oldList.map((el) => {
//           if (label === 'all') el.display = 'block';
//           else el.display = el.className === label ? 'block' : 'none';
//           return el;
//         });
//       });
//     }
//
//     render() {
//       const { filtersList } = this.state;
//       const { activeFilter } = this.props;
//       const filterButtons = filtersList.map(({ label, mainClass }) => {
//         const selected = activeFilter === mainClass ? 'selected' : '';
//         return (
//           <li key={label}>
//             <button
//               onClick={() => this.selectTaskFilter(mainClass)}
//               className={selected}
//               type="button" >
//               {label}
//             </button>
//           </li>
//         );
//       });
//       return <ul className="filters">{filterButtons}</ul>;
//     }
// }
