function allowDrop(e) {
  e.preventDefault();
}

function drag(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function drop(e) {
  e.preventDefault();
  const cardId = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(cardId);
  
  // Ensure dropping inside the column container
  const targetColumn = e.target.closest('.column');
  if (targetColumn) {
    targetColumn.appendChild(card);
  }
}