import 


const getRazorpayApiKey = async (req,res,next) =>{
    return res
    .status(201)
    .json(new ApiResponse(201, createdUser, "User registered successfully"));

}

const buyScription = async (req,res,next) =>{
    
}


const verifySubscription = async (req,res,next) =>{
    
}


const cancelScription = async (req,res,next) =>{
    
}

const allPayments= async (req,res,next) =>{
    
}

export {
    getRazorpayApiKey,
    buyScription,
    verifySubscription,
    cancelScription,
    allPayments
}