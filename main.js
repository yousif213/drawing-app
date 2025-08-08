const canvas = document.getElementById('drawing-board');
const toolbar = document.getElementById('toolbar');
const ctx = canvas.getContext('2d');

const toolbarHeight = toolbar.offsetHeight;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbarHeight;

let isPainting = false;
let lineWidth = 5;

const draw = (e) => {
    if (!isPainting) return;

    const x = e.clientX;
    const y = e.clientY - toolbarHeight;

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
};

canvas.addEventListener('mousedown', (e) => {
    isPainting = true;
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY - toolbarHeight);
});

canvas.addEventListener('mouseup', () => {
    isPainting = false;
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);
