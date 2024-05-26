const links = [
    "https://media.tenor.com/1VApRkw1oBoAAAAi/chocolate-bar-chocolate.gif",
    "https://media.tenor.com/iegM2tfxQxQAAAAi/cute-pinky.gif",
    "https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJnY2JtbWR4dG44ejRpcmRrejRrYmZrZjQwNjM4enRoM3plMTRjaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SUQWUAqVuV9uZbALUp/giphy.gif",
    "https://media.tenor.com/O4tYWO6gThkAAAAi/magic-sporty.gif"
]

const wrap = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
const root = document.getElementById('presents');

let openComplete = links.map(() => false);

for (let i = 0; i < links.length; i++) {
    const holder = document.createElement('div');
    holder.className = 'col';
    root.appendChild(holder);
    const image = document.createElement('img');
    image.src = wrap;
    image.id = i;
    image.alt = 'a present'
    holder.appendChild(image);
    image.addEventListener('click', function openPresent() {
        image.src = links[i];
        image.removeEventListener('click', openPresent);
        openComplete[Number(i)] = true;
        if (openComplete.every(item => item)) {
            const title = document.getElementById('title');
            title.innerHTML = 'Enjoy your presents!';
        }
    })
}
