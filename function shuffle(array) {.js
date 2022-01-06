<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
function shuffle(array) {
    var currentIndex = array.length,
        randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}

function spin() {

  
    wheel.play();

    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    let Gift1 = shuffle([1890, 2250, 2610]);
    let Gift2 = shuffle([1850, 2210, 2570]); 
    let Gift3 = shuffle([1810, 2170, 2530]);
    let Gift4 = shuffle([1770, 2130, 2490]);


    let User = shuffle([
        Gift1[0],
        Gift2[0],
        Gift3[0],
        Gift4[0],
        
    ]);
    

    // get the value of selected item
    if (Gift1.includes(User[0])) SelectedItem = "Magic Roaster";
    if (Gift2.includes(User[0])) SelectedItem = "Sepeda Aviator";
    if (Gift3.includes(User[0])) SelectedItem = "Rice Cooker Philips";
    if (Gift4.includes(User[0])) SelectedItem = "Lunch Box Lock&Lock";

    // spin
    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + User[0] + "deg)";
    element.classList.remove("animate");
    setTimeout(function () {
        element.classList.add("animate");
    }, 5000);

    // alert
    setTimeout(function () {
        applause.play();
        swal(
            "Congratulations",
            "You Won The " + SelectedItem + ".",
            "success"
        );
    }, 5500);

    // delay
    setTimeout(function () {
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
}