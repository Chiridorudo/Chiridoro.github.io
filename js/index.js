const getCardsElm = document.getElementById ("sectionCard")
// console.log (`getCardsElm`,getCardsElm)
// console.log (`baseUrl`,getCardsElm.baseURI)
const mockData = [
    {
        id:1,
        title: "Decal In UV",
        description: "Decal chất lượng sắc nét, tính thẩm mỹ cao.",
        srcImg: "https://i.pinimg.com/564x/e3/ac/86/e3ac8678c07a119df5bf463674451d6f.jpg",
        button: "../untitled folder/index.html",
    },
    {
        id:2,
        title: "Decal In 3D",
        description: "Decal cán mờ, in hình, họa tiết theo sở thích.",
        srcImg: "https://i.pinimg.com/564x/5c/1e/9c/5c1e9c612275dc3c6fa1bde66a70813e.jpg",
        button: "../untitled folder 3D/index.html",
    },
    {
        id:3,
        title: "Decal Cắt Logo",
        description: "Decal Logo thể hiện thiết kế logo của thương hiệu.",
        srcImg: "https://i.pinimg.com/564x/1a/78/27/1a78271bf018651f4b538d0caca0256b.jpg",
        button: "../untitled folder Logo/index.html",
    },
    {
        id:4,
        title: "Decal Cắt Mờ",
        description: "Decal mờ dán kính hạn chế tầm nhìn.",
        srcImg: "https://i.pinimg.com/564x/4e/22/6f/4e226feaf07b62beee9816922c1bcc81.jpg",
        button: "../untitled folder CM/index.html",
    },
    {
        id:5,
        title: "Fiml Cách Nhiệt",
        description: "Film cách nhiệt chống nóng nhà kính.",
        srcImg: "https://i.pinimg.com/564x/c2/2c/9e/c22c9eaa14f903a987676fb2d4ff5fcc.jpg",
        button: "../untitled folder Film/index.html",
    },
    {
        id:6,
        title: "Decal Hoa Văn",
        description: "Decal sử dụng cho cửa kính phòng tắm, che tầm nhìn.",
        srcImg: "https://m.media-amazon.com/images/I/71aOSgdkm4S._AC_SX679_.jpg",
        button: "../untitled folder HV/index.html",
    },
    {
        id:7,
        title: "Decal Vân Đá",
        description: "Decal thường dùng trong nhà bếp, bàn ăn.",
        srcImg: "https://i.pinimg.com/564x/7b/38/90/7b389080af71911ee1709c6b3d45e63f.jpg",
        button: "../untitled folder VD/index.html",
    },
    {
        id:8,
        title: "Giấy Dán Tường",
        description: "Trang trí tường nhà, thích hợp với mọi loại tường.",
        srcImg: "https://noithatbinhminh.com.vn/wp-content/uploads/2018/08/cung-cap-giay-dan-tuong-phong-ngu-gia-re-dep-nhat-3.jpg",
        button: "../untitled folder G/index.html",
    }
]
let html = ""
for (let index = 0; index < mockData.length; index ++){
    // console.log (`mockData`, mockData[index])
    const card = `
    <div>
    <div class="card ms-2 me-2 mt-4 mb-4" style="width: 18rem;">
        <img src=${mockData [index].srcImg} 
        class="card-img-top" alt="bemo"/>
        <div class="card-body">
        <h5 class="card-title">${mockData [index].title}</h5>
        <p class="card-text">${mockData [index].description}</p>
        <a href="${mockData [index].button}" class="btn btn-primary">Some decal samples</a>
        </div>
    </div>
    </div>
    `
    // console.log(`card`, card)
    html += card
}
getCardsElm.innerHTML = html
console.log (`html`, html)