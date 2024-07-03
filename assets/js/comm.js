document.addEventListener('DOMContentLoaded', function () {
    // 요소 선택
    const headerEl = document.querySelector('#header');
    const menuItems = document.querySelectorAll('.top-menu dl dt a');
    const swiperEl = document.querySelector('.swiper');
    const btnSearchEl = document.querySelector('.btn-search');
    const layerSearchEl = document.querySelector('.layer-search');
    const btnCloseEl = document.querySelector('.layer-search .btn-close');
    let lastScrollY = 0;

    // 스크롤 이벤트 핸들러
    const handleScroll = _.throttle(function () {
        const currentScrollY = window.scrollY;
        const headerRect = headerEl.getBoundingClientRect();
        const swiperRect = swiperEl.getBoundingClientRect();

        // 헤더의 bottom과 swiper의 bottom이 만났을 때 theme-dark 클래스 제거
        if (headerRect.bottom >= swiperRect.bottom) {
            headerEl.classList.remove('theme-dark');
        } else {
            headerEl.classList.add('theme-dark');
        }

        if (currentScrollY > 1) {
            headerEl.classList.add('is__scroll');
        } else {
            headerEl.classList.remove('is__scroll');
        }

        lastScrollY = currentScrollY;
    }, 300);

    // 메뉴 클릭 이벤트 핸들러
    const handleMenuClick = (e) => {
        e.preventDefault();
        const parentDl = e.target.closest('dl');

        if (parentDl.classList.contains('active')) {
            parentDl.classList.remove('active');
        } else {
            document.querySelectorAll('.top-menu dl').forEach((dl) => dl.classList.remove('active'));
            parentDl.classList.add('active');
        }
    };

    // 검색 버튼 클릭 이벤트 핸들러
    const handleSearchToggle = () => {
        if (layerSearchEl.classList.contains('fade-in')) {
            layerSearchEl.classList.remove('fade-in');
            layerSearchEl.classList.add('fade-out');
        } else {
            layerSearchEl.classList.remove('fade-out');
            layerSearchEl.classList.add('fade-in');
        }
    };

    // 검색 닫기 버튼 클릭 이벤트 핸들러
    const handleSearchClose = () => {
        layerSearchEl.classList.remove('fade-in');
        layerSearchEl.classList.add('fade-out');
    };

    // 초기 설정 및 이벤트 바인딩
    const init = () => {
        // 메뉴 클릭 이벤트 바인딩
        menuItems.forEach((item) => item.addEventListener('click', handleMenuClick));

        // 검색 버튼 클릭 이벤트 바인딩
        btnSearchEl.addEventListener('click', handleSearchToggle);

        // 검색 닫기 버튼 클릭 이벤트 바인딩
        btnCloseEl.addEventListener('click', handleSearchClose);

        // 페이지 로드 시 .active 클래스 제거
        if (window.innerWidth >= 768) {
            document.querySelectorAll('.top-menu dl').forEach((dl) => dl.classList.remove('active'));
        }

        // 브라우저 크기 변경 시 .active 클래스 제거
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                document.querySelectorAll('.top-menu dl').forEach((dl) => dl.classList.remove('active'));
            }
        });

        // 화면 크기 체크 및 스크롤 이벤트 설정
        const checkScreenSize = () => {
            if (window.innerWidth >= 1280) {
                window.addEventListener('scroll', handleScroll);
            } else {
                window.removeEventListener('scroll', handleScroll);
                headerEl.classList.remove('bg-w');
                gsap.to(headerEl, {
                    y: 0,
                    backgroundColor: 'transparent',
                    backdropFilter: 'blur(0)',
                    duration: 0.5,
                });
            }
        };

        // 초기 로드 시 체크
        checkScreenSize();

        // 브라우저 리사이즈 시 체크
        window.addEventListener('resize', checkScreenSize);
    };

    init();
});
