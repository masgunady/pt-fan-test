const errorHandler = (response, err) => {
    if(err?.message?.includes('invalid input syntax for type integer')){
        return response.status(409).json({
            success: false,
            message: 'Invalid parameter!',
        })
    }
    if(err?.message?.includes('users_email_key')){
        return response.status(409).json({
            success: false,
            message: 'Email has already been taken!',
            results: [
                {
                    value: 'form email',
                    msg: 'Email has already been taken!!',
                    param: 'email',
                    location: 'body'
                }
            ]
        })
    }

    if(err?.message?.includes('unauthorized')){
        return response.status(401).json({
            success: false,
            message:'Unauthorized!',
        })
    }
    if(err?.message?.includes('forbidden')){
        return response.status(403).json({
            success: false,
            message:'Forbidden! You do not have access!',
        })
    }
    if(err?.message?.includes('wrong_suppervisor')){
        return response.status(403).json({
            success: false,
            message:'Forbidden. Wrong Supervisor!',
        })
    }

    if(err?.message?.includes('wrong_credentials')){
        return response.status(400).json({
            success: false,
            message:'Wrong Email or Password!',
        })
    }

    if(err?.message?.includes('email_has_registered')){
        return response.status(409).json({
            success: false,
            message:'Email has already been taken!',
        })
    }
  
    console.log(err)
    return response.status(500).json({
        success: false,
        message: 'Error: Internal server error!',
    })
}

module.exports = errorHandler 
