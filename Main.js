//测试 - 星数
document.querySelectorAll('.resource_card[data-repo]').forEach(card => {
  fetch(`https://api.github.com/repos/${card.dataset.repo}`)
  .then(r => r.json())
  .then(data => {
    const stars = data.stargazers_count && typeof data.stargazers_count === "number"
    ? data.stargazers_count: null;

    card.querySelector('.stars_container').textContent =
    stars ? `🌟 ${stars} Stars`: '🌟 获取失败';
  })
  .catch(() => {
    card.querySelector('.stars_container').textContent = '🌟 获取失败';
  });
});