# Github user activity

This is simple command-line interface (CLI) project for to fetch the recent activity of a GitHub user

## Installation 

Clone the repository and navigate into the project directory:

```bash
git clone https://github.com/nick-0037/Github-user-activity.git
cd task-tracker-cli
npm install
```

## Usage

To run the application, use the following command in the terminal:

```bash
node index.js <github-username> [event-type]
```
- \<github-username\>: The GitHub username whose activity you want to query
- [event-type]: (Optional) You can filter events by type. Event types may include: PushEvent,
  IssueCommentEvent, PullRequestEvent, etc.

### Example

To fetch recent activity for a GitHub user:

```bash
node index.js kamranahmedse
```

To filter events by type (for example, only "PushEvent" events):

```bash
node index.js kamranahmedse PushEvent
```

### Expected Ouput

The output will be something like:

```bash
Pushed 3 commits to kamranahmedse/developer-roadmap
Opened a new issue in kamranahmedse/developer-roadmap
Starred kamranahmedse/developer-roadmap
```

### Error handling

- If no username is provided, the following message will be displayed:
  ```bash
  Please, providea GitHub username
  ```

- If there is an error fetching the user's activity, an error message wiht status code will be shown
