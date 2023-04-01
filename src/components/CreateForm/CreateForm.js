import CreateFormInput from "./CreateFormInput/CreateFormInput";
import CreateFormOptions from "./CreateFormOptions/CreateFormOptions";

const CreateForm = ({
  inputArr,
  optionsArr,
  messageChangeHandler,
  messagevalue,
}) => {
  return (
    <div className="operations__form-fill">
      <form action="" id="contact-form" onSubmit={() => {}}>
        <div className="operations__form">
          {inputArr.map((input, index) => {
            if (index < 2) {
              return <CreateFormInput {...input} key={index} />;
            }
          })}
        </div>
        <div className="operations__form">
          {inputArr.map((input, index) => {
            if (index > 1 && index < 4) {
              return <CreateFormInput {...input} key={index} />;
            }
          })}
        </div>
        <div className="operations__form">
          {inputArr.map((input, index) => {
            if (index > 3 && index < 6) {
              return <CreateFormInput {...input} key={index} />;
            }
          })}
        </div>
        <div className="operations__form">
          {optionsArr.map((option, index) => (
            <CreateFormOptions {...option} key={index} />
          ))}
        </div>

        <div className="operations__form">
          <div className="operations__form-div">
            <textarea
              name="message"
              rows="10"
              cols="30"
              onChange={messageChangeHandler}
              value={messagevalue}
            >
              Notes
            </textarea>
          </div>
        </div>
        <div className="operations__form">
          <button className="btn-alt" onClick={() => () => {}}>
            BACK
          </button>
          <button className="btn">SUBMIT</button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
