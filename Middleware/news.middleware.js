const checkNumber = ((req, res, next ) => {
    try{
        const{number} = req.query;
        if(number<5) res.send('baba you are too much')
        next() 
    } catch(error){
     console.log(error.message)   
    }
})

module.exports = checkNumber