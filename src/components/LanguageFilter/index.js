import React from 'react';

import { ListLanguage, ItemLanguage, ClearLanguage } from './styles'

const LanguageFilter = () => {
    const languages = [
        { title: 'javascript', count: '2', color: '#f1c40f' },
        { title: 'php', count: '5', color: '#3498db' },
        { title: 'ruby', count: '1', color: '#e74c3c' },
        { title: 'python', count: '3', color: '#2ecc71' },
        { title: 'c++', count: '2', color: '#ecf0f1' },
    ]

    const itemsLanguage = languages.map( language => {
        return <ItemLanguage key={language.title.toLowerCase()} color={language.color}>
            <span>{language.title}</span> <span>{language.count}</span>
        </ItemLanguage>
    })

    return (
        <ListLanguage>
            {itemsLanguage}
            <ClearLanguage>
                Limpar
            </ClearLanguage>
        </ListLanguage>
    )
}

export default LanguageFilter;