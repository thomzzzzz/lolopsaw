document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.featured-products .product-item');
    const productPopup = document.getElementById('productPopup');
    const closeButton = productPopup.querySelector('.close-button');
    const popupImage = productPopup.querySelector('.popup-image img');
    const popupTitle = productPopup.querySelector('.popup-title');
    const popupPrice = productPopup.querySelector('.popup-price');
    const popupDescription = productPopup.querySelector('.popup-description');

    const productData = {
        '1': {
            image: 'gambar/produk1.jpg',
            title: 'Nama Produk 1',
            price: 'Rp 100.000',
            description: 'Deskripsi singkat untuk produk 1. Ini bisa menjadi detail lebih lanjut tentang fitur dan manfaat produk.'
        },
        '2': {
            image: 'gambar/produk2.jpg',
            title: 'Nama Produk 2',
            price: 'Rp 150.000',
            description: 'Deskripsi singkat untuk produk 2. Jelaskan mengapa produk ini menarik dan apa keunggulannya.'
        },
        '3': {
            image: 'gambar/produk3.jpg',
            title: 'Nama Produk 3',
            price: 'Rp 200.000',
            description: 'Deskripsi singkat untuk produk 3. Fokus pada nilai yang ditawarkan produk ini kepada pelanggan.'
        },
        '4': {
            image: 'gambar/produk4.jpg',
            title: 'Nama Produk 4',
            price: 'Rp 120.000',
            description: 'Deskripsi singkat untuk produk 4. Berikan informasi yang relevan dan menarik bagi calon pembeli.'
        }
    };

    productItems.forEach(item => {
        item.addEventListener('click', function() {
            const productId = this.dataset.productId;
            const data = productData[productId];

            if (data) {
                popupImage.src = data.image;
                popupImage.alt = data.title;
                popupTitle.textContent = data.title;
                popupPrice.textContent = data.price;
                popupDescription.textContent = data.description;
                productPopup.classList.add('active');
            }
        });
    });

    closeButton.addEventListener('click', function() {
        productPopup.classList.remove('active');
    });

    productPopup.addEventListener('click', function(event) {
        if (event.target === this) {
            productPopup.classList.remove('active');
        }
    });

    // Menu Navigasi Mobile
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('header nav');

    if (menuIcon && nav) {
        menuIcon.addEventListener('click', function() {
            nav.classList.toggle('open');
        });
    }
});
