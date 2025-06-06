document.getElementById('submit').addEventListener('click', function () {
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const isbn = document.getElementById('isbn').value.trim();

  if (title && author && isbn) {
    const tbody = document.getElementById('book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${title}</td>
      <td>${author}</td>
      <td>${isbn}</td>
      <td><button class="delete">Clear</button></td>
    `;

    tbody.appendChild(row);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
});

document.getElementById('book-list').addEventListener('click', function (e) {
  if (e.target && e.target.classList.contains('delete')) {
    e.target.closest('tr').remove();
  }
});
