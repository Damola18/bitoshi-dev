var toastMixin = Swal.mixin({
    toast:true,
    icon:'success',
    width:250,
    height: 100,
    iconColor: 'white',
    customClass: {
        popup: 'colored-toast'
    },
    title:"General Title",
    animation: true,
    position: "top-right",
    showConfirmButton: true, 
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
var profileBtn = document.getElementById("updateProfile");
profileBtn.addEventListener('click', function (){
    toastMixin.fire({
        toast:true, 
        icon: 'success',
        title: 'Changes Saved',
        position: 'top-right',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
})