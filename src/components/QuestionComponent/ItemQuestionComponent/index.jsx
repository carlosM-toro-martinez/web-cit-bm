import React, { useState } from 'react';
import ItemQuestionComponentStyles from './ItemQuestionComponent.styles';

function ItemQuestionComponent({ question, answer }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
    return (
        <ItemQuestionComponentStyles>
            <li>
                <div className={`collapsed question ${isCollapsed ? '' : 'active'}`} onClick={toggleCollapse}>
                    {question}
                    <i className={`bi bi-chevron-down ${isCollapsed ? '' : 'icon-show'} `}></i>
                    <i className={`bi bi-chevron-up ${!isCollapsed ? '' : 'icon-close'} `}></i>
                </div>
                <div className={`collapse ${isCollapsed ? '' : 'show'}`}>
                    <p>{answer}</p>
                </div>
            </li>

        </ItemQuestionComponentStyles>
    )
}

export default ItemQuestionComponent;