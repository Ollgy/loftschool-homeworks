import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    const { user, isLoading } = this.props;
    
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return (
      <div>
        {
          isLoading
            ? <p>Данные загружаются</p>
            : user.id
                ? <div className={styles.root}>
                    <div className={styles.imageWrapper}>
                      <img className={styles.image} src={user.avatar_url} alt={user.login}/>
                    </div>
                    <span>
                      <p className='t-user-name'>{user.name}</p>
                      <p className='t-user-bio'>{user.bio}</p>
                    </span>
                  </div>
                  : <p>Нет данных</p>
         
        }
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(state => ({ user: state.user.data, isLoading: state.user.isLoading }))(UserInfo);
