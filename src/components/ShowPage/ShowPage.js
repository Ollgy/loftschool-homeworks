// Реализуйте страницу шоу.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле show вашего стейта
// и экшн showRequest.

// В методе componentDidMount вам нужно будет диспатчить showRequest action

import React, { PureComponent } from 'react';
import { showRequest } from '../../actions/actions';
import { connect } from 'react-redux';
import style from './ShowPage.module.css';

class ShowPage extends PureComponent {
  componentDidMount() {
    const { showRequest, match: { params: { id } } } = this.props;
    showRequest(id);
  }

  render() {
    const { data, isLoading, error } = this.props;

    return (
      isLoading
          ? <p>Данные загружаются</p>
          : error
            ? <p>Ошибка! Данныене получены</p>
            : data.id
              ?
              <div>
                <p>{data.name}</p>
                <img src={data.image ? data.image.medium : null} alt={data.name} />
                <p dangerouslySetInnerHTML={{__html: data.summary}}></p>
                <div className={style.cast}>
                  {data._embedded.cast.map(el => el.person).map(person => 
                    <div className='t-person' key={person.id}>
                      <p>{person.name}</p>
                      <img src={person.image ? person.image.medium : null} alt={person.name}/>
                    </div>
                  )}
                </div>
              </div>
              : null
    );
  }
}

const mapStateToProps = state => ({
  data: state.shows.data,
  isLoading: state.shows.isLoading,
  error: state.shows.error,
});

const mapDispatchToProps = { showRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowPage);