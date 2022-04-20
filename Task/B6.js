//Liệt kê các phương pháp clone Object?
    // Sử dụng Spread, (Nhóm Shallow Clone)
    // Sử dụng Object.assign(), (Nhóm Shallow Clone)
    // Phương thức JSON, (Nhóm Deep Clone)
    // Sử dụng thư viện bên thứ 3 – Lodash (Nhóm Deep Clone)

//Phân biệt shallow clone và deep clone
    //Shallow clone sẽ chỉ clone Object "chính" mà không clone các Object "con". 
    //Tức là 2 bản sao Object "chính" sẽ cùng chứa tham chiếu đến các object con.

    //Khác với Shallow clone, Deep clone sẽ clone ra một object độc lập hoàn toàn với 
    //object cũ và vẫn giữ được tính nguyên bản của nó.

//Có phải trường hợp nào cũng nên dùng Deep Clone không?
    //Không 
    //Nếu bị lạm dụng quá nhiều vào cả những trường hợp không cần thiết thì sẽ gây tăng hiệu năng xử lý,
    //Tốn thêm dung lượng lưu trữ trong Heap vì phải lưu thêm đối tượng mới, hơn nữa lại tốn cả công ngồi code.
    //Việc áp dụng Deep Clone thường phải có tính toán cụ thể cho từng nghiệp vụ để xét có nên dùng hay không, 
    //Không thì mặc định không nên dùng.