const posts = [
    {
        id: 1,
        image: "https://picsum.photos/seed/post1/400/300",
        title: "Belajar JavaScript Dasar",
        content: "JavaScript adalah bahasa pemrograman yang digunakan untuk membuat website menjadi lebih interaktif dan dinamis. Dengan JavaScript, kamu bisa mengelola event, memanipulasi DOM, serta berkomunikasi dengan server menggunakan API. Pemahaman dasar seperti variabel, function, looping, dan conditional sangat penting sebelum masuk ke framework seperti React atau Vue.",
        publish: true
    },
    {
        id: 2,
        image: "https://picsum.photos/seed/post2/400/300",
        title: "Mengenal React JS",
        content: "React adalah library JavaScript yang dikembangkan untuk membangun user interface berbasis komponen. Dengan React, developer dapat membuat UI yang reusable, efisien, dan mudah dikelola. Konsep penting dalam React meliputi state, props, lifecycle, serta penggunaan hooks seperti useState dan useEffect untuk mengatur logika aplikasi.",
        publish: true
    },
    {
        id: 3,
        image: "https://picsum.photos/seed/post3/400/300",
        title: "Pengenalan Node.js",
        content: "Node.js memungkinkan JavaScript berjalan di sisi server menggunakan engine V8 dari Chrome. Dengan Node.js, kamu dapat membangun REST API, sistem backend, hingga aplikasi real-time seperti chat app. Node.js sangat populer karena menggunakan satu bahasa yang sama untuk frontend dan backend.",
        publish: false
    },
    {
        id: 4,
        image: "https://picsum.photos/seed/post4/400/300",
        title: "Belajar Express JS",
        content: "Express adalah framework minimalis untuk Node.js yang digunakan untuk membangun aplikasi backend dan API dengan cepat. Express menyediakan fitur routing, middleware, serta kemudahan dalam menangani request dan response. Framework ini sangat cocok digunakan untuk membangun RESTful API yang scalable.",
        publish: true
    },
    {
        id: 5,
        image: "https://picsum.photos/seed/post5/400/300",
        title: "Database MongoDB",
        content: "MongoDB adalah database NoSQL yang menyimpan data dalam bentuk dokumen JSON (BSON). Database ini sangat fleksibel karena tidak memerlukan skema yang kaku seperti database relasional. MongoDB sering digunakan bersama Node.js karena kemudahan integrasi dan performa yang baik untuk aplikasi modern.",
        publish: false
    },
    {
        id: 6,
        image: "https://picsum.photos/seed/post6/400/300",
        title: "Deploy Aplikasi Web",
        content: "Deployment adalah proses menempatkan aplikasi ke server agar dapat diakses oleh pengguna secara online. Proses ini melibatkan build aplikasi, konfigurasi server, serta penggunaan layanan cloud seperti VPS atau platform seperti Vercel dan Netlify. Deployment yang baik memastikan aplikasi berjalan stabil, aman, dan memiliki performa yang optimal.",
        publish: true
    }
];

export default posts;
