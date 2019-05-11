import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import {} from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const { data, isLoading } = this.props;
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю

    return (
      <div className={cx(styles.root, 't-followers')}>
        {
          isLoading
            ? <p>Данные загружаются</p>
            : data.length
                ? data.map(follower =>
                  <div key ={follower.id} className={styles.follower}>
                    <img className={styles.followerImg} src={follower.avatar_url} alt={follower.login}/>
                    <p className={styles.followerLogin}>{follower.login}</p>
                  </div>)
                : <p>Нет данных</p>
         
        }
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(
  state => ({ data: state.followers.data, isLoading: state.followers.isLoading })
  )(Followers);
