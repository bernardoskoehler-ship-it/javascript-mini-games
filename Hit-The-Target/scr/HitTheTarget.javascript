<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo</title>

    
    <style>
        h1, h2, p {
            color: white;
            text-shadow: 2px 2px 5px black;
        }
        html, body {
            height: 100%;
            margin: 0;
        }

        body {
            background-image: url("https://tse3.mm.bing.net/th/id/OIP.LaDfcTN2GKzhMTJwXPsLAQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3");
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
        h1 {
            text-align: center;
        }

        .score-container {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-left: 20px;
        }

        .score-container h2,
        .score-container p {
            margin: 0;
        }
        
        #bot1, #bot2, #bot3 {
            background-color: transparent;  
            border: none ; 
        }
        

        /*Caixas*/
        #cax1 {
            width: 500px;
            position: absolute;
            top: 500px;
            left: 1200px;
        }
        #cax2 {
            width: 500px;
            position: absolute;
            top: 500px;
            left: 700px;
        }
        #cax3 {
            width: 500px;
            position: absolute;
            top: 500px;
            left: 200px;
        }
        /**/

        /*Andre Garfield*/
        #adg1 {
            transition: top 1.5s ease;
            width: 170px;
            position: absolute;
            top: 570px;
            left: 1360px;
        }
        #adg2 {
            transition: top 1.5s ease;
            width: 170px;
            position: absolute;
            top: 570px;
            left: 860px;
        }
        #adg3 {
            transition: top 1.5s ease;
            width: 170px;
            position: absolute;
            top: 570px;
            left: 360px;
        }
        /**/

        /*Botoes*/
        #bot1 {
            height: 200px;
            width: 200px;
            position: absolute;
            top: 345px;
            left: 1350px;
        }
        #bot2 {
            height: 200px;
            width: 200px;
            position: absolute;
            top: 345px;
            left: 845px;
        }
        #bot3 {
            height: 200px;
            width: 200px;
            position: absolute;
            top: 345px;
            left: 345px;
        }
        /**/
    </style>
</head>
<body>

    <h1>Acerte o maximo de Andrew Garfields!</h1>

    <div class="score-container">
        <h2>SCORE:</h2>
        <p id="score">0</p>
    </div>

    <img id="adg1" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70a815af-18e2-450e-9260-fed350205bfd/d5jvi8y-d49d45f7-20b5-4bf0-903d-0ac14d126611.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwYTgxNWFmLTE4ZTItNDUwZS05MjYwLWZlZDM1MDIwNWJmZFwvZDVqdmk4eS1kNDlkNDVmNy0yMGI1LTRiZjAtOTAzZC0wYWMxNGQxMjY2MTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RULQQwLm7yY_1WMbK-QdFMiaUgy4WGOBBMBEE_SQDMQ">
    <img id="adg2" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70a815af-18e2-450e-9260-fed350205bfd/d5jvi8y-d49d45f7-20b5-4bf0-903d-0ac14d126611.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwYTgxNWFmLTE4ZTItNDUwZS05MjYwLWZlZDM1MDIwNWJmZFwvZDVqdmk4eS1kNDlkNDVmNy0yMGI1LTRiZjAtOTAzZC0wYWMxNGQxMjY2MTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RULQQwLm7yY_1WMbK-QdFMiaUgy4WGOBBMBEE_SQDMQ">
    <img id="adg3" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/70a815af-18e2-450e-9260-fed350205bfd/d5jvi8y-d49d45f7-20b5-4bf0-903d-0ac14d126611.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwYTgxNWFmLTE4ZTItNDUwZS05MjYwLWZlZDM1MDIwNWJmZFwvZDVqdmk4eS1kNDlkNDVmNy0yMGI1LTRiZjAtOTAzZC0wYWMxNGQxMjY2MTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RULQQwLm7yY_1WMbK-QdFMiaUgy4WGOBBMBEE_SQDMQ">
    
    <img id="cax3" src="https://2.bp.blogspot.com/-odIHD9o2LTA/UNRvW-cJ__I/AAAAAAAALgQ/W5H05D_CSMw/s1600/Imagens-em-png-Queroimagem.com+(219).png">
    <img id="cax2" src="https://2.bp.blogspot.com/-odIHD9o2LTA/UNRvW-cJ__I/AAAAAAAALgQ/W5H05D_CSMw/s1600/Imagens-em-png-Queroimagem.com+(219).png">
    <img id="cax1" src="https://2.bp.blogspot.com/-odIHD9o2LTA/UNRvW-cJ__I/AAAAAAAALgQ/W5H05D_CSMw/s1600/Imagens-em-png-Queroimagem.com+(219).png">

    <button id="bot1"></button>
    <button id="bot2"></button>
    <button id="bot3"></button>

    
    <script>
        const TOP_ALTO = 370;
        const TOP_BAIXO = 570;

        let ativo1 = false;
        let ativo2 = false;
        let ativo3 = false;

        let score = 0;

        const bot1 = document.getElementById("bot1");
        const bot2 = document.getElementById("bot2");
        const bot3 = document.getElementById("bot3");

        const adg1 = document.getElementById("adg1");
        const adg2 = document.getElementById("adg2");
        const adg3 = document.getElementById("adg3");

        document.addEventListener("click", function (e) {

            const img = document.createElement("img");
            img.src = "https://th.bing.com/th/id/R.85aa8e814f6c9c2028e939d4fc2c93b6?rik=H7kF6GrRp9v4YA&pid=ImgRaw&r=0";

            img.style.position = "absolute";
            img.style.left = e.pageX + "px";
            img.style.top = e.pageY + "px";
            img.style.width = "60px";
            img.style.transform = "translate(-50%, -50%)";
            img.style.pointerEvents = "none";

            document.body.appendChild(img);

            setTimeout(() => img.remove(), 100);
        });

        bot1.onclick = function () {
            if (!ativo1) return;
            descerADG(adg1);
            ativo1 = false;
            aumentarScore();
        };

        bot2.onclick = function () {
            if (!ativo2) return;

            descerADG(adg2);
                ativo2 = false;
                    aumentarScore();
                };

        bot3.onclick = function () {
            if (!ativo3) return;

                descerADG(adg3);
                ativo3 = false;
                aumentarScore();
                };

        function timer(adg, getAtivo, setAtivo) {
            setTimeout(() => {

            if (getAtivo()) {
            timer(adg, getAtivo, setAtivo);
            return;
        }

        subirADG(adg);
        setAtivo(true);
        timer(adg, getAtivo, setAtivo);

    }, Math.random() * 3000 + 2000);
}

        function aumentarScore() {
            score += 1;
            document.getElementById("score").textContent = score;
        }

        function subirADG(elemento) {
            elemento.style.top = TOP_ALTO + "px";
        }

        function descerADG(elemento) {
            elemento.style.top = TOP_BAIXO + "px";
        }

        timer(adg1, () => ativo1, v => ativo1 = v);
        timer(adg2, () => ativo2, v => ativo2 = v);
        timer(adg3, () => ativo3, v => ativo3 = v);
    </script>

</body>
</html>
