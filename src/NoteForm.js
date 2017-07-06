import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
constructor(props){
  super(props)

  this.handleChange = this.handleChange.bind(this)
}


handleChange(ev) {

}


  render() {
    return (
      <div className="NoteForm">
        <div className="form-actions">
          <button type="button">
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
        <form>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              value={this.props.currentNote.title}
            />
          </p>
          
          <textarea 
          name="body"
          placeholder= "type your note here"
          value={this.props.currentNote.body}
          ></textarea>
         <button
                className="success button"
                type="submit"
              >
              Submit New Note
              </button>
        </form>
      </div>
    )
  }
}

export default NoteForm