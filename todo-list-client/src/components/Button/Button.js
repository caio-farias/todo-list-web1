import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.scss';

const Button = ({
  modifier = 'common',
  disabled = false,
  type = 'button',
  children,
  ...props
}) => (
  <button
    disabled={disabled}
    className={`button button--${modifier}`}
    type={type}
    {...props}
  >
    {children}
  </button>
);

const ReturnButton = ({ path, ...props }) => {
  const history = useHistory();
  return (
    <button
      className=" button button--return-button"
      onClick={() => history.push({ pathname: path })}
      {...props}
    />
  );
};

export default Button;
export { ReturnButton };
