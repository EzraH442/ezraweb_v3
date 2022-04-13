/* eslint-disable jsx-a11y/media-has-caption */
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import * as styles from '../styles/stress.module.css';

type CountdownProps = {}

const msToDHSMS = (t: number): string => {
  let time = t;
  let d = time / 86400000;
  const days = Math.floor(d); time = d - days; d = time * 24;
  const hours = Math.floor(d); time = d - hours; d = time * 60;
  const minutes = Math.floor(d); time = d - minutes; d = time * 60;
  const seconds = Math.floor(d); time = d - seconds; d = time * 60;
  const ms = Math.floor(time * 1000);

  return `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds and ${ms} ms`;
};

const CountdownPage: NextPage<CountdownProps> = () => {
  const [time, setTime] = useState(0);
  const [inverted, setInverted] = useState(false);
  const physicsIbExamDate = Date.UTC(2022, 3, 28, 13, 0, 0);
  useEffect(() => {
    setTimeout(() => { setTime(physicsIbExamDate - Date.now()); }, 5);
  });
  useEffect(() => {
    setTimeout(() => { setInverted(!inverted); }, 1200);
  }, [inverted]);

  return (
    <div className={`${styles.stress} ${inverted ? styles.inverted : ''}`}>
      <audio autoPlay loop src="/sound/Air-raid-siren.mp3" />
      <p>
        There are
        {' '}
        {msToDHSMS(time)}
        {' '}
        until Physics SL Paper 1
      </p>

    </div>
  );
};

export default CountdownPage;
