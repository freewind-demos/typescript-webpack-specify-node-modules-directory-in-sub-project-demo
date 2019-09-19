import React from 'react';
import WeekPicker from '../week-picker/src/WeekPicker/WeekPicker';

export default function Hello() {
  return <WeekPicker defaultDate={new Date()} onSelectWeekStartDate={date => console.log(date)}/>
};
