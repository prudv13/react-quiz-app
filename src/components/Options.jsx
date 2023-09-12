import React from "react";

const Options = ({question, dispatch, answer}) => {

    const hasAnwered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button 
            key={option}
            disabled={answer !== null}
            className={`btn btn-option 
                        ${index === answer ? "answer" : ""} 
                        ${hasAnwered ? 
                            index === question.correctOption ? 
                            "correct" : "wrong"
                            : ""
                        }
                    `}
            onClick={() => dispatch({type: 'newAnswer', payload: index})}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
