const message = (data, error)=>{
    let errorMsg = '';
    if(error = 0){
        errorMsg = 'success';
    }else if(error = 1){
        errorMsg = 'error';
    }
    return({data,status:errorMsg});
}

module.exports = message;