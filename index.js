function ColorTilesGame(props) {
    var lastSelectedElement, 
        tiles = document.querySelectorAll(props.componentSelector + ' li>div');
    document.getElementById('square').addEventListener('click', function(e) {
        if (e.target.nodeName === 'DIV') {
            tileClick(e.target);
        }
    }, false);

    function tileClick(tile) {

        hightlightTile(tile);

        if (!lastSelectedElement) {
            lastSelectedElement = tile;
            return false;
        }

        if (checkIsTheSame(tile)) {
            setTimeout(function () {
                //lastSelectedElement.style.opacity = "0";
                //tile.style.opacity = "0";
                document.querySelector("h2").innerHTML = "You win!!! Elements have the same color! Try again!";
            }, 1500);
            setTimeout(tryAgain, 4000);
        } else {
            setTimeout(function () {
                //lastSelectedElement.style.opacity = "0";
                //tile.style.opacity = "0";
                document.querySelector("h2").innerHTML = "Sorry! Different tiles! Try again!";
            }, 1500);
            setTimeout(tryAgain, 4000);
        }
    }

    function checkIsTheSame(tile) {
        return lastSelectedElement.dataset.colorName === tile.dataset.colorName;
    }

    function hightlightTile(tile) {
        tile.style.backgroundColor = tile.dataset.colorName;
    }

    function tryAgain() {
        for (var i = 0; i < tiles.length; i++) {
            tiles[i].style.backgroundColor = '';
            document.querySelector("h2").innerHTML = "Please select two another random tiles";
        }

        lastSelectedElement = null;
    }
}