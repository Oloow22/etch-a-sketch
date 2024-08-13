const container = document.querySelector(".container");


const btn = document.querySelector("button");
// let value = 0;

btn.addEventListener("click", () => {
    let input = Number(prompt("Enter a number", 16));
    if (input >= 100) {
        alert("Enter a value less than 100 ");
    } else {
        if (container.hasChildNodes()) {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            };
            console.log("The divs removed");
            value = input * input;
            let count = 0;
            while (count < value) {
                console.log(value);
                console.log("While loop initiated 1")

                const div = document.createElement("div");
                div.style.width = "30px";
                div.style.height = "30px";
                div.style.border = "solid 2px red";
                // div.classList.add("etch");
                container.appendChild(div);

                div.addEventListener("mouseover", () => {
                    div.style.backgroundColor = "red";

                });

                div.addEventListener("mouseout", () => {
                    div.style.backgroundColor = "";

                });
                count += 1;


            };
        }
        else {
            console.log("Container empty, free to generate");
            let count = 0;
            value = input * input;
            while (count < value) {
                console.log(input);
                console.log("While loop initiated 2")

                const div = document.createElement("div");
                div.style.width = "30px";
                div.style.height = "30px";
                div.style.border = "solid 2px red";
                // div.classList.add("etch");
                container.appendChild(div);

                div.addEventListener("mouseover", () => {
                    div.style.backgroundColor = "red";

                });

                div.addEventListener("mouseout", () => {
                    div.style.backgroundColor = "";

                });
                count += 1;


            };

        }


    }


});









// const div = document.querySelector("div");


