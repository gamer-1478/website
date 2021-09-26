import React from 'react';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

function DetailButton(props) {

  if (typeof (props.path) != 'undefined' && props.path.length > 0) {
    return (
      <button onClick={() => { openInNewTab(props.path) }}>
        Details
      </button>
    );
  }
  else {
    return (<></>)
  }
}

function DeployButton(props) {

  if (typeof (props.path) != 'undefined' && props.path.length > 0) {
    return (
      <button onClick={() => { openInNewTab(props.path) }}>
        Deployed Project
      </button>
    );
  }
  else {
    return (<></>)
  }
}

function SourceButton(props) {

  if (typeof (props.path) != 'undefined' && props.path.length > 0) {
    return (
      <button onClick={() => { openInNewTab(props.path) }}>
        Source Code
      </button>
    );
  }
  else {
    return (<></>)
  }
}

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>

          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Projects'
              src={props.img_src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>

            <DeployButton path={props.deploy}/>
            <SourceButton path={props.source}/>
            <DetailButton path={props.path} />
          </div>
        </div>
      </li>

    </>
  );
}

export default CardItem;