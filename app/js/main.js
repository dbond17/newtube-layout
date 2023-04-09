$(document).ready(function () {
	$('.header__search .field').keyup(function () {
		const close = $(this).find('.field__close')
		const value = $(this).find('input')

		if (value.val().length > 0) {
			close.addClass('length')
			$('.header__search').addClass('active')
		} else {
			close.removeClass('length')
			$('.header__search').removeClass('active')
		}
	})

	$('.header__mobile--search').on('click', function(){
		$('.modal-search').toggleClass('active')
	})

	$('.modal-search__close').on('click', function(){
		$('.modal-search').removeClass('active')
	})

	$('.field__close').on('click', function () {
		$('.header__search .field input').val('')
		$(this).removeClass('length')
		$('.header__search').removeClass('active')
	})

	$('.nav__burger').on('click', function () {
		const parent = $(this).closest('.nav')
		const logo = parent.find('.nav__logo img')
		parent.toggleClass('close')
		$('.header__burger').addClass('active')

		if (parent.hasClass('close')) {
			$('.main').addClass('margin')
			logo.attr('src', 'images/logo-empty.svg')
		} else {
			$('.main').removeClass('margin')
			logo.attr('src', 'images/logo.svg')
		}
	})

	$('.header__burger').on('click', function () {
		const parent = $(this).closest('.wrapper')

		const nav = parent.find('.nav')

		const logo = parent.find('.nav__logo img')

		nav.toggleClass('close')

		$(this).removeClass('active')

		if (nav.hasClass('close')) {
			logo.attr('src', 'images/logo-empty.svg')
		} else {
			$('.main').removeClass('margin')
			logo.attr('src', 'images/logo.svg')
		}
	})

	const swiper = new Swiper('.showcase__container', {
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 16,
	})

	$('.cards__nav--link').on('click', function () {
		$('.cards__nav--link').removeClass('active')
		$(this).addClass('active')
	})

	$('.header__mobile--burger').on('click', function () {
		$('body').toggleClass('hidden')
		$('.nav').toggleClass('active')
	})

	$('.header-video__burger').on('click', function () {
		$(this).toggleClass('active')
		$('body').toggleClass('hidden')
		$('.nav').toggleClass('active')
	})

	$('.field__password').click(function () {
		const img = $(this).find('img')

		$(this).toggleClass('active')

		let input = $(this).parent().find('input')
		if ($(this).hasClass('active')) {
			img.attr('src', 'images/password-1.svg')
			input.attr('type', 'text')
		} else {
			img.attr('src', 'images/password.svg')
			input.attr('type', 'password')
		}
	})

	$('.header__login, .header__mobile--login').on('click', function () {
		$('.login').addClass('active')
		if ($(window).width() > 767) {
			$('body').addClass('hidden hidden-index')
		}
	})

	$('.header__registration').on('click', function () {
		$('.registr').addClass('active')
		if ($(window).width() > 767) {
			$('body').addClass('hidden hidden-index')
		}
	})

	$('.login__close').on('click', function () {
		$('.login').removeClass('active')
		$('body').removeClass('hidden hidden-index')
		$('.registr').removeClass('active')
	})

	$(document).on('click', function (e) {
		if (
			!$(e.target).closest(
				'.header__login, .login, .header__mobile--login, .header__mobile--burger, .header__registration, .header-video__burger'
			).length
		) {
			$('.login').removeClass('active')
			$('body').removeClass('hidden hidden-index')
			$('.nav').removeClass('active')
			$('.registr').removeClass('active')
		}
		e.stopPropagation()
	})

	$(document).on('click', function (e) {
		if (
			!$(e.target).closest('.header__mobile--burger, .header-video__burger')
				.length
		) {
			$('.nav').removeClass('active')
			$('.header-video__burger').removeClass('active')
		}
		e.stopPropagation()
	})

	$('.card__dots').on('click', function () {
		$(this).toggleClass('active')
	})

	$('.video__later').on('click', function () {
		$(this).toggleClass('active')
	})

	$('.video__like').on('click', function () {
		$(this).toggleClass('active')
		$(this).next().removeClass('active')
	})

	$('.video__dislike').on('click', function () {
		$(this).toggleClass('active')
		$(this).prev().removeClass('active')
	})

	$('.video__repost').on('click', function () {
		$(this).toggleClass('active')
		$(this).next().toggleClass('active')
		if ($('.video__repost-dropdown').hasClass('active')) {
			$(this).parent().toggleClass('active')
		} else {
			$('.video__repost-wrapper').removeClass('active')
		}
	})

	$(document).on('click', function (e) {
		if (
			!$(e.target).closest('.video__repost, .video__repost-dropdown').length
		) {
			$('.video__repost-dropdown').removeClass('active')
			$('.video__repost').removeClass('active')
			$('.video__repost-wrapper').removeClass('active')
		}
		e.stopPropagation()
	})

	$('.video__dots').on('click', function () {
		$(this).toggleClass('active')
		$(this).next().toggleClass('active')
		if ($('.video__dots-dropdown').hasClass('active')) {
			$(this).parent().toggleClass('active')
		} else {
			$('.video__dots-wrapper').removeClass('active')
		}
	})

	$(document).on('click', function (e) {
		if (!$(e.target).closest('.video__dots, .video__dots-dropdown').length) {
			$('.video__dots-dropdown').removeClass('active')
			$('.video__dots').removeClass('active')
			$('.video__dots-wrapper').removeClass('active')
		}
		e.stopPropagation()
	})

	if ($(window).width() < 992) {
		$(window).scroll(function () {
			var aTop = $('.header-video').height()
			if ($(this).scrollTop() >= aTop) {
				$('.video').addClass('sticky')
			} else {
				$('.video').removeClass('sticky')
			}
		})
	}

	$('.comments__icon').on('click', function () {
		var bodyHeight = $(window).height()
		var videoHeight = $('.video__img').height()
		var headerHeight = $('.header-video').height()

		$('.comments__mobile').toggleClass('active')

		if ($('.comments__mobile').hasClass('active')) {
			if ($('.video').hasClass('sticky')) {
				$('.comments__mobile').css(
					'height',
					`${bodyHeight - videoHeight - headerHeight}`
				)
			} else {
				$('.comments__mobile').css(
					'height',
					`${bodyHeight - videoHeight - headerHeight - '22'}`
				)
			}

			$('body').addClass('scroll')
		} else {
			$('.comments__mobile').css('height', 'auto')
			$('body').removeClass('scroll')
		}
	})
})
