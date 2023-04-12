import { Accordion, Container } from "react-bootstrap";
import "./index.scss";
import PropTypes from "prop-types";

const AccordionItem = ({
  accordionEventKey,
  accordionItemQuestionNumber,
  accordionItemQuestion,
  accordionItemText,
}) => {
  return (
    <>
      <Accordion.Item eventKey={`${accordionEventKey}`}>
        <Container>
          <Accordion.Header className="m-3">
            <p className="questionBlock__numeration">
              {accordionItemQuestionNumber}
            </p>
            <p className="questionBlock__title">{accordionItemQuestion}</p>
          </Accordion.Header>
        </Container>
        <Container>
          <Accordion.Body>
            <Container>
              <p className="questionBlock__content m-3">{accordionItemText}</p>
            </Container>
          </Accordion.Body>
        </Container>
      </Accordion.Item>
    </>
  );
};

AccordionItem.propTypes = {
  accordionEventKey: PropTypes.string.isRequired,
  accordionItemQuestionNumber: PropTypes.string.isRequired,
  accordionItemQuestion: PropTypes.string.isRequired,
  accordionItemText: PropTypes.string.isRequired,
};

export default AccordionItem;
