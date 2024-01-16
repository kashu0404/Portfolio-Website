document.getElementsByClassName('menu-button')[0].addEventListener('click', () => {
    let sb = document.getElementById('sidebar');
   sb.style.display = 'flex';
})

document.getElementById('close-button').addEventListener('click', () => {
    let sb = document.getElementById('sidebar');
    sb.style.display = 'none';
}) 



    let sidebarLinks = document.querySelectorAll('#sidebar a');

    for (let link of sidebarLinks) {
        link.addEventListener('click', () => {
            let sb = document.getElementById('sidebar');
            sb.style.display = 'none';
        });
    }


    document.getElementById('close-button').addEventListener('click', () => {
        let sb = document.getElementById('sidebar');
        sb.style.display = 'none';
    });


    
