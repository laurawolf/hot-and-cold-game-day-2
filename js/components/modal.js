import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import store from '../store';

export function Modal(props) {
  if (props.showInfoModal) {
    return (
        <div>
          <h3>What do I do?</h3>
          <div>
            <p>This is a Hot or Cold Number Guessing Game. The game goes like this: </p>
            <ul>
              <li>1. I pick a <strong>random secret number</strong> between 1 to 100 and keep it hidden.</li>
              <li>2. You need to <strong>guess</strong> until you can find the hidden secret number.</li>
              <li>3. You will <strong>get feedback</strong> on how close ("hot") or far ("cold") your guess is.</li>
            </ul>
            <p>So, Are you ready?</p>
            <a href="#" onClick={() => props.dispatch(actions.toggleInfoModal())}>Got It!</a>
          </div>
        </div>
    );
  }
  else {
    return (<div></div>);
  }
}

const mapStateToProps = state => ({
  showInfoModal: state.showInfoModal
})

export default connect(mapStateToProps)(Modal);
