const images = document.querySelectorAll('img');
const object = {
    1: "https://media.tenor.com/1VApRkw1oBoAAAAi/chocolate-bar-chocolate.gif",
    2: "https://media.tenor.com/iegM2tfxQxQAAAAi/cute-pinky.gif",
    3: "https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif",
    4: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJnY2JtbWR4dG44ejRpcmRrejRrYmZrZjQwNjM4enRoM3plMTRjaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SUQWUAqVuV9uZbALUp/giphy.gif",
    5: "https://media.tenor.com/O4tYWO6gThkAAAAi/magic-sporty.gif"
}

let openComplete = [false, false, false, false, false]

images.forEach(image => image.addEventListener('click',
    function openPresent(event) {
        const image = event.target
        const id = image.id
        image.src = object[id];
        image.removeEventListener('click', openPresent);
        openComplete[Number(id)-1] = true
        if (openComplete.every(item => item)) {
            const title = document.getElementById('title');
            title.innerHTML = 'Enjoy your presents!';
        }

    }
));


