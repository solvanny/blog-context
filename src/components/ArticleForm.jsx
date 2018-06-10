import React, {Component} from 'react'; 
import {Consumer} from '../store/context';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const formStyles = {
  width: '100%',
}

const inputStyles = {
  width: "50%",
  float: "left",
  margin: "1em"
}

const textareaStyles = {
  width: "50%",
  float: "left",
  margin: " 1em ",
  clear: "left"

}

const buttonStyles = {
  width: "50%",
  float: "left",
  margin: "1em",
  clear: "left"
}

class Form extends Component {
  valueForm(ev) {
    ev.preventDefault();
    let formdata = new FormData(ev.target);
    let title = formdata.get("titleValue");
    let text = formdata.get("articleText").split(/(?:\r\n|\r|\n)/g);
  
    
    if(!text.length || !title.trim()) { 
      return false;
    };
    this.props.actions.addArticle({
      id: this.props.data.id,
      date: new Date(),
      title: title,
      text: text
    });
    ev.target.reset();
  }

  render() {
      
    return(
      <div>
        <form name="form" onSubmit={this.valueForm.bind(this)} style={formStyles}>
          <Input style={inputStyles} placeholder="Title" className="input" type="text" name="titleValue" />
          <textarea style={textareaStyles} rows="6" cols="50" placeholder="Insert article" className="textarea" type="text" name="articleText" />
          <Button style={buttonStyles} variant="raised" color="primary" className="inputbutton" type="submit"> 
             Submit 
          </Button>
        </form>
      </div>
    );
  }
}


export default Consumer(Form);