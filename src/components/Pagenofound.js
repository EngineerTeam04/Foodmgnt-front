const Pagenotfound = () => {
  return (
    <div>
      <h1 className="text-center fw-bold loader">
        Invalid URL
        <span
          className="spinner-grow spinner-grow-sm text-danger me-1"
          role="status"
          aria-hidden="true"
        ></span>
        <span
          className="spinner-grow spinner-grow-sm text-success me-1"
          role="status"
          aria-hidden="true"
        ></span>
        <span
          className="spinner-grow spinner-grow-sm text-primary me-1"
          role="status"
          aria-hidden="true"
        ></span>
      </h1>
    </div>
  );
};
export default Pagenotfound;
