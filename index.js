const https = require('https')

const username = process.argv[2]

if(!username) {
  console.log('Please, provide a github username')
  process.exit(1)
}

const url = `https://api.github.com/users/${username}/events`

const options = {
  headers: {
    'User-Agent': 'nodejs'
  }
}

https.get(url, options, (res) => {
  let data = ''

  res.on('data', (chunk) => {
    data += chunk
  })

  res.on('end', () => {
    if(res.statusCode == 200) {
      const events = JSON.parse(data)

      events.slice(0, 5).forEach((event) => {
        switch(event.type) {
          case 'PushEvent':
            console.log(`Pushed ${event.payload.commits.length} commits to ${event.repo.name}`)
            break
          case 'IssueCommentEvent':
              console.log(`Opened a new issue in ${event.repo.name}`)
            break
          case 'PullRequestEvent': 
            console.log(`Starred ${event.repo.name}`)
            break
          default: 
            break
        }
      });
    } else {
      console.log(`Error: Could not get user activity. Status ${res.statusCode}`)
    }
  })
}).on('error', (err) => {
  console.error(`Error: ${err.message}`)
})