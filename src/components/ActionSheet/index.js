import React from 'react';
import { strings } from '../../strings';
import './ActionSheet.css';

const { close } = strings.fa;

const ActionSheet = ({ actions, isOpen, setIsOpen }) => {
  const toggleActionSheet = () => {
    setIsOpen(false);
  };

  return (
    <div className={`action-sheet ${isOpen ? 'open' : 'closed'}`}>
      {isOpen && (
        <>
          <button
            className="action-sheet-button"
            onClick={toggleActionSheet}
          >
            {close}
          </button>
          <ul className="action-sheet-menu">
            {actions.map((action, index) => (
              <span
                key={index}
                onClick={action.onClick}
              >
                {action.label}
              </span>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default ActionSheet;
