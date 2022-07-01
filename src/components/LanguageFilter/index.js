import React from 'react';

import { ListLanguage, ItemLanguage, ClearLanguage } from './styles'

const LanguageFilter = ({languages}) => {
    const itemsLanguage = languages.map( language => {
        return <ItemLanguage key={language.name.toLowerCase()} color={language.color}>
            <span>{language.name}</span> <span>{language.count}</span>
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