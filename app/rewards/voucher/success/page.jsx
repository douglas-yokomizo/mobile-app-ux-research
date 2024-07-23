const SuccessPage = ({ message, nextRoute, buttonText }) => {
  return (
    <div className="success-page-container">
      <h1>Success!</h1>
      <p>{message}</p>
      <div to={nextRoute}>
        <button>{buttonText}</button>
      </div>
    </div>
  );
};

export default SuccessPage;
