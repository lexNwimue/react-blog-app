const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const title = document.getElementById("title").value;
    // const body = document.getElementById("body").value;
  };
  return (
    <>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Enter blog title"
      />
      <br />
      <label htmlFor="body">Title</label>
      <textarea
        name="body"
        id=""
        cols="30"
        rows="10"
        placeholder="Enter article here..."
      ></textarea>

      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </>
  );
};

export default Form;
