import React, { PureComponent } from 'react';
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
        showId: this.props.showId,
        data: await getShowInfo(this.props.showId)
      });
    }
  }

  render() {
    const { data } = this.state;

    return <div className='show'>
      <img className='show-image' src={data.image.medium} alt={data.name}/>
      <h2 className='show-label t-show-name'>{data.name}</h2>
      <p className='show-text t-show-genre'>
        <b>{data.genres.length ? 'Genre: ' : ''}</b>{data.genres.join(', ')}
      </p>
      <div className='show-text t-show-summary' dangerouslySetInnerHTML={{__html: data.summary}}/>
    </div>
  }
}

export default Show;