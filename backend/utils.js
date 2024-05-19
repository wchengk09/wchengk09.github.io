exports.querySync = function(sql,data){
    return new Promise(function(resolve){
        conn.query(sql,data,function(err,res){
            if (err)throw err;
            resolve(res);
        })
    })
}

