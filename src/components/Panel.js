const Panel = ({ children, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

export default Panel;
