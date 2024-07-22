import styled from "styled-components";

const Label = styled.label`
  font-size: 18px;
  line-height: 32px;
  text-transform: uppercase;
  color: rgb(180, 180, 185);
`;
const Inp = styled.input`
  padding: 1rem;
  border: 1px solid #f1f1f1;
  border-radius: 10px;
  outline-color: rgb(110, 110, 255);
  width: 20rem;
  font-size: 16px;
  line-height: 21px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;
const Input = styled.textarea`
  font-size: 16px;
  line-height: 21px;
  border-radius: 10px;
  padding: 1rem;
  border: 1px solid #f1f1f1;
  outline-color: rgb(110, 110, 255);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;
const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  background: #fff;
  border-radius: 10px;
  padding: 3rem;
  gap: 3rem;
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2), -2px -2px 3px rgba(0, 0, 0, 0.2);
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Msg = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  grid-column: span 2;
`;
const Btn = styled.button`
  font-weight: 500;
  font-size: 15px;
  line-height: 21px;
  background-color: #685dd8;
  color: #fff;
  padding: 0.7rem 1rem;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

function ContactForm() {
  return (
    <div>
      <Form action="">
        <Box>
          <Label htmlFor="">name:</Label>
          <Inp
            type="text"
            name=""
            id=""
            placeholder="Your full name..."
            required
          />
        </Box>
        <Box>
          <Label htmlFor="">email:</Label>
          <Inp
            type="email"
            name=""
            id=""
            placeholder="Your email..."
            required
          />
        </Box>
        <Box>
          <Label htmlFor="">Contact No:</Label>
          <Inp
            type="text"
            name=""
            id=""
            placeholder="Whatsapp Contact number..."
            required
          />
        </Box>
        <Box>
          <Label htmlFor="">Your Company: </Label>
          <Inp
            type="text"
            name=""
            id=""
            placeholder="Company name..."
            required
          />
        </Box>
        <Msg>
          <Label htmlFor="">Your Query: </Label>
          <Input
            name=""
            id=""
            placeholder="Your Message or requirements..."
            required
          ></Input>
        </Msg>
        <Msg>
          <Btn type="submit">Submit</Btn>
        </Msg>
      </Form>
    </div>
  );
}

export default ContactForm;
