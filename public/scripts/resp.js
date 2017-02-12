var closeMenu = document.querySelector('#close-responsive-btn');
var openMenu = document.querySelector('#show-responsive-btn');
var rightMenu = document.querySelector('.responsive-nav-menu');
var darkness = document.querySelector('.dim');
var infoPlansCard = document.getElementsByClassName("info-plans"); /*card principal dos planos*/
var infoPlansResponsive = document.getElementsByClassName('info-plans-responsive');

function showMenuContent() {
    document.querySelector('#show-responsive-btn').style.display = 'none';
    document.querySelector('#close-responsive-btn').style.display = 'block';
}

function closeMenuContent() {
    document.querySelector('#show-responsive-btn').style.display = 'block';
}

var showResponsiveMenu = () => {
    document.body.style.overflow = 'hidden';
    darkness.style.display = 'block';
    rightMenu.style.right = '0px'; /*slide in*/
}

var closeResponsiveMenu = () => {
    darkness.style.display = 'none';
    rightMenu.style.right = '-400px'; /*slide out*/
    openMenu.style.display = 'block';
    document.body.style.overflow = 'inherit';
}

(function slideResponsiveMenu() {
    openMenu.addEventListener('click', function() { /*se o botao de abrir o menu for clicado...*/
	showResponsiveMenu();
	
	document.addEventListener('click', function(e) { /*com o menu aberto, se houver qualquer clique na página, verifica se é fora do menu, se for, recua o menu novamente*/
	    if(e.target.id == 'dark-screen')
		closeResponsiveMenu();
	});
    });
    /*se o botao de fechar o menu for clicado...*/
    closeMenu.addEventListener('click', function() {
	closeResponsiveMenu();
    });

})();

(function checkButtonNav() {
    var checkMinWidth = window.matchMedia('screen and (max-width: 900px)');

    checkMinWidth.addListener(function(e) {
        /*se a janela já passou dos 800px de width, não deixar nenhum botão com display ativo*/
	if(e.matches) {
	    openMenu.style.display = 'block';
	} else {
	    if(rightMenu.style.right == '0px') {
		rightMenu.style.right = '-400px';
	    }
	    darkness.style.display = 'none';
	    document.body.style.overflow = 'inherit';
	    openMenu.style.display = 'none';
	}
    })
})();

var responsiveCards = () => {
    for(var i=0; i<infoPlansCard.length; i++) {
	infoPlansCard[i].style.display = 'none';
	infoPlansResponsive[i].style.display = 'block';
    }
}

(function viewPortWidth() {
    var beginWidth = window.innerWidth;
    if(beginWidth < 1200)
	responsiveCards();

    window.onresize = () => {
	var vpWidth = window.innerWidth;

	if(vpWidth <= 1200) { /*se a largura da janela (apenas no resize) for menor ou igual que 1200 pixels...*/
	    responsiveCards();
	} else {
	    for(var i=0; i<infoPlansCard.length; i++) {
	        infoPlansCard[i].style.display = 'inline-block';
		infoPlansResponsive[i].style.display = 'none';
	    }
	}
    }
})();

(function checkScroll() {
    var header = document.querySelector('nav');
    var body   = document.querySelector('body');

    window.addEventListener('scroll', function () {
	if(body.scrollTop < 160) {
	    header.style.padding = '30px';
	} else {
	    header.style.padding = '20px 30px';
	}
    });
})();
