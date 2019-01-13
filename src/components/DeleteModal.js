import React from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { startRemoveExpense } from '../actions/expenses';
import { closeModal }  from '../actions/modal';

export class DeleteModal extends React.Component {
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.closeModal();
    this.props.history.push('/');
  };
  onClose = () => {
    this.props.closeModal();
  }
  render() {
    return (
      <Modal
        ariaHideApp={false}
        shouldCloseOnOverlayClick={true}
        isOpen={ this.props.isOpen }
        contentLabel="Delete Expense"
        closeTimeoutMS={200}
        className="modal"
      >
        <h3 className="modal__title">Confirm Delete Expense</h3>
        <button className="button" onClick={ this.onClose } >Close</button>
        <button className="button--danger" onClick={ this.onRemove } >Delete Expense</button>
      </Modal>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    isOpen: state.modal.isOpen
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data)),
  closeModal: () => dispatch(closeModal())
});



export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
