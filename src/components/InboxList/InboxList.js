// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

const InboxList = ({ data }) => 
  <div className='content'>
    <h3 className='title' children='Inbox'/>
    <MailList data={data.inbox} path='inbox/' dir='inbox'/>
  </div>

export default withData(InboxList);