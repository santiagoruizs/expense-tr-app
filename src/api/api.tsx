export const userLogin = async (username : string, password: string) => {
    const payload = {username, password}
    console.log("Logging in with:", {payload});
    const response = await fetch(import.meta.env.VITE_API_URL +'/auth/login',
        {
          method : 'POST',
          headers : {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        })
    return response
}

export const userSignup = async (username:string, email:string, password:string) => {

    const payload = {username, email, password}
    console.log("Signing up with:", {payload});

    const response = await fetch(import.meta.env.VITE_API_URL +'/auth/signup',
    {
        method : 'POST',
        headers : {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    })
    return response
}
