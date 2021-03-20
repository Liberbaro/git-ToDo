import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './new-task-form.css';

function NewTaskForm({ taskFormFunc }) {
  const { onKeyDown, onChangeInput, minutes, seconds, value } = taskFormFunc;
  const mainInput = React.createRef();

  useEffect(() => {
    if (mainInput) mainInput.current.focus();
  }, [mainInput]);

  return (
    <div role="presentation"
      onKeyDown={onKeyDown}>
      <form className="new-todo-form">
        <input
          ref={mainInput}
          onChange={onChangeInput}
          className="new-todo"
          type="text"
          placeholder="Input do wish"
          maxLength="100"
          value={value}
        />`
        <input
          onChange={onChangeInput}
          className="new-todo-form__timer min"
          placeholder="Min" value={minutes} maxLength="2"/>
        <input
          onChange={onChangeInput}
          className="new-todo-form__timer sec"
          placeholder="Sec" value={seconds} maxLength="2"/>
      </form>
    </div>

  );
}

NewTaskForm.propTypes = {
  taskFormFunc: PropTypes.shape({
    onKeyDown: PropTypes.func.isRequired,
    onChangeInput: PropTypes.func.isRequired,
    minutes: PropTypes.string.isRequired,
    seconds: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewTaskForm;

// export default class NewTaskForm extends Component {
//   static defaultProps = { addTaskToListToDo: () => {} }
//
//   static propTypes = { addTaskToListToDo: PropTypes.func }
//
//   constructor() {
//     super();
//     this.mainInput = React.createRef();
//   }
//
//   state = {
//     value: '',
//     min: '',
//     sec: '',
//   };
//
//   componentDidMount() {
//     this.mainInput.current.focus();
//     console.log(this.mainInput.current);
//   }
//
//   onKeyDown = (evt) => {
//     if (evt.keyCode === 13) {
//       evt.preventDefault();
//       const { value, min, sec } = this.state;
//       const { addTaskToListToDo } = this.props;
//       if (value) {
//         addTaskToListToDo(value, min, sec);
//       }
//       this.setState({
//         value: '',
//         min: '',
//         sec: '',
//       });
//     }
//   };
//
//   clearValue = (dirtyValue, num, unit) => {
//     let res = dirtyValue.replace(/[^\d]/g, '');
//     if (res > num) res = `${num}`;
//     return unit ? this.setState({ min: res }) : this.setState({ sec: res });
//   };
//
//   onChangeInput = (evt) => {
//     const { value } = evt.target;
//     const { className } = evt.target;
//     if (className === 'new-todo') this.setState({ value });
//     if (className === 'new-todo-form__timer min') this.clearValue(value, 60, 'min');
//     if (className === 'new-todo-form__timer sec') this.clearValue(value, 59);
//   }
//
//   render() {
//     const { value, sec, min } = this.state;
//     return (
//       <div role="presentation"
//         onKeyDown={this.onKeyDown}>
//         <form className="new-todo-form">
//           <input
//             ref={this.mainInput}
//             onChange={this.onChangeInput}
//             className="new-todo"
//             type="text"
//             placeholder="Input do wish"
//             maxLength="100"
//             value={ value }
//           />
//           <input
//             onChange={this.onChangeInput}
//             className="new-todo-form__timer min"
//             placeholder="Min" value={min} maxLength="2"/>
//           <input
//             onChange={this.onChangeInput}
//             className="new-todo-form__timer sec"
//             placeholder="Sec" value={sec} maxLength="2"/>
//         </form>
//       </div>
//
//     );
//   }
// }
