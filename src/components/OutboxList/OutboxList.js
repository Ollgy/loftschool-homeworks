// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.
import React from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

const OutboxList = ({ data }) => 
    <MailList data={data.outbox} path='outbox/' dir='outbox'/>

export default withData(OutboxList);