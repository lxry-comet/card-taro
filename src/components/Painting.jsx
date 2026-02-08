import PropTypes from 'prop-types';

export default function Painting({
  url,
  title,
  author = "не відомо",
  profileUrl,
  price,
  quantity
})
{

  return <div>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>Автор: <a href={profileUrl}>{author}</a></p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: {quantity < 10 ? "закінчується" : "є у наявності"}</p>
    <button type="button">Додати до кошику</button>
  </div>
};
