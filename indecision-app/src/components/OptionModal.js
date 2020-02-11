import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleClearSelectedOption}>Okay</button>
    </Modal>
)

export default OptionModal;

// !!"test" -> true
// !!undefined -> false

// Create a new event handle in IndecisionApp that clears selectedOption state
// Pass that into OptionModal
// Call it on button click