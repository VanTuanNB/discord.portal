CSR(Client side rendering): Render ở dưới trình duyệt
SSR(Server side rendering); Render ở trên server

1. Client component:
    - Khái niệm:
        -
2. Server component:
    - Khái niệm:
        -

### Note:

Cả 2 khái niệm trên trong NextJs, khi build nextJs sẽ build cả 2 loại component là client và server thành những file static markup
-> rồi sao đó trả về cho client -> nếu là server component thì client sẽ render ra và tiếp tục render những component tiếp theo
-> nếu là client component, khi được trả về html và đồng thời nó cũng trả về thêm file js(inline script), thì nó chạy file js đó
để nó binding các DOM event, state... nhầm mục đích đồng bộ DOM, tương tác với người dùng..., trong quá trình nó thực thi thì không?
khác gì cách hoạt động của các trang SPA, số lần render sẽ dựa vào logic của các client component...
