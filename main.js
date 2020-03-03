const listRepos = async username => {
    const repos = await fetch(`http://api.github.com/users/${username}/repos?type=ownersort=updated`)
        .then(res => res.json())
        .catch(error => console.error(error))

    const markup = repos.map(repo => `
        <li>
            <a href="${repo.html_url}">${repo.name}</a>
            (:star: ${repo.stargazers_count})
    `)
    .join('')

    const content = document.getElementById('content')
    content.innerHTML = `<ul>${markup}</ul>`
}

listRepos('oipnet')