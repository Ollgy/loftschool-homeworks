import React, { PureComponent } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { getShowInfo } from '../../api';
import './Show.css';

class Show extends PureComponent {
  state = {
    showId: '',
    data: {
      name: '',
      image: '',
      genres: [],
      summary: ''
    }
  }

  componentDidUpdate = async (prevProps) => {
    if (this.props.showId !== prevProps.showId) {
      this.setState({
        data: await getShowInfo(this.props.showId)
      });
    }
  }

  static getDerivedStateFromProps (nextProps, prevState) {
    return nextProps.showId !== prevState.showId
      ? {
        showId: nextProps.showId,
      }
      : null;
  }

  render() {
  const { data } = this.state;

  return <div className='show'>
      <img className='show-image' src={data.image.medium} alt={data.name}/>
      <h2 className='show-label t-show-name'>{data.name}</h2>
      <p className='show-text t-show-genre'>
        <b>{data.genres.length ? 'Genre: ' : ''}</b>{data.genres.join(', ')}
      </p>
      <div className='show-text t-show-summary' children={ReactHtmlParser(data.summary)}/>
    </div>
  }
}

export default Show;
