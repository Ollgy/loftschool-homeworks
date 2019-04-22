import React from 'react';
import { Component } from 'react';
import Field from './Field';
import fieldsData from './fieldsData';
import expected from './expected';
import bond from './assets/bond_approve.jpg'
import './Form.css';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      validation: {
        'firstname': 'init',
        'lastname': 'init',
        'password': 'init'
      }
    }
  }

  onSubmit = e => {
    e.preventDefault();

    this.setState({ validation: [...e.target.getElementsByTagName('input')]
      .filter(elem => elem.type !== 'submit')
      .reduce((obj, input) => {
        obj[input.name] = input.value.toLowerCase() === expected[input.name].toLowerCase() 
          ? 'correct'
          : input.value === ''
            ? 'empty'
            : 'error';

        return obj;
      }, {})
    });
  }

  cleanFields = () => {
    const { validation } = this.state;

    this.setState({ validation: Object.keys(validation)
      .reduce((obj, key) => { 
        obj[key] = 'init';

        return obj;
      }, {})
    });
  }

  render() {
    const { validation } = this.state;
    const isValid = !Object.keys(validation)
      .map(key => validation[key])
      .filter(status => status !== 'correct')
      .length;

    return (
      <div  className="app-container">
        {
          isValid
          ?
           <img src={bond} alt='bond' className='t-bond-image'/>
          :
            <form onSubmit={this.onSubmit} className='form'>
              <h1>Введите свои данные, агент</h1> 
              {
                fieldsData.map(data => <Field key={data.name} 
                  validation={validation} 
                  cleanFields={this.cleanFields} 
                  {...data}/>)
              }
              <div className="form__buttons">
                <input type="submit" className="button t-submit" value="Проверить"/>
              </div>
            </form>
        }
      </div>
    )
  }
}

export default Form;