//Vì sao a gọi trước b?
    //VÌ process.nextTick() là cách để thực hiện lời gọi hàm callback ngay lập tức.
    //Còn hàm callback trong setImmediate() sẽ được thực thi trong lần tiếp theo.

//Zalgo
    //Lỗi Zalgo xảy ra khi lập trình viên trộn lẫn synchronous call back với 
    //asynchronous call back trong control flow : if then else hoặc loop.

    //Zalgo gây ra tình huống lộn xộn như sau: Giả sử trước khi truy vấn dữ liệu 
    //thì buộc phải kiểm tra quyền (check priviledge) trước. Truy vấn dữ liệu thì có lựa chọn sử dụng cache hay không. 