const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "yellow" }}
      onClick={onClick}
    />
  );
};

export default NextArrow;
