import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

const localStorageKey = 'todo-app'; 


class Todo extends PureComponent {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      inputValue: ''
    }
  }

  getId() {
    const savedData = this.props.savedData(localStorageKey) || [];
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  createNewRecordByEnter = event => {
    if (event.key === 'Enter') {
      this.createNewRecord();
    }
  };

  toggleRecordComplete = event => {
    event.target.innerText === '[]' 
      ? event.target.innerText = '[x]' 
      : event.target.innerText='[]';
  };

  createNewRecord = () => {
    const { inputValue } = this.state;
    const { renderRecord, renderEmptyRecord } = this;

    if (inputValue) {
      const savedData = this.props.savedData(localStorageKey) || [];
      const id = this.getId();

      this.props.saveData(localStorageKey, [...savedData, { value: inputValue, id } ]);

      renderRecord(inputValue, id);
    } else {
      renderEmptyRecord();
    }

    this.inputRef.current.value = '';

    this.setState({
      inputValue: ''
    });
  };

  render() {
    const savedData = this.props.savedData(localStorageKey) || [];

    return <Card title='Список дел'>
      <div className='todo t-todo-list'>
        <div className='todo-item todo-item-new'>
          <input ref={this.inputRef}
            className='todo-input t-input' 
            placeholder='Введите задачу' 
            onChange={this.handleChange}
            onKeyPress={this.createNewRecordByEnter}/>
          <span className='plus t-plus' onClick={this.createNewRecord}>+</span>
        </div> 
        {
          savedData.map(data => this.renderRecord(data.value, data.id))
        }     
      </div>
    </Card>
  }

  renderEmptyRecord() {
    return null;
  }

  renderRecord = (record, id) => {
    return <div className='todo-item t-todo' key={id}>
        <p className='todo-item__text'>{record}</p>
        <span className='todo-item__flag t-todo-complete-flag' 
          data-todo-id={id}
          onClick={this.toggleRecordComplete}>[]</span>
      </div>
  };
}

export default withLocalstorage(localStorageKey, [])(Todo);