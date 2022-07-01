import React from 'react';
import { Container, Box, BoxTitle, BoxDescription, BoxFooter, BoxLink } from './styles';

import { languagesColors } from '../../services/config';

const Repositories = ({ repositories }) => {
    repositories = repositories.map(repository => (
        {
            name: repository.name,
            description: repository.description,
            language: (repository.language ? repository.language : ''),
            link: repository.html_url,
            color: (repository.language ? languagesColors[repository.language.toLowerCase()] : '')
        }
    )).sort((a, b) => a['language'].toLowerCase() > b['language'].toLowerCase() ? 1 : -1)

    console.log(repositories)

    

    const repositoryBoxes = repositories.map(repository => {
        return (<Box key={repository.name} color={repository.color}>
            <BoxTitle>{repository.name}</BoxTitle>
            <BoxDescription>{repository.description}</BoxDescription>
            <BoxFooter color={repository.color}>
                <span>{repository.language}</span> 
                <BoxLink color={repository.color} href={repository.link} target='_blank'><strong>VER</strong></BoxLink>
            </BoxFooter>
        </Box>)
    })
    return (<Container>
        {repositoryBoxes}
    </Container>)
}

export default Repositories;
