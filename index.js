function ColorTilesGame(props) {
    var lastSelectedElement, 
        tiles = document.querySelectorAll(props.componentSelector + ' li>div'),
        tilesLi = document.querySelectorAll(props.componentSelector + ' li'),
        masTiles = [],
        countLoop = 0;
    document.getElementById('btn').addEventListener('click', function() {
        for (var i = 0; i < tiles.length; i++) {
            tiles[i].style.backgroundColor = '';
            document.querySelector("h2").innerHTML = "Please select two random tiles";
            tiles = document.querySelectorAll(props.componentSelector + ' li>div'),
            tilesLi = document.querySelectorAll(props.componentSelector + ' li'),
            countLoop = 0;
        }    
    }, false);
    document.getElementById('square').addEventListener('click', function(e) {
        if (e.target.nodeName === 'DIV') {
            tileClick(e.target);
        }
    }, false);

    // Початок функції при кліку
    function tileClick(tile) {

        hightlightTile(tile);

        if (!lastSelectedElement) {
            lastSelectedElement = tile;
            return false;
        }

        if (checkIsTheSame(tile)) {
            setTimeout(function () {
                document.querySelector("h2").innerHTML = "You win!!! Elements have the same color!";
            }, 1500);
            setTimeout(function () {
                document.querySelector("h2").innerHTML = "Please select next two random tiles";
            }, 2500);
            lastSelectedElement = null;
            
            // Початок коду підрахунку збігів кольорів плиток
            countLoop = countLoop + 1;
            if (countLoop == tiles.length / 2){
                setTimeout(function () {
                    document.querySelector("h2").innerHTML = "VICTORY!!! You have passed the whole game";
                }, 2500);
            }
            // Кінець коду підрахунку збігів кольорів плиток
            
        } else {
            setTimeout(function () {
                document.querySelector("h2").innerHTML = "Sorry! Different colors of tiles! Try again!";
            }, 1500);
            setTimeout(tryAgain, 2500);
        }
        
    }

    function checkIsTheSame(tile) {
        return lastSelectedElement.dataset.colorName === tile.dataset.colorName;
    }

    function hightlightTile(tile) {
        tile.style.backgroundColor = tile.dataset.colorName;
    }

    // Початок функцій рандомізації тайлів
    function saveMas() {
        for (var i = 0; i < tilesLi.length; i++) {
          masTiles[i] = tilesLi[i];
        }
        return masTiles;
    }

    function shuffle() {
        saveMas();
        masTiles.sort(function() {
            return .5 - Math.random();
        });
        return masTiles;
    }

    function returnMas () {
        shuffle();
        document.getElementById("square") <= "";    
        for (var i = 0; i < masTiles.length; i++) {
            document.getElementById("square").appendChild(masTiles[i]);
            masTiles[i].style.marginRight = "4px";
        }
    }
    // Кінець функцій рандомізації тайлів

    function tryAgain() {
        for (var i = 0; i < tiles.length; i++) {
            tiles[i].style.backgroundColor = '';
            document.querySelector("h2").innerHTML = "Please select two another random tiles";
            returnMas();
        }
        
        lastSelectedElement = null;
    }
    // Кінець функції при кліку
}