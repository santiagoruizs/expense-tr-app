export const userLogin = async (username : string, password: string) => {
    const payload = {username, password}
    // console.log("Logging in with:", {payload});
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
    // console.log("Signing up with:", {payload});

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

export const getCategories = async () => {
    // console.log("Getting categories");
    const response = await fetch(import.meta.env.VITE_API_URL +'/movements/categories',
        {
          method : 'GET',
          headers : {
            'Content-Type': 'application/json',
          }
        })
    return response
}

export const getUserBalance = async (user_id : number) => {

    // console.log("Geting user balance");
    const response = await fetch(import.meta.env.VITE_API_URL +'/movements/balance/'+user_id,
        {
          method : 'GET',
          headers : {
            'Content-Type': 'application/json',
          },
        })
    return response
}

export const getUserMovements = async (user_id : number) => {

  // console.log("Geting user expenses");
  const response = await fetch(import.meta.env.VITE_API_URL +'/movements/'+user_id,
      {
        method : 'GET',
        headers : {
          'Content-Type': 'application/json',
        },
      })
  return response
}

export const addUserExpense = async (user_id : number, amount:number, category_id:number, description:string) => {
  const payload = {user_id, amount, category_id, description, expense_date: null}
  // console.log("Adding Expense with payload:");
  // console.log(payload)
  const response = await fetch(import.meta.env.VITE_API_URL +'/movements/expense',
      {
        method : 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(payload)
      })
  return response
}

export const addUserIncome = async (user_id : number, amount:number, category_id:number, description:string) => {
  const payload = {user_id, amount, category_id, description, expense_date: null}
  // console.log("Adding Income with payload:");
  // console.log(payload)
  const response = await fetch(import.meta.env.VITE_API_URL +'/movements/income',
      {
        method : 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body : JSON.stringify(payload)
      })
  return response
}

export const getDayUserExpenses = async (user_id : number) => {

  // console.log("Geting user expenses");
  const response = await fetch(import.meta.env.VITE_API_URL +'/movements/expenses/day/'+user_id,
      {
        method : 'GET',
        headers : {
          'Content-Type': 'application/json',
        },
      })
  return response
}

export const getWeekUserExpenses = async (user_id : number) => {

  // console.log("Geting user expenses");
  const response = await fetch(import.meta.env.VITE_API_URL +'/movements/expenses/week/'+user_id,
      {
        method : 'GET',
        headers : {
          'Content-Type': 'application/json',
        },
      })
  return response
}

export const getMonthUserExpenses = async (user_id : number) => {

  // console.log("Geting user expenses");
  const response = await fetch(import.meta.env.VITE_API_URL +'/movements/expenses/month/'+user_id,
      {
        method : 'GET',
        headers : {
          'Content-Type': 'application/json',
        },
      })
  return response
}


export const editExpense = async (expense_id:number, category_id:number, amount:number, description:String) => {
  const payload = {expense_id, amount, category_id, description}
  // console.log("Geting user expenses");
  const response = await fetch(import.meta.env.VITE_API_URL +'/movements/expense/'+expense_id,
      {
        method : 'PUT',
        headers : {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
  return response
}

export const editIncome = async (income_id:number, category_id:number, amount:number, description:String) => {
  const payload = {income_id, amount, category_id, description}
  // console.log("Geting user expenses");
  const response = await fetch(import.meta.env.VITE_API_URL +'/movements/income/'+income_id,
      {
        method : 'PUT',
        headers : {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
  return response
}