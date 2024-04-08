function dialogHandler (dialog) {
    const dialogExist = document.querySelector('.dialog');
            if(dialogExist == null){
                document.body.appendChild(dialog); 
            }else {
                document.body.removeChild(dialogExist);
                document.body.appendChild(dialog); 

            }
}

export {
    dialogHandler
}