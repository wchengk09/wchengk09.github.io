exports.main = function(req,res){
    if (!global.sess_counter)
        global.sess_counter = 0;
    global.sess_counter ++;
    res.end(Date.now() + '-' + global.sess_counter);    
}