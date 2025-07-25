function searchGitHubUser() {
  const username = document.getElementById('searchInput').value.trim();
  const resultDiv = document.getElementById('result');

  if (!username) {
    resultDiv.innerHTML = "<p>Please enter a username.</p>";
    return;
  }

  resultDiv.innerHTML = "<p>Loading...</p>";

  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("User not found");
      }
      return response.json();
    })
    .then(user => {
      resultDiv.innerHTML = `
        <img src="${user.avatar_url}" alt="Avatar" />
        <h3>${user.name || user.login}</h3>
        <p><strong>Bio:</strong> ${user.bio || "N/A"}</p>
        <p><strong>Public Repos:</strong> ${user.public_repos}</p>
        <p><strong>Followers:</strong> ${user.followers}</p>
        <p><a href="${user.html_url}" target="_blank">View Profile</a></p>
      `;
    })
    .catch(error => {
      resultDiv.innerHTML = `<p style="color: red;">${error.message}</p>`;
    });
}
