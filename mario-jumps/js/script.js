const pipe = document.querySelector(".pipe");
const mario = document.querySelector(".mario");
const cloud = document.querySelector(".clouds");
const key = document.querySelector(".key");
const uh = new Audio('sounds/uh.mp3');
let restart = false;

const jump = () => {
    mario.classList.add("jump");
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

document.addEventListener("keydown", function () {
    pipe.style = ``;
    cloud.style = ``;
    mario.style = ``;
    mario.src = "./images/mario-running.gif";
    mario.style.width = "150px";
    key.style.display = 'none';

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");
        const cloudPosition = cloud.offsetLeft;

        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100)
        {
            uh.play();

            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            cloud.style.animation = 'none';
            cloud.style.left = `${cloudPosition}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;

            mario.src = "./images/game-over.png";
            mario.style.width = "75px";
            mario.style.marginLeft = "50px";

            key.style.display = 'block';
            key.innerHTML = 'Utilize qualquer tecla para pular os obstáculos e a pressione para recomeçar! ';

            restart = true;

            clearInterval(loop);
        }
        else if (pipePosition <= 121 && marioPosition > 80)
        {
            mario.src = "./images/mario-catching-mushroom.gif";
            mario.style.width = "130px";
        }
        else
        {
            mario.src = "./images/mario-running.gif";
            mario.style.width = "150px";
        }
    }, 10);

    pipe.style.animation = 'pipe-animation 1.7s infinite linear';
    cloud.style.animation = 'clouds-animation 20s infinite linear';
    jump();
});
