import React from 'react';
import { Container, Box, BoxTitle, BoxDescription, BoxFooter, BoxLink } from './styles';

const Repositories = () => {
    const repositories = [
        { name: 'api-github-training', description: 'Repositório para treinar a criação de um consumo de api do github', language: 'javascript', color: '#f1c40f'},
        { name: 'python-login', description: 'Repositório para login em python', language: 'python', color: '#2ecc71' },
        { name: 'sga-rails', description: 'Repositório do Sistema de Gerenciamento Acadêmico em Rails', language: 'ruby', color: '#e74c3c' },
        { name: 'cra-template-basic', description: 'Template básico para projetos ReactJS', language: 'javascript', color: '#f1c40f'  },
        { name: 'jif-django', description: 'Framework Django para JIF', language: 'python', color: '#2ecc71' },
    ]

    const repositoryBoxes = repositories.map(repository => {
        return (<Box key={repository.name} color={repository.color}>
            <BoxTitle>{repository.name}</BoxTitle>
            <BoxDescription>{repository.description}</BoxDescription>
            <BoxFooter color={repository.color}>
                <span>{repository.language}</span> 
                <BoxLink color={repository.color} href={repository.link} targe='_blank'><strong>VER</strong></BoxLink>
            </BoxFooter>
        </Box>)
    })
    return (<Container>
        {repositoryBoxes}
    </Container>)
}

export default Repositories;
