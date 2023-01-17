export function rectangularCollision(rect1, rect2) {
  return (
    rect1.position.x + rect1.width >= rect2.position.x &&
    rect1.position.x <= rect2.position.x + rect2.width &&
    rect1.position.y + rect1.height >= rect2.position.y &&
    rect1.position.y <= rect2.position.y + rect2.height
  );
}

export function doorCollision(player, door) {
  return (
    player.position.x >= door.position.x &&
    player.position.x + player.width <= door.position.x + door.width &&
    player.position.y >= door.position.y &&
    player.position.y + player.height <= door.position.y + door.height
  );
}
