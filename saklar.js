function saklar() {
    let toggle1 = document.getElementById('default-toggle1');
    let toggle2 = document.getElementById('default-toggle2');
    let toggle3 = document.getElementById('default-toggle3');

    let lampu1 = document.getElementById('lampu1')
    let lampu2 = document.getElementById('lampu2')
    let lampu3 = document.getElementById('lampu3')

    if (toggle1.checked) {
        lampu1.src = "assets/images/on.gif";

    } else {
        lampu1.src = "assets/images/off.gif";
    }

    if (toggle2.checked) {
        lampu2.src = "assets/images/on.gif";
    } else {
        lampu2.src = "assets/images/off.gif";

    }
    if (toggle3.checked) {
        lampu3.src = "assets/images/on.gif";

    } else {
        lampu3.src = "assets/images/off.gif";

    }
}

function ruang_keluarga() {
    let toggle1 = document.getElementById('default-toggle1');
    let toggle2 = document.getElementById('default-toggle2');
    let toggle3 = document.getElementById('default-toggle3');
    let toggle01 = document.getElementById('default-toggle01');

    let lampu1 = document.getElementById('lampu1')
    let lampu2 = document.getElementById('lampu2')
    let lampu3 = document.getElementById('lampu3')

    if (toggle01.checked == true) {
        toggle1.checked == true
        toggle2.checked == true
        toggle3.checked == true
        if (toggle1.checked == true) {
            lampu1.src = "../assets/images/on.gif";
        } else {
            lampu1.src = "../assets/images/off.gif";
        }
        if (toggle2.checked == true) {
            lampu2.src = "../assets/images/on.gif";
        } else {
            lampu2.src = "../assets/images/off.gif";
        }
        if (toggle3.checked == true) {
            lampu3.src = "../assets/images/on.gif";

        } else {
            lampu3.src = "../assets/images/off.gif";
        }

    } else {
        toggle1.checked == false
        toggle2.checked == false
        toggle3.checked == false
        lampu1.src = "../assets/images/off.gif";
        lampu2.src = "../assets/images/off.gif";
        lampu3.src = "../assets/images/off.gif";
    }
}

function ruang_makan() {
    let toggle01 = document.getElementById('default-toggle01');
    let toggle1 = document.getElementById('default-toggle1');

    let lampu1 = document.getElementById('lampu1')

    if (toggle01.checked == true) {
        toggle1.checked == true
        if (toggle1.checked == true) {
            lampu1.src = "../assets/images/on.gif";
        } else {
            lampu1.src = "../assets/images/off.gif";
        }
    } else {
        toggle1.checked == false
        lampu1.src = "../assets/images/off.gif";
    }

}

function ruang_tidur(){
    let toggle01 = document.getElementById('default-toggle01');
    let toggle1 = document.getElementById('default-toggle1');
    let toggle2 = document.getElementById('default-toggle2');


    let lampu1 = document.getElementById('lampu1')
    let lampu2 = document.getElementById('lampu2')

    if (toggle01.checked == true) {
        toggle1.checked == true
        toggle2.checked == true
        if (toggle1.checked == true) {
            lampu1.src = "../assets/images/on.gif";
        } else {
            lampu1.src = "../assets/images/off.gif";
        }
        if (toggle2.checked == true) {
            lampu2.src = "../assets/images/on.gif";
        } else {
            lampu2.src = "../assets/images/off.gif";
        }
    } else {
        toggle1.checked == false
        toggle2.checked == false
        lampu1.src = "../assets/images/off.gif";
        lampu2.src = "../assets/images/off.gif";
    }

}

function ruang_tamu(){
    let toggle1 = document.getElementById('default-toggle1');
    let toggle2 = document.getElementById('default-toggle2');
    let toggle3 = document.getElementById('default-toggle3');
    let toggle4 = document.getElementById('default-toggle4');
    let toggle01 = document.getElementById('default-toggle01');

    let lampu1 = document.getElementById('lampu1')
    let lampu2 = document.getElementById('lampu2')
    let lampu3 = document.getElementById('lampu3')
    let lampu4 = document.getElementById('lampu4')

    if (toggle01.checked == true) {
        toggle1.checked == true
        toggle2.checked == true
        toggle3.checked == true
        toggle4.checked == true
        if (toggle1.checked == true) {
            lampu1.src = "../assets/images/on.gif";
        } else {
            lampu1.src = "../assets/images/off.gif";
        }
        if (toggle2.checked == true) {
            lampu2.src = "../assets/images/on.gif";
        } else {
            lampu2.src = "../assets/images/off.gif";
        }
        if (toggle3.checked == true) {
            lampu3.src = "../assets/images/on.gif";

        } else {
            lampu3.src = "../assets/images/off.gif";
        }
        if (toggle4.checked == true) {
            lampu4.src = "../assets/images/on.gif";

        } else {
            lampu4.src = "../assets/images/off.gif";
        }

    } else {
        toggle1.checked == false
        toggle2.checked == false
        toggle3.checked == false
        toggle4.checked == false
        lampu1.src = "../assets/images/off.gif";
        lampu2.src = "../assets/images/off.gif";
        lampu3.src = "../assets/images/off.gif";
        lampu4.src = "../assets/images/off.gif";
    }

}


