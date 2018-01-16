import React, { Component} from 'react';
import PropTypes from 'prop-types';

export class Question extends Component {

    render () {
        let {textQuestion, changeCounterTrue, changeCounterQuestion, children} = this.props;
        return (
            <div>
                <p className="Question" > 
                  {textQuestion}  
                </p>
                {
                    React.Children.map(children,
                        (ChildrenItem)=>{
                            if (ChildrenItem.props.correct !== undefined) {
                                return React.cloneElement(ChildrenItem,{
                                    afterAnswer: changeCounterTrue
                                })
                            }
                            else {
                                return React.cloneElement(ChildrenItem,{
                                    afterAnswer: changeCounterQuestion
                                })
                            }
                    })
                }
            </div>

        )

    }
}


export const Answer = ({textAnswer, afterAnswer}) => {
    
            return (    
                <div>
                    <div className="Answer" onClick={afterAnswer}>
                        {textAnswer}
                    </div> 
                </div>
    
            )
    
        }


Question.propTypes = {
    textQuestion: PropTypes.string.isRequired,
    changeCounterTrue: PropTypes.func.isRequired,
    changeCounterQuestion: PropTypes.func.isRequired,
    children: PropTypes.array.isRequired
};