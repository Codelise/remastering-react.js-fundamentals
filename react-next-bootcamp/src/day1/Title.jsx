// Mini Challenge

// Objective: Create a component that renders a heading using text passed via props.
// Acceptance Criteria
// <Title text="Hello" /> renders <h2>Hello</h2>.
// Uses props (no hardcoded text).
// Styled via plain CSS file (in day1.css).

import "./day1.css";
const Title = ({ text }) => {
  // Title component as arrow function
  // { text } as props
  return (
    <>
      <h2 className="d1-title">{text}</h2>
      {/* {text} so we can put text in Appjsx like <Title text="shit"></Title> */}
      {/* // the {text} props can we reused as many as we want */}
    </>
  );
};

export default Title;
// to export Title component and can be reused by other files
