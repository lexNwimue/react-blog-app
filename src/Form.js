const Form = () => {
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form submitted");
  //   };
  return (
    <>
      <div className="container">
        <h2 className="form-header">Create a New Blog</h2>

        <form action="">
          <label htmlFor="title">Title</label>
          <br />
          <input type="text" id="title" name="title" />
          <br />
          <label htmlFor="author">Author</label>
          <br />
          <input type="text" id="author" name="author" />
          <br />
          <label htmlFor="body">Body</label>
          <textarea name="body" id="body"></textarea>
          <div className="btn-group">
            <button className="create-btn">Create</button>
            <button className="clear-btn">Clear</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
