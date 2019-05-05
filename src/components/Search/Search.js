// Реализуйте страницу поиска.

// Используйте метод connect и mapStateToProps, mapDispatchToProps,
// чтобы получить ссылку на поле search вашего стейта
// и экшн searchRequest.

import React, { PureComponent } from 'react';
import { searchRequest } from '../../actions/actions';
import { connect } from 'react-redux';
import style from './Search.module.css';
import ShowPreview from '../ShowPreview'

class Search extends PureComponent {
  state = {
    inputValue: ''
  }

  onChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  sendRequest = () => {
    const { searchRequest } = this.props;
    searchRequest(this.state.inputValue);
  }

  render() {
    const { series, isLoading, error } = this.props;
    console.log( series );
    return (
      <div>
        <div className={style.previewList}>
          <input className={`${style.input} t-input`} 
            placeholder='Название сериала'
            onChange={this.onChange}/>
          <div className={style.buttonWrapper}>
            <button className={`${style.button} t-search-button`} 
              children='Найти'
              onClick={this.sendRequest}/>
          </div>
        </div>
        {isLoading
          ? <p>Данные загружаются</p>
          : error
            ? <p>Ошибка! Данныене получены</p>
            : series.map(ep => (
                <ShowPreview key={ep.id}
                  id={ep.id}
                  url={ep.url}
                  name={ep.name}
                  image={ep.image ? ep.image.medium : null} 
                  type={ep.type}
                  language={ep.language}
                />
              ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  series: state.search.series,
  isLoading: state.search.isLoading,
  error: state.search.error,
});

const mapDispatchToProps = { searchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);