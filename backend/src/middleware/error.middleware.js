const errorMiddleware = (err,req,res,next) => {
    err.statusCode = err.statusCode || 500

    err.message = err.message || 'Something went wrong'


    res.status().json({
        success:false,
        message:err.message,
        stack:err.stack
    })
}

export default errorMiddleware