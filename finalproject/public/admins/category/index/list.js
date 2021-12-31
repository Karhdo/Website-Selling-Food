function actionDeleteCategory(event) {
    event.preventDefault();
    var urlRequest = $(this).data('url');
    var that = $(this);
    Swal.fire({
        title: 'Bạn chắc chắn xóa danh mục này?',
        text: "Bạn sẽ không thể hoàn tác!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: 'GET',
                url: urlRequest,
                success: function(data){
                    if(data.code == 200)
                    {
                        that.parent().parent().remove();
                        Swal.fire(
                            'Xóa thành công!',
                            'Danh mục đã được xóa.',
                            'success'
                        )
                    }
                },
                error: function() {

                }
            })
        }
      })
}

$(function() {
    $(document).on('click', '.action_delete_category', actionDeleteCategory);
})