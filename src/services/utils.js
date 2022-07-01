import { languagesColors } from './config';

export const getLanguagesFromRepositories = (repositories) => {
    let languagesFromRepositories = repositories
                                    .map(repository => repository.language)
                                    .reduce((data, language) => (
                                        {
                                            ...data,
                                            [language]: (data[language] || 0) + 1
                                        }
                                    ), [])

    delete languagesFromRepositories.null

    languagesFromRepositories = Object.keys(languagesFromRepositories)
                                .map((language) => (
                                    {
                                        name: language,
                                        count: languagesFromRepositories[language],
                                        color: languagesColors[language.toLowerCase()]
                                    })
                                ).sort((a, b) => a.count - b.count);

    return languagesFromRepositories;
};