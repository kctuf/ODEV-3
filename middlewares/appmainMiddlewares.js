const middlewForAll = (req,res,next) => {
    console.log('Yeni bir istek geldi');
    next();
};

const middlewForPost = (req,res,next)=>{
    console.log('Post isteği için istek gönderildi');
    next();
};

module.exports={middlewForAll,middlewForPost};