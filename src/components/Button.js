const Button = ({ children, onClick }) => {
  return <button onClick={() => onClick('Nissim')}>{children}</button>;
};

export default Button;
