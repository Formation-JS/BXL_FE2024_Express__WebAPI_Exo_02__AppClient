import { useState } from 'react';
import style from './guestbook.module.css';
import { useEffect } from 'react';
import clsx from 'clsx';


export default function GuestbookDetail({ data }) {

  const [hideMessage, setHideMessage] = useState(true);
  useEffect(() => {
    if(!hideMessage) {
      setHideMessage(true);
    }
  }, [data])

  const sendDateFormatted = data.sendDate.toLocaleString("fr-BE", {
    timeZone: "UTC",
    timeStyle: "short",
    dateStyle: "short"
  });

  const isHidden = data.hasSpoiler && hideMessage;

  return (
    <div className={style['detail']}>
      <p className={style['info']} >
        <span className={style['author']}>{data.author}</span>
        <span className={style['date']}>{sendDateFormatted}</span>
      </p>
      {isHidden ? (
        <p className={clsx(style['msg'], style['hide'])} onClick={() => setHideMessage(false)}>
          {[...data.message].map(((letter, idx) => (
            <span key={idx} className={clsx(/\S/.test(letter) && style['letter'])}></span>
          )))}
        </p>
      ) : (
        <p className={style['msg']}>{data.message}</p>
      )}
    </div>
  );
}
