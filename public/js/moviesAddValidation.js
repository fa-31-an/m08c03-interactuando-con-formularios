const QS = element => document.querySelector(element);

window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//    

    let $titleInput = QS("#title"),
        $titleError = QS("#titleError"),
        $ratingInput = QS("#rating"),
        $ratingError = QS("#ratingError"),
        $awardsInput = QS("#awards"),
        $awardsError = QS("#awardsError"),
        $lengthInput = QS("#length"),
        $lengthError = QS("#lengthError"),
        $releaseDate = QS("#release_date"),
        $releaseDateError = QS("#release_dateError"),
        $genreId = QS("#genre_id"),
        $genreIdError = QS("#genre_idError"),
        $btn = QS(".botonAgregar")

    $titleInput.onblur = () => {
        switch (true) {
            case !$titleInput.value.trim():
                $titleInput.classList.remove("is-valid");
                $titleInput.classList.add("is-invalid");
                $titleError.classList.remove("is-valid");
                $titleError.classList.add("is-invalid");
                $titleError.innerText = "Ingrese un título";
                break;
            default:
                $titleInput.classList.remove("is-invalid");
                $titleInput.classList.add("is-valid");
                $titleError.classList.remove("is-invalid");
                $titleError.classList.add("is-valid");
                $titleError.innerText = "Título";
                break;
        };
    };

    $ratingInput.onblur = () => {
        switch (true) {
            case !$ratingInput.value.trim():
                $ratingInput.classList.remove("is-valid");
                $ratingInput.classList.add("is-invalid");
                $ratingError.classList.remove("is-valid");
                $ratingError.classList.add("is-invalid");
                $ratingError.innerText = "Ingrese un rating";
                break;
            case (0 > $ratingInput.value.trim() || $ratingInput.value.trim() > 10):
                $ratingInput.classList.remove("is-valid");
                $ratingInput.classList.add("is-invalid");
                $ratingError.classList.remove("is-valid");
                $ratingError.classList.add("is-invalid");
                $ratingError.innerText = "Califique entre 0 y 10";
                break;
            default:
                $ratingInput.classList.remove("is-invalid");
                $ratingInput.classList.add("is-valid");
                $ratingError.classList.remove("is-invalid");
                $ratingError.classList.add("is-valid");
                $ratingError.innerText = "Calificación";
                break;
        };
    };

    $awardsInput.onblur = () => {
        switch (true) {
            case !$awardsInput.value.trim():
                $awardsInput.classList.remove("is-valid");
                $awardsInput.classList.add("is-invalid");
                $awardsError.classList.remove("is-valid");
                $awardsError.classList.add("is-invalid");
                $awardsError.innerText = "Ingrese los premios";
                break;
            case (0 > $awardsInput.value.trim() || $awardsInput.value.trim() > 10):
                $awardsInput.classList.remove("is-valid");
                $awardsInput.classList.add("is-invalid");
                $awardsError.classList.remove("is-valid");
                $awardsError.classList.add("is-invalid");
                $awardsError.innerText = "Ingrese entre 0 y 10";
                break;
            default:
                $awardsInput.classList.remove("is-invalid");
                $awardsInput.classList.add("is-valid");
                $awardsError.classList.remove("is-invalid");
                $awardsError.classList.add("is-valid");
                $awardsError.innerText = "Premios";
                break;
        };
    };

    $lengthInput.onblur = () => {
        switch (true) {
            case !$lengthInput.value.trim():
                $lengthInput.classList.remove("is-valid");
                $lengthInput.classList.add("is-invalid");
                $lengthError.classList.remove("is-valid");
                $lengthError.classList.add("is-invalid");
                $lengthError.innerText = "Ingrese la duración";
                break;
            case (60 > $lengthInput.value.trim() || $lengthInput.value.trim() > 360):
                $lengthInput.classList.remove("is-valid");
                $lengthInput.classList.add("is-invalid");
                $lengthError.classList.remove("is-valid");
                $lengthError.classList.add("is-invalid");
                $lengthError.innerText = "Ingrese una duración entre 60 y 360 minutos";
                break;
            default:
                $lengthInput.classList.remove("is-invalid");
                $lengthInput.classList.add("is-valid");
                $lengthError.classList.remove("is-invalid");
                $lengthError.classList.add("is-valid");
                $lengthError.innerText = "Duración";
                break;
        };
    };

    $releaseDate.onblur = () => {
        switch (true) {
            case !$releaseDate.value.trim():
                $releaseDate.classList.remove("is-valid");
                $releaseDate.classList.add("is-invalid");
                $releaseDateError.classList.remove("is-valid");
                $releaseDateError.classList.add("is-invalid");
                $releaseDateError.innerText = "Ingrese la fecha de estreno";
                break;
            default:
                $releaseDate.classList.remove("is-invalid");
                $releaseDate.classList.add("is-valid");
                $releaseDateError.classList.remove("is-invalid");
                $releaseDateError.classList.add("is-valid");
                $releaseDateError.innerText = "Fecha de creación";
                break;
        };
    };

    $genreId.onblur = () => {
        switch (true) {
            case !$genreId.value.trim():
                $genreId.classList.remove("is-valid");
                $genreId.classList.add("is-invalid");
                $genreIdError.classList.remove("is-valid");
                $genreIdError.classList.add("is-invalid");
                $genreIdError.innerText = "Seleccione un género";
                break;
            default:
                $genreId.classList.remove("is-invalid");
                $genreId.classList.add("is-valid");
                $genreIdError.classList.remove("is-invalid");
                $genreIdError.classList.add("is-valid");
                $genreIdError.innerText = "Género";
                break;
        };
    };


    formulario.onsubmit = e => {
        e.preventDefault();

        const FORM_ELEMENTS = e.target.elements;
        for (let i = 0; i < FORM_ELEMENTS.length - 1; i++) {
            const element = FORM_ELEMENTS[i];
            if (element.value === "") {
                element.classList.add("is-invalid");
            };
        };

        let err = document.querySelectorAll(".is-invalid");
        if (err.length != 0) {
            console.log(err);
            $btn.classList.add("alert-warning");
        } else {
            $btn.classList.remove("alert-warning");
            // $btn.onclick = () => {
            //     console.log("lol no");
            //     $btn.submit();
            // };
            formulario.submit();
        };
    };

}