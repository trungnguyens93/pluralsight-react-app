# pluralsight-react-app

### 1. Description

- Có 3 cách để build một app React - ASP.NET CORE
  - Bắt đầu bằng tệp file cấu hình webpack.config.js
  - Sử dụng template SPA mà ASP.NET CORE hỗ trợ
  - Học cách từ Facebook's Create-React-App (CRA)

### 2. Các thành phần quan trọng trong React project

- webpack:

  - Sử dụng webpack để bundle nhóm các tập tin các file _.js thành một file _.js
  - Defaul webpack ban đâu là webpack.config.js. Có thể chuyển config webpack sang các file khác. Lúc đó khi thực hiện bundle với webpack cần chỉnh sửa lại như sau "webpack --config webpack.client.js"
  - Thay vì phải trỏ đến webpack trong thư mục /.bin của node_modules, chúng ta có thể lưu nó vào trong phần 'script' của file package.json những phần liên quan đến bundle, chạy webpack-dev-server,...
  - Những thành phần config trong file webpack:
    - Input và Output của việc bundle
    - Khai báo devServer (liên quan đến webpack-dev-server)
    - devTool: sử dụng để ánh xạ thành phần trong file đã biên dịch với thành phần trong file gốc

- webpack-dev-server:
  - Dùng để tạo ra một server với các thông tin cấu hình như: thư mục root của server, cổng kết nối
  - Có thế thay thế server này sang các server khác như: Express (NodeJs), server bên ASP.NET CORE
