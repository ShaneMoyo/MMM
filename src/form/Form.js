import React, { Component } from 'react';
import {
  Label,
  Control,
  Field,
  Icon,
  Help,
  Inout,
  Checkbox,
  Select,
  TextArea,
  Input,
  Radio,
  Button
} from 'bloomer';

class Form extends Component {

  onSubmit = event => {
    event.preventDefault();
    const { elements } = event.target;
    console.log('elements targeting', elements['name input'].value)
  }

  render(){
    return(
        <div>
          <form onSubmit={ event => this.onSubmit(event) }>
          <Field>
            <Label>Name</Label>
            <Control>
              <Input name='name input' type="text" placeholder='Text Input'/>
            </Control>
          </Field>

          <Field>
            <Label>Username</Label>
              <Control hasIcons>
                <Input isColor='success' placeholder='Text Input' />
                  <Icon isSize='small' isAlign='left'>
                    <span className="fa fa-user" aria-hidden="true" />
                  </Icon>
                <Icon isSize='small' isAlign='right'>
                  <span className="fa fa-check" aria-hidden="true" />
                </Icon>
              </Control>
            <Help isColor='success'>This username is available</Help>
          </Field>

          <Field>
            <Label>Select:</Label>
              <Control>
                <Select>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </Select>
              </Control>
          </Field>

          <Field>
            <Label>Document</Label>
              <Control>
                <TextArea placeholder={'<TextArea />'} />
              </Control>
          </Field>

          <Field>
            <Control>
              <Checkbox> I agree </Checkbox>
            </Control>
          </Field>

          <Field>
            <Control>
              <Radio name="question"> Yes </Radio>
              <Radio name="question"> No </Radio>
            </Control>
          </Field>

          <Field isGrouped>
            <Control>
              <Input type="submit" />
            </Control>
            <Control >
              <Button isLoading></Button>
            </Control>
          </Field>
          </form>
        </div>
    );
  }
}

export default Form 