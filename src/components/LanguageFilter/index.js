import React from 'react';

import { ListLanguage, ItemLanguage, ClearLanguage } from './styles'

const LanguageFilter = ({ languages, onClickFilter, currentLanguage }) => {
    const setOnClickFilter = ( language ) => {
        onClickFilter(language)
    }

    const itemsLanguage = languages.map( language => {
        return <ItemLanguage 
                    onClick={() => setOnClickFilter(language.name)} 
                    key={language.name.toLowerCase()} 
                    color={language.color}
                    className={currentLanguage === language.name ? 'selected' : ''}>
            <span>{language.name}</span> <span>{language.count}</span>
        </ItemLanguage>
    })

    return (
        <ListLanguage>
            {itemsLanguage}
            <ClearLanguage onClick={() => setOnClickFilter(undefined)}>
                Limpar
            </ClearLanguage>
        </ListLanguage>
    )
}

export default LanguageFilter;