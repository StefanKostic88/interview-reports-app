import React from "react";

const OperationThree = () => {
  return (
    <div class="operations__content operations__content--3 operations__content--active">
      <div class="operations__select operations__select-search section__border">
        <div class="operations__card-info">
          <p>Candidate:</p>
          <h3>John Doe</h3>
        </div>
        <div class="operations__card-info">
          <p>Company:</p>
          <h3>Company 3</h3>
        </div>
        <form action="" class="search__form" id="contact-form">
          <div class="search__form-div">
            <label class="search__form-tag">Search</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="Search..."
              class="search__form-input"
              id="contact-name"
            />
          </div>
        </form>
      </div>
      <div class="operations__form-fill">
        <form action="" id="contact-form">
          <div class="operations__form">
            <div class="operations__form-div">
              <label for="date" class="search__form-tag">
                Interview Date:
              </label>
              <input
                type="date"
                name="date"
                required
                class="search__form-input"
                id="date"
              />
            </div>
            <div class="operations__form-div">
              <label for="tehnical" class="search__form-tag">
                Phase:
              </label>
              <select id="tehnical" name="tehnical">
                <option value="tech-2">Tehnical</option>
                <option value="tech-2">Tech 2</option>
                <option value="tech-3">Tech 3</option>
              </select>
            </div>
            <div class="operations__form-div">
              <label for="select" class="search__form-tag">
                Select:
              </label>
              <select id="select" name="select">
                <option value="passed">Passed</option>
                <option value="declined">Declined</option>
              </select>
            </div>
          </div>
          <div class="operations__form">
            <div class="operations__form-div">
              <textarea name="message" rows="10" cols="30">
                The cat was playing in the garden.
              </textarea>
            </div>
          </div>
          <div class="operations__form">
            <button class="btn-alt">BACK</button>
            <button class="btn">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OperationThree;

{
  /* <!-- CONTENT 3 --> */
}
{
  /*  */
}
